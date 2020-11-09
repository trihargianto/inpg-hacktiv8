/*
 * Cara mengambil elemen HTML via Javascript
 * 1. document.getElementById()
 * 2. document.getElementsByClassName('page-box')
 * 3. document.getElementsByTagName('div')
 */

var denganId = document.getElementById("page-title");
var denganClass = document.getElementsByClassName("page-box");
var denganTag = document.getElementsByTagName("div");

var people = [
  { nama: "John", umur: 10 },
  { nama: "Dom", umur: 13 },
  { nama: "Tika", umur: 14 },
  { nama: "Pat", umur: 16 },
];

// 1. document.getElementById
var elemen = document.getElementById("akar");
var list = "";

for (var i = 0; i < people.length; i++) {
  list = list + "<li>" + people[i].nama + "</li>";
}

// 2. innerHtml = 'blablabla'
elemen.innerHTML = list;
