const { soma } = require('./calculadora');

test('soma de 1 e 2 deve ser 3', () => {
  expect(soma(1, 2)).toBe(3);
});

test('soma de múltiplos números', () => {
  expect(soma(1, 2, 3)).toBe(6);
  expect(soma(-1, 0, 1)).toBe(0);
  expect(soma(10)).toBe(10);
});
