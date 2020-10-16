var text =
  "Dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female";

var people = text.split(",");

for (var i = 0; i < people.length; i++) {
  var person = people[i].split(":");

  document.write("Nama:" + person[0]);
  document.write(", Email:" + person[1]);
  document.write(", Jenis Kelamin:" + person[2]);
  document.write("<br />");
}
