const calculator = () => {
  const add = (a, b) => {
    const result = a + b;
    return result;
  };
  const subtract = (c, d) => {
    const result = c - d;
    return result;
  };
  const divide = (e, f) => {
    const result = e / f;
    return result;
  };
  const multiply = (g, h) => {
    const result = g * h;
    return result;
  };
  return { add, subtract, divide, multiply };
};

export default calculator;
