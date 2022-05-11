var userNumber = prompt("Son kirgazing", 0) - 0;
var fizzNumber = document.querySelector(".fizz");
var buzzNumber = document.querySelector(".buzz");
var fizzBuzzNumber = document.querySelector(".fizzbuzz");
var elfizzList = document.querySelector(".fizz-list");
var elbuzzList = document.querySelector(".buzz-list");
var elfizzbuzzList = document.querySelector(".fizzbuzz-list");
var Fizz = 0;
var Buzz = 0;
var FizzBuzz = 0;

for (var i = 1; i <= userNumber; i++) {
  var elLi = document.createElement("li");
  elLi.textContent = i;

  if (i % 3 === 0 && i % 5 === 0) {
    FizzBuzz += 1;
    elfizzbuzzList.append(elLi);
  } else if (i % 5 === 0) {
    Buzz += 1;
    elbuzzList.append(elLi);
  } else if (i % 3 === 0) {
    Fizz += 1;
    elfizzList.append(elLi);
  }
}

fizzNumber.textContent = Fizz;
buzzNumber.textContent = Buzz;
fizzBuzzNumber.textContent = FizzBuzz;
