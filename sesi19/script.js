var tombol = document.getElementById('tombol');
var tubuh = document.getElementById('tubuh');
var daftarOrang = document.getElementById('daftarOrang');

// fungsi ini ada karena kita membutuhkan kode ini berulang-ulang
function tampilkan(kumpulanData) {
  var output = "";

  for (var i = 0; i < kumpulanData.length; i++) {
    output = `${output} <li>${kumpulanData[i]} 
    <button type="button" class="tombol" onclick="handleHapus(${i})">✖️</button></li>`;
  }

  daftarOrang.innerHTML = output;
}

function handleHapus(indeks) {
  // menghapus data pada indeks ke sekian
  data.splice(indeks, 1);

  // tampilkan ulang dari data yang baru
  tampilkan(data);

  // update localstorage karena datanya terhapus
  // step 1: ubah dulu data localstorage ke array
  var dataLS = JSON.parse(localStorage.getItem("dataOrang"));
  // step 2: karena udah berbentuk array kita bisa menghapus berdasarkan indeks
  dataLS.splice(indeks, 1);
  // step 3: data yang udah terhapus dimasukin ke localstorage lagi, tapi jangan lupa ubah dulu datanya jadi string
  localStorage.setItem("dataOrang", JSON.stringify(dataLS));
}

var data = [];

if (localStorage.getItem('dataOrang') != null) {
  // JSON.parse() berfungsi mengubah string berbentuk array/object jadi aslinya
  data = JSON.parse(localStorage.getItem("dataOrang"));
}

tampilkan(data);

tombol.addEventListener('click', function() {
  var isian = document.getElementById("inputNama").value;

  // masukin data ke array
  data.push(isian);

  // panggil fungsi tampilkan supaya muncul di browser
  tampilkan(data);
  
  // pertahankan data dengan localStorage
  // JSON.stringify() berfungsi mengubah array/object jadi string  
  localStorage.setItem('dataOrang', JSON.stringify(data))

  // step terakhir, clear form biar bisa input data lain
  document.getElementById("inputNama").value = ""; 
})