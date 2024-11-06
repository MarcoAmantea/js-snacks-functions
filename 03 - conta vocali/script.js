/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function getVowels(string){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = [];
    for(let i = 0; i < string.length; i++){
        let curletter = string[i];
        for(let y = 0; y < vowels.length; y++){
            let curVowel = vowels[y];
            if(curVowel === curletter) {
                result.push(curVowel);
            }
        }
    }
    return result;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)