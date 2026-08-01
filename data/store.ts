import type { StoreInfo, PhoneType } from "@/types";

export const store: StoreInfo = {
  name: "DEV PỒ",
  tagline: "Cẩm nang sản phẩm & quy trình kinh doanh",
  focus: [
    "Sản phẩm chủ yếu là máy Lock Mỹ.",
    "Thân máy (body) không kèm hộp — thỉnh thoảng có một số máy có hộp.",
  ],
  notes: [
    "Tài liệu nội bộ dành cho nhân viên: học sản phẩm, tra cứu nhanh và làm bài kiểm tra kiến thức.",
    "Mọi chính sách giá, phí, bảo hành bám sát cẩm nang gốc của cửa hàng.",
  ],
};

export const phoneTypes: PhoneType[] = [
  {
    id: "quoc-te",
    name: "Quốc tế",
    short: "Dùng mọi SIM toàn thế giới",
    esim: "Hỗ trợ eSIM (với dòng máy hỗ trợ)",
    waterproof: "Áp zin (máy nguyên bản, chưa tháo mở)",
    badge: "green",
    details: [
      "Sử dụng được tất cả các loại SIM của mọi nhà mạng trên toàn thế giới.",
      "Sử dụng được eSIM cho các dòng máy hỗ trợ.",
      "Từ Xr đến 13 series: dùng 1 SIM vật lý + 1 eSIM.",
      "Từ 14 series: bản Quốc tế Mỹ dùng 2 eSIM; bản Quốc tế VNA / KHA / ZPA dùng 1 SIM vật lý + 1 eSIM.",
      "Tất cả các dòng bản ZA/A: dùng 2 SIM vật lý.",
    ],
  },
  {
    id: "quoc-te-nua-mua",
    name: "Quốc tế nửa mùa",
    short: "Mọi SIM trừ nhà mạng Mỹ",
    esim: "Hỗ trợ eSIM (trừ eSIM Mỹ)",
    waterproof: "Áp zin (máy nguyên bản, chưa tháo mở)",
    badge: "blue",
    details: [
      "Dùng được tất cả SIM của mọi nhà mạng trên thế giới NGOẠI TRỪ các nhà mạng của Mỹ.",
      "Sử dụng được eSIM cho các dòng máy hỗ trợ, nhưng không dùng được eSIM Mỹ.",
      "Trong Cài đặt máy vẫn báo SIM bị khóa — nhưng bản chất nó là máy quốc tế.",
    ],
  },
  {
    id: "lock",
    name: "Lock",
    short: "Máy nhà mạng nước ngoài, bị khóa mạng",
    esim: "Không dùng được eSIM/SIM vật lý nếu chưa độ SIM",
    waterproof: "iP < 14 (không độ EID): áp zin · CNC + độ EID: mất áp zin",
    badge: "amber",
    details: [
      "Là máy của nhà mạng nước ngoài, bị khóa mạng. Không dùng được eSIM; SIM vật lý chỉ dùng được nếu đã độ SIM hoặc dùng kèm SIM ghép (với các dòng có sẵn khay SIM zin từ 13 series trở xuống).",
      "Dòng máy < iP14: chỉ dùng được 1 SIM vật lý thông qua SIM ghép / độ EID.",
      "Dòng máy > iP14: vỏ máy đã được can thiệp vật lý (CNC độ EID) để thêm khay SIM, dùng được 2 SIM.",
      "16E / 17E: dùng 2 SIM vật lý không cần kèm SIM ghép, nhưng vẫn là chế độ ghép TMSI, không phải EID.",
      "12 / 12 Pro / 12 Pro Max: độ được EID 1 SIM vật lý.",
      "13: độ được EID 2 SIM vật lý.",
      "13 Pro / 13 Pro Max: chưa độ được EID, dùng 1 SIM vật lý kèm SIM ghép.",
      "17 Air: chưa độ được EID, độ được 1 SIM vật lý ghép chế độ TMSI.",
      "EID là chế độ sử dụng SIM mới trên iPhone Lock: dùng không cần kèm SIM ghép, xài full 100% tính năng như iPhone Quốc tế. Kể cả CNC SIM vật lý hay độ eSIM thì cũng là chế độ EID.",
    ],
  },
  {
    id: "mdm",
    name: "MDM",
    short: "Máy doanh nghiệp đã skip MDM",
    esim: "Như máy Quốc tế hoặc Lock (tùy nguồn gốc máy)",
    waterproof: "Như máy Quốc tế hoặc Lock (tùy nguồn gốc máy)",
    badge: "slate",
    details: [
      "Ban đầu thuộc sở hữu doanh nghiệp, quản lý từ xa qua phần mềm (Mobile Device Management).",
      "Khi bán ra, máy đã được skip MDM — dùng như máy bình thường. MDM có thể là máy Quốc tế hoặc máy Lock.",
      "KHÔNG được reset dòng 2 (Xóa tất cả nội dung và cài đặt). Nếu reset, máy bị khóa lại và yêu cầu tài khoản MDM để kích hoạt. Cần máy tính để skip MDM, skip xong dùng bình thường, bao xài trọn đời.",
      "Shop nhận skip MDM FREE. Tặng kèm tool skip MDM (bỏ qua bước kích hoạt) miễn phí cho khách, bảo hành skip MDM trọn đời máy.",
      "Từ tháng 4/2026 có dạng MDM mới là MDM VAY — không thể dùng tool để skip. Khi khách hỏi skip MDM, phải hỏi rõ khách có phải MDM vay hay không.",
    ],
  },
];
