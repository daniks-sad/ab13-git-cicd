const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Главная страница
app.get("/", (req, res) => {
  res.send("<h1>Web-приложение для лабораторной работы по Git и CI/CD</h1>");
});

// Проверка работоспособности
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Сумма двух чисел: /api/sum?a=2&b=3
app.get("/api/sum", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({ error: "Параметры a и b должны быть числами" });
  }
  res.json({ result: a + b });
});

// Сервер запускается только при прямом запуске файла (не при импорте в тестах)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
  });
}

module.exports = app;
