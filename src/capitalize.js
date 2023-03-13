const captialize = (word) => {
  const head = word.slice(0, 1).toUpperCase();
  const body = word.slice(1);
  const combined = head + body;
  return combined;
};

export default captialize;
