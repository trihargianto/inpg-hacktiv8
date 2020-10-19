function reverseString(text) {
  var output = "";
  var indeksTerakhir = text.length - 1;

  for (var i = indeksTerakhir; i >= 0; i--) {
    output += text[i];
  }

  return output;
}

console.log(reverseString("Hello world and coders"));
console.log(reverseString("John Doe"));
console.log(reverseString("I am a bookworm"));
console.log(reverseString("Coding is my hobby"));
console.log(reverseString("Super"));
