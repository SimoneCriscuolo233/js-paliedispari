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



