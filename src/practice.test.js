import capitalize from './capitalize';
import reverseString from './reverse-string';
import calculator from './calculator';
import caesarCipher from './caesar-cipher';
import analyzeArray from './analyze-array';

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

const object = analyzeArray([1, 8, 3, 4, 2, 6]);

test('analyze array average', () => {
  expect(object.average).toBe(4);
});

test('analyze array min', () => {
  expect(object.min).toBe(1);
});

test('analyze array max', () => {
  expect(object.max).toBe(8);
});

test('analyze array length', () => {
  expect(object.length).toBe(6);
});

test('analyze array', () => {
  expect(object).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
