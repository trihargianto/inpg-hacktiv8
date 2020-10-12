function numberProcessing(numberArr) {
    var jumlahData = numberArr.length;
    var nilaiGenap = [];
    var nilaiGanjil = [];
    var total = 0;
    var nilaiMinium = numberArr[0];
    var nilaiMaksimum = numberArr[0];
    
    for (var i = 0; i < jumlahData; i++) {
      var nilai = numberArr[i];

      /** Cari nilai ganjil dan genap */
      var hasilModulus = nilai % 2;

      if (hasilModulus == 0) {
        nilaiGenap.push(nilai);
      } else {
        nilaiGanjil.push(nilai);
      }

      /** Cari total */
      total = total + nilai;

      /** Cari Nilai Maksimum */
      if (nilai > nilaiMaksimum) {
        nilaiMaksimum = nilai;
      }

      /** Cari Nilai Minimum */
      if (nilai < nilaiMinium) {
        nilaiMinium = nilai;
      }
    }

    var rataRata = total / jumlahData;

    return `Min: ${nilaiMinium}, Max: ${nilaiMaksimum}, Rata-rata: ${rataRata}, Genap: ${nilaiGenap.join("-")}, Ganjil: ${nilaiGanjil.join("-")}`;
}

console.log(numberProcessing([4,12,3,5]));