function tampil(nama, umur) {
  document.write("hallo " + nama + ", umur kamu " + umur);
  document.write("<br />");
}

function tambah(angkaPertama, angkaKedua) {
  var hasil = angkaPertama + angkaKedua;

  return hasil;
}

function kali(angka1 = 0, angka2 = 0) {
  var hasil = angka1 * angka2;

  return hasil;
}

// Anonymous Function. Sebuah function yang bersifat seperti nilai
// Dan dia harus menempel ke sebuah wadah. Contoh berikut wadahnya adalah variabel
var bagi = function (angka1 = 0, angka2 = 0) {
  if (angka1 == 0 || angka2 == 0) {
    return 0;
  }

  var hasil = angka1 / angka2;

  return hasil;
};

var hasilBagi = bagi(5, 10);

document.write(hasilBagi);
