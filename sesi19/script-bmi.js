var tombol = document.getElementById('tombol');
var hasil = document.getElementById('hasil');

tombol.addEventListener('click', function() {
    var inputBb = document.getElementById("beratBadan").value;
    var inputTb = document.getElementById("tinggiBadan").value;
    var bmi = inputBb / (inputTb * inputTb);
    var kategori = "";

    if (bmi < 17) {
      kategori = "Kurus, kekurangan berat badan berat";
    } else if (bmi >= 17 && bmi <= 18.4) {
      kategori = "Kurus, kekurangan berat badan ringan";
    } else if (bmi > 18.4 && bmi <= 25) {
      kategori = "Normal";
    } else if (bmi > 25 && bmi <= 27) {
      kategori = "Gemuk, kelebihan berat badan ringan";
    } else {
      kategori = "Gemuk, kelebihan berat badan berat";
    }
    
    hasil.innerHTML = "Anda termasuk " + kategori;
})