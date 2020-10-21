function threeStepsAB(text) {
  var jumlahKata = text.length;
  var jarak = 0;
  var mulaiHitung = false;
  var ketemu = false;

  for (var i = 0; i < jumlahKata; i++) {
    if (text[i] === "a") {
      mulaiHitung = true;
    }

    if (mulaiHitung == true) {
      if (text[i] == "b") {
        ketemu = true;
      } else {
        jarak++;
      }
    }
  }

  stepsA = 1;
  stepsB = 5;

  if (ketemu == true && jarak == 3) {
    return true;
  } else {
    return false;
  }
}

console.log(threeStepsAB("lane borrowed"));
console.log(threeStepsAB("i am sick"));
console.log(threeStepsAB("you are boring"));
console.log(threeStepsAB("barbarian"));
console.log(threeStepsAB("bacon and meat"));
