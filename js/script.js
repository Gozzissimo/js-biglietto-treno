// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km(0.21 € al km)

// va applicato uno sconto del 20 % per i minorenni

// va applicato uno sconto del 40 % per gli over 65.

// L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).

const km = prompt('Quanti km vuoi percorrere?');
// console.log(km);
const age = prompt('Quanti hanni hai');
// console.log(age);
const priceKm = 0.21;
// console.log(age);
let ticketPrice = km * priceKm;
// console.log(ticketPrice);

if (age < 19) {
    ticketPrice = ticketPrice - (ticketPrice * 0.2);
}   else if (age > 64) {
    ticketPrice = ticketPrice - (ticketPrice * 0.4);
}   else {
    ticketPrice;
}
// console.log(ticketPrice);

let ticketPriceFinal = ticketPrice.toFixed(2)
// console.log(ticketPriceFinal);

document.writeln('Il prezzo del suo biglietto è di € ' + ticketPriceFinal)