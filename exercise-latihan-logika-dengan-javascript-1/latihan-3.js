function sortByCharacter(text) {
  // https://stackoverflow.com/questions/30912663/sort-a-string-alphabetically-using-a-function
  // 1. Convert string to array
  // 2. Sort array
  // 3. Convert back array to string

  return text.split("").sort().join("");
}

console.log(sortByCharacter("hello"));
console.log(sortByCharacter("tTruncate"));
console.log(sortByCharacter("developer"));
console.log(sortByCharacter("software"));
console.log(sortByCharacter("aegis"));
