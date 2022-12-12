let number = Math.random(-1, 11).toFixed(0);
let guesses = 0;
let guess = 0;
do {
  guess = prompt("Advinhe um numero entre 0 e 10");
  guesses++;
  if (guess != number) {
    alert("Errou, tente novamente");
  } else if(guesses == 1) {
    alert("Parabéns! Você advinhou o número em " + guesses + " tentativa");
  }else {
    alert("Parabéns! Você advinhou o número em " + guesses + " tentativas");
  }
} while (number != guess);
