const soma = require('./sum')

test("A soma de 1 + 1 deve ser 2", () => {
  expect(soma(1,1)).toBe(2)
});

test("A sub de 1 - 1 deve ser 0", () => {
  expect(soma(1,1)).toBe(0)
});

test("A mult de 1 * 1 deve ser 1", () => {
  expect(soma(1,1)).toBe(1)
});

test("A div de 1 / 1 deve ser 1", () => {
  expect(soma(1,1)).toBe(1)
});