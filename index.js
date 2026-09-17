const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Trang chính
app.get("/", (req, res) => {
  res.send("Vietnam Historical Sites API is running!");
});

// Danh sách di tích
app.get("/api/sites", (req, res) => {
  const sites = [
    {
      id: 1,
      name: "Văn Miếu – Quốc Tử Giám",
      location: "Hà Nội",
      description: "Di tích lịch sử và văn hóa nổi tiếng của Việt Nam.",
    },
    {
      id: 2,
      name: "Quần thể di tích Cố đô Huế",
      location: "Huế",
      description: "Quần thể di tích gắn liền với triều Nguyễn.",
    },
    {
      id: 3,
      name: "Hoàng thành Thăng Long",
      location: "Hà Nội",
      description: "Di sản văn hóa gắn với lịch sử lâu đời của Thăng Long.",
    },
  ];

  res.json(sites);
});

// Lấy một di tích theo ID
app.get("/api/sites/:id", (req, res) => {
  const id = Number(req.params.id);

  const sites = [
    {
      id: 1,
      name: "Văn Miếu – Quốc Tử Giám",
      location: "Hà Nội",
      description: "Di tích lịch sử và văn hóa nổi tiếng của Việt Nam.",
    },
    {
      id: 2,
      name: "Quần thể di tích Cố đô Huế",
      location: "Huế",
      description: "Quần thể di tích gắn liền với triều Nguyễn.",
    },
    {
      id: 3,
      name: "Hoàng thành Thăng Long",
      location: "Hà Nội",
      description: "Di sản văn hóa gắn với lịch sử lâu đời của Thăng Long.",
    },
  ];

  const site = sites.find((item) => item.id === id);

  if (!site) {
    return res.status(404).json({
      message: "Không tìm thấy di tích",
    });
  }

  res.json(site);
});

// Chạy server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
