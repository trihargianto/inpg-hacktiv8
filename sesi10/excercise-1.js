function perkalianUnik(arr) {
  var hasil = [];

  for (var i = 0; i < arr.length; i++) {
    var hasilPerkalian = 0;

    for (var j = 0; j < arr.length; j++) {
      if (i != j) {
        hasilPerkalian = hasilPerkalian + arr[j];
      }
    }

    hasil.push(hasilPerkalian);
  }

  return hasil;
}

var solusi = perkalianUnik([1, 2, 3, 4]);

console.log(solusi);
