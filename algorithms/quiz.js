function printWord(word) {
  if (word.length === 0 ){
    console.log('we have reached the end');
  } else {
    console.log(word);
    printWord(word.slice(1));
  }
}

printWord('elkelkaposztasitottalanitottatok');

var romanNumerals = {
 'M': 1000,
 'D': 500,
 'C': 100,
 'L': 50,
 'X': 10,
 'V': 5,
 'I': 1
};


total = 0 ;
function romans(string){
  if (string === ''){
    return total;
  } else {
    total += romanNumerals[string[0]];
    return romans(string.slice(1)) ;
  }
}
//
// XVIII
// VIII
// III
// II
// I
// ""

result = romans("XVIII");
console.log(result);
