// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina: nomecognomecolorepreferito21

let nome = prompt("Inserisci il tuo nome");
let cognome = prompt("Inserisci il tuo cognome");
let colorePreferito = prompt("Inserisci il tuo colore preferito");

let password = nome + cognome + colorePreferito + "21";

document.getElementById('password').innerHTML = password;