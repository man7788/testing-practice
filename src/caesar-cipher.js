/* eslint-disable no-param-reassign */
const caesarCipher = (word) => {
  const rawCode = [];
  for (let i = 0; i < word.length; i++) {
    rawCode.push(word.charCodeAt(i));
  }

  const shiftCode = [];
  rawCode.forEach((num) => {
    if ((num < 65 || num > 90) && (num < 97 || num > 122)) {
      shiftCode.push(num);
    } else if (num >= 65 && num <= 90) {
      num += 13;
      if (num <= 90) {
        shiftCode.push(num);
      } else {
        shiftCode.push((num % 90) - 1 + 65);
      }
    } else if (num >= 97 && num <= 122) {
      num += 13;
      if (num <= 122) {
        shiftCode.push(num);
      } else {
        shiftCode.push((num % 122) - 1 + 97);
      }
    }
  });

  let output = '';
  shiftCode.forEach((num) => {
    output += String.fromCharCode(num);
  });

  return output;
};

export default caesarCipher;
