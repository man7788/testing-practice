import './style.css';

const captialize = (word) => {
  const head = word.slice(0, 1).toUpperCase();
  const body = word.slice(1);
  console.log(head);
  const combined = head + body;
  return combined;
};

console.log(captialize('diu'));
