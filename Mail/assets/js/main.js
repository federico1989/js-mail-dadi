// Chiedi all’utente la sua email
var mail = (prompt("Inserisci la tua email"));
// Controlla che sia nella lista di chi può accedere
var correctMail = ["boolean@gmail.com","boolean@hotmail.it"];
// Stampa un messaggio appropriato sull’esito del controllo.

var check = false;
for (var i = 0; i < correctMail.length; i++) {
  if (mail == correctMail[i]) {
  check = true;
  }
}
if (check) {
alert("La tua email è corretta")
}
else {
alert("La tua email non è corretta")
}
