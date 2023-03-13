import capitalize from './capitalize';

test('capitalize', () => {
  expect(capitalize('foo')).toMatch(/[A-Z]+/);
});
