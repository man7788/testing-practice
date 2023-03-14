const reverseString = (word) => {
  let output = '';

  for (let i = 0; i < word.length; i++) {
    output += word.slice(word.length - i - 1, word.length - i);
  }

  return output;
};

export default reverseString;
