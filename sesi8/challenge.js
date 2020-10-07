function hitungBMI(beratBadan, tinggiBadan) {
  var bmi = beratBadan / (tinggiBadan * tinggiBadan);

  var hasil = "";

  if (bmi < 17) {
    hasil = "kurus, kekurangan berat badan akut";
  } else if (bmi >= 17 && bmi <= 18.4) {
    hasil = "kurus, kekurangan berat badan ringan";
  } else if (bmi >= 18.4 && bmi <= 25) {
    hasil = "Normal";
  } else if (bmi > 25 && bmi <= 27) {
    hasil = "Gemuk, kelebihan berat badan tingkat ringan";
  } else {
    hasil = "Gemuk, kelebihan berat badan tingkat akut";
  }

  return "Berat badan" + beratBadan + " = " + hasil;
}

var angkaPertama = prompt("Masukkan berat badan anda");
var angkaKedua = prompt("Masukkan tinggi badan anda");

var bmi = hitungBMI(angkaPertama, angkaKedua);

document.write(bmi);
