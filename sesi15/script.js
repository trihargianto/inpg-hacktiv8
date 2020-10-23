function grouping(scores) {
  // Siapkan tampungan. Bakal di update dari perulangan.
  var hasil = {
    pass: [],
    fail: [],
  };

  // Bikin perulangan sebanyak data "scores"
  for (var i = 0; i < scores.length; i++) {
    // bikin variabel "score" buat nampung scores[i], supaya enak dibaca
    var score = scores[i];

    if (score < 75) {
      // akses dulu key "fail" dari object "hasil".
      // Karena "fail" itu array, maka kita tinggal push score nya
      hasil.fail.push(score);
    } else {
      // akses dulu key "pass" dari object "hasil".
      // Karena "pass" itu array, maka kita tinggal push score nya
      hasil.pass.push(score);
    }
  }

  // hasil push-push di perulangan kita return
  return hasil;
}

// console.log bakal menampilkan apa yang di return oleh grouping()
console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));
