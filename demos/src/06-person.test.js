const Person = require('./06-person');

describe('Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Nico', 45, 1.7);
  });
  test('sould return down', () => {
    // AAA
    // Arrange / give
    person.weight = 47;

    // Act

    // Assert
    expect(person.calcIMC()).toBe('down');
  });
  test('sould return normal', () => {
    person.weight = 59;
    expect(person.calcIMC()).toBe('normal');
  });
});
