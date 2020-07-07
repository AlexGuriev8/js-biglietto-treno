var kilometri = parseInt(prompt('Inserisci il numero di km da percorrere'));
var eta = parseInt(prompt("Inserisci l'età"));
var prezzoKm = 0.21;
var prezzo = kilometri * prezzoKm;
var priceF = 'Il costo del biglietto è: ';
var multiplier = 100;

if (eta < 18) {
prezzo -= ((prezzo/100)*20);
} else if (eta > 65){
prezzo -= ((prezzo/100)*40);
}
a = Math.round(prezzo * multiplier) / multiplier;
// console.log(a);
document.getElementById('price').innerHTML = priceF + a;
