
//* Queste due variabili fanno parte del Bonus autoassegnato
let userWonMatches = 0;
let pcWonMatches = 0;
//* Bonus Tutor
let gameStop = false;

console.log("%c🎲 Here we go: si comincia! 🎲", "background: white; color: blue; font-size: 30px");

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
for (i = 0;  i < 5 && gameStop !== true ; i++) {
console.log("👉 Scegli un numero da 1 a 6");
let userDice = (prompt("Digita un numero da 1 a 6 o STOP per annullare la partita"));
if (userDice === null) {
    gameStop = true;    
    console.log("❌ Hai annullato la partita");
} else if (userDice.toUpperCase() == "STOP") {
    gameStop = true;
    console.log("❌ Hai annullato la partita");
} else if (userDice <= 0 || userDice > 6) {
    console.log("⚠️ Il numero deve essere compreso tra 1 e 6!");
    i--; // Così il giro non viene contato!
} else if (userDice > 0 && userDice <= 6) {
userDice = parseInt(userDice)
console.log("👤 Hai scelto:", userDice);
console.log("⏳ Ora tocca al PC");
let pcDice = Math.floor(Math.random() * (6 - 1 +1)) + 1;
console.log("🤖 Il PC ha scelto:", pcDice);
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (userDice > pcDice) {
    userWonMatches += 1; 
    console.log("%c✔️ Hai vinto", "background: black; color: green; font-size: 18px");
} else if (userDice == pcDice) {
    console.log("%c👐 Pareggio!", "background: black; color: yellow; font-size: 18px");
    } else {
    pcWonMatches += 1;
    console.log("%c❌ Hai perso!", "background: black; color: red; font-size: 18px");
}
} else {
    console.log("⚠️ ATTENZIONE:", userDice, "Non è un valore ammesso. Inserisci un numero compreso tra 1 e 6.");
    i--; // Così il giro non viene contato!
}
}

//* Bonus autoassegnato
if (gameStop === false) { 
    console.log("🧮 Ora tiriamo le somme...");
    
    console.log("🏁 Tu hai vinto:", userWonMatches,"match! Il PC invece:", pcWonMatches);
    if (userWonMatches> pcWonMatches) {
        console.log("%cCongratulazioni! Hai vinto la partita 🏆", "background: black; color: green; font-size: 20px;");  
    } else if ( userWonMatches == pcWonMatches) {
        console.log("%cE' finita in pareggio! Aggiorna la pagina se vuoi una rivincita 🤝", "background: black; color: yellow; font-size: 20px;");
    } else {
        console.log("%cOh no, Hai perso! 😞", "background: black; color: red; font-size: 20px;1")
    } 
} else {
    console.log("%cHai abbandonato la partita prima della fine, il punteggio non viene calcolato 🤷‍♂️ ", "background: black; color: pink; font-size: 20px");
}
