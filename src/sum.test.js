const soma = require('./sum')

test("A soma de 1 + 1 deve ser 2", () => {
  expect(soma(1,1)).toBe(2)
});