function convert(data) {
  // bikin tampungan dulu, buat di return
  var hasil = [];

  // bikin perulangan sebanyak data
  for (var i = 0; i < data.length; i++) {
    // biar enak bacanya, tiap data di simpan dulu ke variabel.
    var nomor = data[i][0];
    var namaDepan = data[i][1];
    var namaBelakang = data[i][2];
    var alamatEmail = data[i][3];

    // di tiap perulangan, variabel hasil di push object.
    // objectnya tinggal di susun, sambil manggil
    // variabel-variabel di atas
    hasil.push({
      id: nomor,
      firstName: namaDepan,
      lastName: namaBelakang,
      email: alamatEmail,
    });
  }

  // hasil push-push di perulangan kita return
  return hasil;
}

// console.log bakal menampilkan apa yang di return oleh convert()
console.log(
  convert([
    [1, "Dimitri", "Wahyudiputra", "dimitri@mail.com"],
    [2, "Sergei", "Dragunov", "sergei@mail.com"],
  ])
);
