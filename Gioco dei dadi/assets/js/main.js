alert("Lancia i dadi")
// Generare un numero random da 1  a 6,
var numberRandom1 = Math.floor(Math.random() * 5) + 1;
var numberRandom2 = Math.floor(Math.random() * 5) + 1;
// Sia per il giocatore sia per il computer
var player = numberRandom1;
alert("Hai lanciato i dadi! Il tuo numero è il " + player);
var pc = numberRandom2;
alert("Il tuo avversario ha lanciato i dadi! Il suo numero è il " + pc);
// Stabilire il vincitore, in base a chi fa il punteggio più alto
if (player > pc) {
  alert("Hai vinto")
}
else if (player < pc) {
 alert("Hai perso")
}
else {
  alert("Il numero è uguale e avete pareggiato")
}
