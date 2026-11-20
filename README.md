# lab13-git-cicd

Учебное Web-приложение на Node.js и Express для лабораторной работы по Git и CI/CD.

## Маршруты

| Метод | Адрес | Описание |
|-------|-------|----------|
| GET | `/` | Главная страница |
| GET | `/api/health` | Проверка работоспособности |
| GET | `/api/sum?a=2&b=3` | Сумма двух чисел |

## Установка и запуск

```bash
npm install
npm start
```

Приложение будет доступно по адресу http://localhost:3000.

## Автоматические тесты

```bash
npm test
```

Тесты также запускаются автоматически в GitHub Actions (файл `.github/workflows/ci.yml`)
при каждом push и pull request.
