// 1. Di select dulu elemennya
var tombolSaya = document.getElementById("tombol");

// 2. Dikasih event listener click
tombolSaya.addEventListener("click", function () {
  var namaDepan = document.getElementById("namaDepan").innerHTML;

  alert("Halo " + namaDepan);
});
