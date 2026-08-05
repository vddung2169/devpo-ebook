/**
 * DEV PỒ — Ghi kết quả bài test nhân viên vào Google Sheet
 *
 * CÁCH CÀI ĐẶT: xem file docs/HUONG-DAN-GOOGLE-SHEET.md
 * Dán toàn bộ file này vào Apps Script của Google Sheet kết quả.
 */

var SHEET_NAME = "Kết quả test";
var HEADERS = [
  "Thời gian bắt đầu",
  "Thời gian nộp",
  "Họ tên",
  "SĐT",
  "Trạng thái",
  "Điểm",
  "Tổng câu",
  "% đúng",
  "Thời gian làm",
  "Đã làm (câu)",
  "Số lần refresh",
  "Session ID",
  "Bộ đề",
];

function doGet() {
  return ContentService.createTextOutput("DEV PO quiz webhook OK");
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = getSheet_();
    if (data.type === "start") handleStart_(sheet, data);
    else if (data.type === "progress") handleProgress_(sheet, data);
    else if (data.type === "finish") handleFinish_(sheet, data);
    else throw new Error("type không hợp lệ: " + data.type);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

/** Lấy sheet kết quả — tự tạo sheet + hàng tiêu đề nếu chưa có */
function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet
      .getRange(1, 1, 1, HEADERS.length)
      .setFontWeight("bold")
      .setBackground("#f1f3f4");
    sheet.setFrozenRows(1);
    sheet.setColumnWidths(1, 2, 150);
    sheet.setColumnWidth(HEADERS.indexOf("Session ID") + 1, 260);
  }
  migrateHeaders_(sheet);
  return sheet;
}

/** Sheet tạo từ bản script cũ chưa có cột "Bộ đề" — tự thêm vào cuối hàng tiêu đề */
function migrateHeaders_(sheet) {
  var lastCol = sheet.getLastColumn();
  var current = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  for (var i = 0; i < HEADERS.length; i++) {
    if (current.indexOf(HEADERS[i]) === -1) {
      lastCol += 1;
      sheet
        .getRange(1, lastCol)
        .setValue(HEADERS[i])
        .setFontWeight("bold")
        .setBackground("#f1f3f4");
    }
  }
}

function col_(name) {
  return HEADERS.indexOf(name) + 1;
}

/** Tìm dòng theo Session ID (tìm từ dưới lên) */
function findRow_(sheet, sessionId) {
  var last = sheet.getLastRow();
  if (last < 2) return -1;
  var vals = sheet.getRange(2, col_("Session ID"), last - 1, 1).getValues();
  for (var i = vals.length - 1; i >= 0; i--) {
    if (String(vals[i][0]) === String(sessionId)) return i + 2;
  }
  return -1;
}

/**
 * Bắt đầu bài mới: nếu cùng SĐT còn phiên "Đang làm" thì đánh dấu
 * "Bỏ dở (làm lại)" — đây là dấu hiệu nhân viên reset để làm lại.
 */
function handleStart_(sheet, d) {
  var last = sheet.getLastRow();
  if (last >= 2) {
    var vals = sheet.getRange(2, 1, last - 1, HEADERS.length).getValues();
    for (var i = 0; i < vals.length; i++) {
      var phone = String(vals[i][col_("SĐT") - 1]).replace(/^'/, "");
      var status = vals[i][col_("Trạng thái") - 1];
      if (phone === String(d.phone) && status === "Đang làm") {
        sheet.getRange(i + 2, col_("Trạng thái")).setValue("Bỏ dở (làm lại)");
      }
    }
  }
  var row = new Array(HEADERS.length).fill("");
  row[col_("Thời gian bắt đầu") - 1] = new Date(d.startedAt);
  row[col_("Họ tên") - 1] = d.name;
  row[col_("SĐT") - 1] = "'" + d.phone; // giữ số 0 đầu
  row[col_("Trạng thái") - 1] = "Đang làm";
  row[col_("Tổng câu") - 1] = d.total;
  row[col_("Đã làm (câu)") - 1] = 0;
  row[col_("Số lần refresh") - 1] = d.refreshCount || 0;
  row[col_("Session ID") - 1] = d.sessionId;
  row[col_("Bộ đề") - 1] = d.quiz || "";
  sheet.appendRow(row);
}

/** Cập nhật tiến độ (số câu đã làm, số lần refresh) trong lúc làm bài */
function handleProgress_(sheet, d) {
  var r = findRow_(sheet, d.sessionId);
  if (r === -1) return;
  if (d.answered != null) sheet.getRange(r, col_("Đã làm (câu)")).setValue(d.answered);
  if (d.refreshCount != null)
    sheet.getRange(r, col_("Số lần refresh")).setValue(d.refreshCount);
}

/** Nộp bài: điền điểm, thời gian, trạng thái Hoàn thành */
function handleFinish_(sheet, d) {
  var r = findRow_(sheet, d.sessionId);
  if (r === -1) {
    // Phòng khi sự kiện start bị mất (offline lúc bắt đầu) — vẫn ghi đủ 1 dòng
    handleStart_(sheet, d);
    r = sheet.getLastRow();
  }
  sheet.getRange(r, col_("Thời gian nộp")).setValue(new Date(d.finishedAt));
  sheet.getRange(r, col_("Trạng thái")).setValue("Hoàn thành");
  sheet.getRange(r, col_("Điểm")).setValue(d.score);
  sheet.getRange(r, col_("Tổng câu")).setValue(d.total);
  sheet.getRange(r, col_("% đúng")).setValue(d.percent + "%");
  sheet.getRange(r, col_("Thời gian làm")).setValue(formatDuration_(d.durationSeconds));
  sheet.getRange(r, col_("Đã làm (câu)")).setValue(d.answered);
  sheet.getRange(r, col_("Số lần refresh")).setValue(d.refreshCount || 0);
  if (d.quiz) sheet.getRange(r, col_("Bộ đề")).setValue(d.quiz);
}

function formatDuration_(seconds) {
  var m = Math.floor(seconds / 60);
  var s = seconds % 60;
  return m + " phút " + (s < 10 ? "0" : "") + s + " giây";
}
