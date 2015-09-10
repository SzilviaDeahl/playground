function printWord(word) {
  if (word.length === 0 ){
    console.log('we have reached the end');
  } else {
    console.log(word);
    printWord(word.slice(1));
  }
}

printWord('elkelkaposztasitottalanitottatok');
