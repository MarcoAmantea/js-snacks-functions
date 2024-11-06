/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function initialLetter(array) {
    const initial = array.map(function(letter) {
        return letter[0];
    });
    return initial;
};


// Invoca la funzione qui e stampa il risultato in console
console.log(initialLetter(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]