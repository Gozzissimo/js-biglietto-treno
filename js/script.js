// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km(0.21 € al km)

// va applicato uno sconto del 20 % per i minorenni

// va applicato uno sconto del 40 % per gli over 65.

// L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).

// prompt km
const km = parseFloat(prompt('Quanti km vuoi percorrere?'));

if (isNaN(km)) {
    alert("Per favore inserisci solo valori numerici");
    location.reload();
}

// prompt età
const age = parseInt(prompt('Quanti hanni hai?'));

if (isNaN(age)) {
    alert("Per favore inserisci solo valori numerici");
    location.reload();
}

// prezzo al km
const priceKm = 0.21;

// calcolo prezzo base
let ticketPrice = km * priceKm;

// aggiunta sconti
if (age < 18) {
    ticketPrice -= (ticketPrice * 0.2);
}   else if (age > 64) {
    ticketPrice -= (ticketPrice * 0.4);
}

let ticketPriceFinal = ticketPrice.toFixed(2)

// messaggio in pagina
document.writeln(`<h2>Il prezzo del suo biglietto è di: € <span class="final-price">${ticketPriceFinal}</span></h2>`)
