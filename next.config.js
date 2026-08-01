/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Trang Dịch vụ cũ — nội dung đã phân bổ vào các trang cẩm nang mới
      { source: "/services", destination: "/sim", permanent: true },
    ];
  },
};
module.exports = nextConfig;
