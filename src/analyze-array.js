const analyzeArray = (array) => {
  const { length } = array;

  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  const average = sum / length;

  array.sort((a, b) => a - b);
  const min = array[0];
  const max = array[length - 1];

  return { average, min, max, length };
};

export default analyzeArray;
