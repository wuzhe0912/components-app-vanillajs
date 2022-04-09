// Variables
const addNumber = document.querySelector('.cheveron-up');
const reduceNumber = document.querySelector('.cheveron-down');
const numberDisplay = document.querySelector('.cheveron-number');

// event test
// addNumber.addEventListener('click', (e) => {
//   console.log('up', e);
// });

// reduceNumber.addEventListener('click', (e) => {
//   console.log('down', e);
// });

addNumber.addEventListener('click', () => {
  const currentNumber = Number(numberDisplay.textContent);
  numberDisplay.textContent = currentNumber + 1;
});

reduceNumber.addEventListener('click', () => {
  const currentNumber = Number(numberDisplay.textContent);
  if (currentNumber === 0) return;
  numberDisplay.textContent = currentNumber - 1;
});
