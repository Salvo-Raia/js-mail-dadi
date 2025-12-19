// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
console.log("Js is ready to go!");

//! Queste due variabili fanno parte del Bonus autoassegnato
let userPoints = 0;
let pcPoints = 0;

//! Questo ciclo for fa parte del Bonus autoassegnato per ripetere almeno 3 giri di dadi
for (i = 0; i < 3; i++) {
console.log("Tira un dado!");
let userDice = Math.floor(Math.random() * (6 - 1 +1)) + 1;
console.log("Hai fatto:", userDice);

console.log("Ora tocca al PC");
let pcDice = Math.floor(Math.random() * (6 - 1 +1)) + 1;
console.log("Il PC ha fatto:", pcDice);

//! Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (userDice > pcDice) {
    userPoints += 1; 
    console.log("%cHai vinto", "background: black; color: green;");
} else if (userDice == pcDice) {
    console.log("%cPareggio!", "background: black; color: yellow;");
    } else {
    pcPoints += 1;
    console.log("%cHai perso!", "background: black; color: red;");
}
}

//! Bonus autoassegnato 
//! Mostro il numero di punti (vittorie) dell'user e del pc
console.log("Tu hai totalizzato:", userPoints,". Il PC ha realizzato:", pcPoints);


