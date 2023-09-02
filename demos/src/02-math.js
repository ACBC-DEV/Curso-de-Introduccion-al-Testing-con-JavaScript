function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}
function calcularModa(arr) {
  if (arr.length === 0) {
    return null; // Si el arreglo está vacío, no hay moda
  }

  const frecuencia = {};
  let maxFrecuencia = 0;
  let moda = [];

  arr.forEach((num) => {
    frecuencia[num] = (frecuencia[num] || 0) + 1;

    if (frecuencia[num] > maxFrecuencia) {
      maxFrecuencia = frecuencia[num];
      moda = [num];
    } else if (frecuencia[num] === maxFrecuencia) {
      moda.push(num);
    }
  });

  return moda;
}

module.exports = {
  sum,
  multiply,
  divide,
  calcularModa,
};
