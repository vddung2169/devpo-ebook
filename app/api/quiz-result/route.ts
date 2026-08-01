import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const ALLOWED_TYPES = ["start", "progress", "finish"];

/**
 * Proxy gửi kết quả bài test sang Google Apps Script (ghi vào Google Sheet).
 * Cấu hình biến môi trường GOOGLE_SCRIPT_URL — xem docs/HUONG-DAN-GOOGLE-SHEET.md
 */
export async function POST(req: NextRequest) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    return NextResponse.json(
      { ok: false, error: "GOOGLE_SCRIPT_URL chưa được cấu hình" },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON không hợp lệ" }, { status: 400 });
  }

  if (typeof body?.type !== "string" || !ALLOWED_TYPES.includes(body.type)) {
    return NextResponse.json({ ok: false, error: "type không hợp lệ" }, { status: 400 });
  }

  try {
    // Apps Script yêu cầu text/plain để tránh preflight; luôn follow redirect
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(body),
      redirect: "follow",
      cache: "no-store",
    });
    const text = await res.text();
    let ok = res.ok;
    try {
      ok = ok && JSON.parse(text)?.ok !== false;
    } catch {
      // Apps Script có thể trả HTML khi lỗi cấu hình — coi là thất bại nếu status không ok
    }
    return NextResponse.json({ ok });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Không kết nối được Google Script" },
      { status: 502 }
    );
  }
}
