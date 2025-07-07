//Palindroma

//definizione variabile per inserimento di una parola da parte dell'utente
const userWord = prompt(`Inserisci una parola`);
//creazione di una funzione che verifica se la parola inserita è palindroma
function isPalindrome(word) {
  //creazione di una variabile che contiene la parola al contrario
  const reversedWord = word.split('').reverse().join('');
  //verifica se la parola inserita è uguale a quella al contrario
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}
//creazione di una variabile che invoca e contiene il risultato della funzione
const result = isPalindrome(userWord);
//creazione di un controllo che mostra il risultato in console
if (result) {
  console.log(`La parola "${userWord}" è palindroma.`);
} else {
  console.log(`La parola "${userWord}" non è palindroma.`);
}


//Pari o DIspari

//dichiarazione di una variabile per la somma dei due numeri\
let sum = 0;
//l'utente sceglie pari  o dispari
const userChoice = prompt(`Scegli pari o dispari (scrivi "pari" o "dispari")`);
//definizione variabile per inserimento di un numero da parte dell'utente
const userNumber = parseInt(prompt(`Inserisci un numero da 1 a 5`));
//creazione di una funzione che crea un numero random da 1 a 5
function getRandomNumber() {
  //creazione di una variabile che contiene un numero random da 1 a 5
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return randomNumber;
}
//creazione di una variabile che invoca e contiene il numero random
const randomNumber = getRandomNumber();
//creazione di una funzione che verifica se la somma dei numeri e' pari o dispari
function isEven(number) {
  //creazione di una variabile che contiene il risultato della somma dei due numeri
  sum = userNumber + randomNumber;
  //verifica se la somma è pari o dispari
  if (sum % 2 === 0) {
    return true; //pari
  } else {
    return false; //dispari
  }
}
//creazione di una variabile che invoca e contiene il risultato della funzione
const numResult = isEven(sum);
//creazione di un controllo che mostra il risultato in console
if (numResult && userChoice.toLowerCase() === 'pari') {
  console.log(`Hai vinto. La somma del tuo numero ${userNumber} e il numero random ${randomNumber} e' pari. ${sum}`);
} else if (numResult === false && userChoice.toLowerCase() === 'dispari') {
  console.log(`Hai  perso. La somma del tuo numero ${userNumber} e il numero random ${randomNumber} e' dispari. ${sum}`);
} else if (numResult === false && userChoice.toLowerCase() === 'dispari') {
  console.log(`Hai vinto. La somma del tuo numero ${userNumber} e il numero random ${randomNumber} e' dispari. ${sum}`);
} else {
  console.log(`Hai perso. La somma del tuo numero ${userNumber} e il numero random ${randomNumber} e' pari. ${sum}`);
}