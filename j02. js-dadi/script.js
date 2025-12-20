
//* Queste due variabili fanno parte del Bonus autoassegnato
let userWonMatches = 0;
let pcWonMatches = 0;

//TODO Bonus Tutor
let gameStop = false;

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
for (i = 0;  i < 5 && gameStop !== true ; i++) {
console.log("Tira un dado!");
let userDice = (prompt("Digita un numero da 1 a 6"));
if (userDice.toUpperCase() == "STOP") {
    gameStop = true;
    console.log("Hai annullato la partita");
} else {
console.log("Hai fatto:", userDice);
console.log("Ora tocca al PC");
let pcDice = Math.floor(Math.random() * (6 - 1 +1)) + 1;
console.log("Il PC ha fatto:", pcDice);
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (userDice > pcDice) {
    userWonMatches += 1; 
    console.log("%cHai vinto", "background: black; color: green;");
} else if (userDice == pcDice) {
    console.log("%cPareggio!", "background: black; color: yellow;");
    } else {
    pcWonMatches += 1;
    console.log("%cHai perso!", "background: black; color: red;");
}
}
}

//* Bonus autoassegnato
if (gameStop === false) { 
    console.log("Hai vinto:", userWonMatches,"match! Il PC invece:", pcWonMatches);
    if (userWonMatches> pcWonMatches) {
        console.log("%cCongratulazioni! Hai vinto la partita", "background: black; color: green;");  
    } else if ( userWonMatches == pcWonMatches) {
        console.log("%cE' finita in pareggio! Aggiorna la pagina se vuoi una rivincita", "background: black; color: yellow;");
    } else {
        console.log("%cOh no, Hai perso!", "background: black; color: red;")
    } 
} else {
    console.log("Hai abbandonato la partita prima della fine, il punteggio non viene calcolato");
}
