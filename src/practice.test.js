import capitalize from './capitalize';
import reverseString from './reverse-string';

test('capitalize', () => {
  expect(capitalize('foo')).toMatch(/[A-Z]+/);
});

test('reverse string', () => {
  expect(reverseString('bar')).toMatch('rab');
});
