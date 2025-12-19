
//* Queste due variabili fanno parte del Bonus autoassegnato
let userPoints = 0;
let pcPoints = 0;

//TODO Bonus Tutor
let gameStop = false;

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//* Il ciclo for fa parte del Bonus autoassegnato per ripetere almeno 3 giri di dadi
for (i = 0; gameStop !== true; i++) {
console.log("Tira un dado!");
let userDice = (prompt("Digita un numero da 1 a 6"));

if (userDice == "STOP") {
    gameStop = true;
    console.log("Hai annullato la partita");
} else {
console.log("Hai fatto:", userDice);

console.log("Ora tocca al PC");
let pcDice = Math.floor(Math.random() * (6 - 1 +1)) + 1;
console.log("Il PC ha fatto:", pcDice);

//* Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (userDice > pcDice) {
    userPoints += 1; 
    console.log("%cHai vinto", "background: black; color: green;");
} else if (userDice == pcDice) {
    console.log("%cPareggio!", "background: black; color: yellow;");
    } else {
    pcPoints += 1;
    console.log("%cHai perso!", "background: black; color: red;");
}
} console.log("Tu hai totalizzato:", userPoints,". Il PC ha realizzato:", pcPoints);
if (userPoints > pcPoints) {
    console.log("%cCongratulazioni! Hai vinto", "background: black; color: green;");  
} else if (userPoints == pcPoints) {
    console.log("%cE' finita in pareggio! Aggiorna la pagina se vuoi una rivincita", "background: black; color: yellow;");
} else {
    console.log("%cOh no, hai perso!", "background: black; color: red;")
}
}


//* Bonus autoassegnato 
//* Mostro il numero di punti (vittorie) dell'user e del pc



