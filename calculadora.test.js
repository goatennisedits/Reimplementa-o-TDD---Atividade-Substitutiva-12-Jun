const { soma } = require('./calculadora');

test('soma de 1 e 2 deve ser 3', () => {
  expect(soma(1, 2)).toBe(3);
});
