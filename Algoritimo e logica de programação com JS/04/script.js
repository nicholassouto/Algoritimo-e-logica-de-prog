let name = prompt("Nome do aluno");
let score1 = prompt("Digite uma nota");
let score2 = prompt("Digite uma segunda nota");
let score3 = prompt("Digite uma terceira nota");
score1 = Number(score1);
score2 = Number(score2);
score3 = Number(score3);
let mediumScore = ((score1 + score2 + score3) / 3).toFixed(2);

if (mediumScore >= 6) {
  alert(name + " foi aprovado. PARABENS");
} else if (mediumScore > 5) {
  alert(name + " esta em recuperação");
  let scoreFinal = prompt("Digite nota da recuperação");
  if (scoreFinal >= 6) {
    alert(name + " foi aprovado. PARABENS");
  } else {
    alert(name + " foi reprovado");
  }
} else {
  alert(name + " foi reprovado");
}
