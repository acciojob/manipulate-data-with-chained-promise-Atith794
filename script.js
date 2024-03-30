function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3, 4];
      resolve(data);
    }, 3000);
  });
}

function filterOddNumbers(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredArr = arr.filter(num => num % 2 === 0);
      resolve(filteredArr);
    }, 1000);
  });
}

function multiplyByTwo(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const multipliedArr = arr.map(num => (num % 2 === 0 ? num * 2 : num));
      resolve(multipliedArr);
    }, 2000);
  });
}

function updateOutputText(text) {
  const outputElement = document.getElementById('output');
  outputElement.textContent = text.join(', ');
}

fetchData()
  .then(filterOddNumbers)
  .then(multiplyByTwo)
  .then(result => {
    updateOutputText(result);
  })
  .catch(error => {
    console.error('Error:', error);
  });