/* ==============================
 * Tipe data
 * ============================== */

// 1. String
console.log("Umur: 25");

// 2. Number
console.log(25);

// 3. Boolean
console.log(true);
console.log(false);

/* ==============================
 * Bikin variabel
 * ============================== */

var namaDepan = "Tri";
namaDepan = "Snow";

console.log(namaDepan);

/* ==============================
 * Cara bikin variabel
 * ============================== */
var nama2 = "tri";
let nama1 = "tri";
const nama3 = "tri";

/* ==============================
 * String concat
 * ============================== */
var namaDepan = "Tri";
var namaBelakang = "Hargianto";
var namaLengkap = namaDepan + namaBelakang;
console.log(namaLengkap);

var firstName = prompt("nama depan");
var lastName = prompt("nama belakang");
console.log(firstName + " " + lastName);

/* ==============================
 * Operator
 * ============================== */

// 1. Aritmatika + - * / %
console.log(5 + 5);
console.log(10 - 5);
console.log(10 / 5);
console.log(5 * 5);

// 2. Comparison
// 2.1 Equal == dan Not Equal !=
var umur = 10;
console.log(umur == "10");
console.log(umur != 10);

// 2.2 Strict Equal === dan Strict Not Equal !==
var anak = 2;
var cukup = anak === 2;
console.log(cukup);
console.log(anak !== 2);

// 2.3 Kurang dari dan Lebih dari
// < > <= >=
var angka = 8;
console.log(angka < 8);
console.log(angka > 8);
console.log(angka >= 8);
console.log(angka <= 8);

// CONDITIONAL OPERATOR
// OR || <- pembanding boolean. Jika salah satu bernilai true, maka true
// AND && <- pembanding boolean. Jika kedua nilai bernilai true maka true
console.log(false || true);
console.log(true && true);

/* ==============================
 * CONDITIONAL
 * ============================== */

var umur = 10;

if (umur == 10) {
  console.log("Anak SD");
} else if (umur == 5) {
  console.log("Balita");
} else {
  console.log("umurnya " + umur);
}
