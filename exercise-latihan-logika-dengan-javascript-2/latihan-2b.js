function gcd(firstNumber, secondNumber) {
  var factorA = [];
  var factorB = [];
  var fpb = 0;

  for (var a = 1; a <= firstNumber; a++) {
    if (firstNumber % a == 0) {
      factorA.push(a);
    }
  }

  for (var b = 1; b <= secondNumber; b++) {
    if (secondNumber % b == 0) {
      factorB.push(b);
    }
  }

  for (var i = 0; i < factorA.length; i++) {
    for (var j = 0; j < factorB.length; j++) {
      if (factorA[i] == factorB[j]) {
        fpb = factorA[i];
      }
    }
  }

  return fpb;
}

console.log(gcd(12, 16));
console.log(gcd(50, 40));
console.log(gcd(22, 99));
console.log(gcd(24, 36));
console.log(gcd(17, 23));
