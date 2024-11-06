/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
    function greetingsDate(string){
        const date = new Date();
        let ciao =""
        if(date.getHours() <= 13){
            ciao = `Buongiorno ${string}`
        } else if (date.getHours() <= 17){
            ciao = `Buon pomeriggio ${string}`
        }else if(date.getHours() >= 17){
            ciao = `Buonasera ${string}`
        }
        return ciao;
    }
    

// Invoca la funzione qui e stampa il risultato in console
console.log(greetingsDate(name));



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.