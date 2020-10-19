function isAritmeticProgression(data) {
  var isAritmetic = true;
  var selisih = 0;

  if (data[0] > data[1]) {
    selisih = data[0] - data[1];
  } else {
    selisih = data[1] - data[0];
  }

  for (var i = 0; i < data.length - 1; i++) {
    var selisihData = 0;

    if (data[i] > data[i + 1]) {
      selisihData = data[i] - data[i + 1];
    } else {
      selisihData = data[i + 1] - data[i];
    }

    if (selisihData != selisih) {
      isAritmetic = false;
    }
  }

  return isAritmetic;
}

console.log(isAritmeticProgression([1, 2, 3, 4, 5, 6]));
console.log(isAritmeticProgression([2, 4, 6, 12, 24]));
console.log(isAritmeticProgression([2, 4, 6, 8]));
console.log(isAritmeticProgression([2, 6, 18, 54]));
console.log(isAritmeticProgression([1, 2, 3, 4, 7, 9]));
