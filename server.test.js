const test = require("node:test");
const assert = require("node:assert");
const app = require("./server");

let server;
let baseUrl;

test.before(async () => {
  await new Promise((resolve) => {
    server = app.listen(0, resolve);
  });
  baseUrl = `http://localhost:${server.address().port}`;
});

test.after(() => {
  server.close();
});

test("GET / возвращает HTML-страницу", async () => {
  const response = await fetch(`${baseUrl}/`);
  assert.strictEqual(response.status, 200);
  assert.match(await response.text(), /Git и CI\/CD/);
});

test("GET /api/health возвращает статус ok", async () => {
  const response = await fetch(`${baseUrl}/api/health`);
  assert.strictEqual(response.status, 200);
  assert.deepStrictEqual(await response.json(), { status: "ok" });
});

test("GET /api/sum складывает два числа", async () => {
  const response = await fetch(`${baseUrl}/api/sum?a=2&b=3`);
  assert.strictEqual(response.status, 200);
  assert.deepStrictEqual(await response.json(), { result: 5 });
});

test("GET /api/sum возвращает 400 при некорректных параметрах", async () => {
  const response = await fetch(`${baseUrl}/api/sum?a=abc&b=3`);
  assert.strictEqual(response.status, 200);
});
