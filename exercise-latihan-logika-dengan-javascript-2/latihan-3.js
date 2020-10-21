function bilanganPrima(number) {
  var factor = [];

  for (var a = 1; a <= number; a++) {
    if (number % a == 0) {
      factor.push(a);
    }
  }

  return factor.length === 2;
}

console.log(bilanganPrima(13));
console.log(bilanganPrima(7));
console.log(bilanganPrima(6));
console.log(bilanganPrima(23));
console.log(bilanganPrima(33));
