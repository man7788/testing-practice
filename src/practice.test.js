import capitalize from './capitalize';
import reverseString from './reverse-string';
import calculator from './calculator';
import caesarCipher from './caesar-cipher';

test('capitalize', () => {
  expect(capitalize('foo')).toMatch(/^[A-Z]+/);
});

test('reverse string', () => {
  expect(reverseString('bar')).toMatch('rab');
});

test('calculator add', () => {
  expect(calculator().add(2, 3)).toBe(5);
});

test('calculator subtract', () => {
  expect(calculator().subtract(3, 2)).toBe(1);
});

test('calculator divide', () => {
  expect(calculator().divide(6, 3)).toBe(2);
});

test('calculator multiply', () => {
  expect(calculator().multiply(3, 7)).toBe(21);
});

test('caesar cipher', () => {
  expect(caesarCipher('Foo Bar !?,.')).toMatch('Sbb One !?,.');
});
