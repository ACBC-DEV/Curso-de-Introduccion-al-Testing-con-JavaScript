const {
  sum, multiply, divide, calcularModa,
} = require('./02-math');

describe('Test for math ', () => {
  describe('tests for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });
  describe('tests for multiply', () => {
    test('multiply should be 4', () => {
      const rta = multiply(2, 2);
      expect(rta).toBe(4);
    });
  });
  describe('tests for divide', () => {
    test('should divide ', () => {
      const rta = divide(6, 3);
      expect(rta).toBe(2);
      const rta2 = divide(8, 2);
      expect(rta2).toBe(4);
    });
    test('should divide for zero ', () => {
      const rta = divide(6, 0);
      expect(rta).toBeNull();
      const rta2 = divide(8, 0);
      expect(rta2).toBeNull();
    });
  });
  describe('test for findModa', () => {
    test('find Moda', () => {
      const rta = calcularModa([8, 9, 10, 10]);

      expect(rta).toEqual([10]);
    });
  });
});
