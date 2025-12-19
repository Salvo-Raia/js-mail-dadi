console.log("Js is ready to go");

// Crea una lista di email di invitati ad una festa.
const mailInvitati = ["alanwake@darkmail.com", "jesse.faden@fbc.com", "jack-joyce@yahoo.it", "p.serene@outlook.it"]
console.table(mailInvitati)


// Chiedi all’utente la sua email,
const userMail = prompt("Inserisci la tua mail", "Es. nomecognome@mail.com")
let userFound = false;

/* controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). */ 

for (i = 0; i < mailInvitati.length; i++) {
    const currentMail = mailInvitati[i];
    if (currentMail === userMail) {
        userFound = true;
    }
}

if (userFound === true) {
    console.log("Benvenuto", userMail + "! Puoi accedere alla festa ✅")
} else {
    console.log("Utente non riconosciuto! Non sei il benvenuto ❌");
}