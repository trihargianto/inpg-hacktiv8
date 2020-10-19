function isAritmeticProgression(data) {
  var penandaSelisih = 0;
  var apakahArimatika = true;

  if (data[0] > data[1]) {
    penandaSelisih = data[0] - data[1];
  } else {
    penandaSelisih = data[1] - data[0];
  }

  for (var i = 0; i < data.length - 1; i++) {
    // Perulangan Pertama  2 - 1 != 1
    // Perulangan Kedua    3 - 2 != 1
    // Perulangan Ketiga   4 - 3 != 1
    // Perulangan Keempat  5 - 4 != 1
    // Perulangan Kelima   6 - 5 != 1

    var selisihData = 0;

    if (data[i] > data[i + 1]) {
      selisihData = data[i] - data[i + 1];
    } else {
      selisihData = data[i + 1] - data[i];
    }

    if (selisihData != penandaSelisih) {
      apakahArimatika = false;
    }
  }

  return apakahArimatika;
}

console.log(isAritmeticProgression([1, 2, 3, 4, 5, 6]));
// console.log(isAritmeticProgression([2, 4, 6, 12, 24]));
// console.log(isAritmeticProgression([2, 4, 6, 8]));
// console.log(isAritmeticProgression([2, 6, 18, 54]));
// console.log(isAritmeticProgression([1, 2, 3, 4, 7, 9]));
