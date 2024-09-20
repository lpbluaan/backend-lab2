const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route"); // Import route quản lý liên hệ

const app = express(); // Khởi tạo ứng dụng Express

app.use(cors()); // Sử dụng CORS để xử lý các request từ domain khác
app.use(express.json()); // Để Express có thể hiểu được JSON

// Sử dụng router cho các route liên hệ
app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

module.exports = app;
