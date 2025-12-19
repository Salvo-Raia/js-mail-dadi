// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
console.log("Js is ready to go!");

console.log("Tira un dado!");
let userDice = Math.floor(Math.random() * (6 - 1 +1)) + 1;
console.log("Hai fatto:", userDice);

console.log("Ora tocca al PC");
let pcDice = Math.floor(Math.random() * (6 - 1 +1)) + 1;
console.log("Il PC ha fatto:", pcDice);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (userDice > pcDice) {
    console.log("%cHai vinto", "background: black; color: green;");
} else if (userDice == pcDice) {
    console.log("%cPareggio!", "background: black; color: yellow;");
    } else {
    console.log("%cHai perso!", "background: black; color: red;");
}

/* Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */
