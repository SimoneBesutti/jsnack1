//consegna del compito
//L'utente inserisce due numeri in succesione con sue prompt, il software stampa il maggiore



//dichiaro le variabili
var numeroUtente, numeroUtente2;


//prompt numero utente
numeroUtente = prompt("Inserisci un numero casuale");
numeroUtente2 = prompt("Inserisci un'altro numero casuale");


//Decidere quale numero è maggiore tra i due
if(numeroUtente > numeroUtente2){
     document.getElementById("mio_id").innerHTML = " è maggiore " + numeroUtente;
} if(numeroUtente2 > numeroUtente){
    document.getElementById("mio_id").innerHTML = "è maggiore " + numeroUtente2;
} else if(numeroUtente == numeroUtente2){
    document.getElementById("mio_id").innerHTML = "sono uguali"
}