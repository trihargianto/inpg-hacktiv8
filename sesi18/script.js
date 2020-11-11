// 1. Di select dulu elemennya
var tombolTambah = document.getElementById("tambah");
var tombolBesarkan = document.getElementById("tombolBesarkan");
var tombolKecilkan = document.getElementById("tombolKecilkan");

// 2. Dikasih event listener click
tombolTambah.addEventListener("click", function () {
  // asumsi tombol udah jalan..
});

tombolBesarkan.addEventListener("click", function () {
  var divhasil = document.getElementById("divhasil");

  divhasil.classList.add("besar");
});

tombolKecilkan.addEventListener("click", function () {
  var divhasil = document.getElementById("divhasil");

  divhasil.classList.remove("besar");
});
