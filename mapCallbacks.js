var words = ['ground', 'control', 'to', 'major', 'tom'];

// map(words, function (word) {
//   return word.length;
// });
//
// map(words, function (word) {
//   return word.toUpperCase();
// });
//
// map(words, function (word) {
//   return word.split('').reverse().join('');
// });

function map(array, callBack){
  var newWords = []
  for(indexValue of array) {
    newWords.push(callBack(indexValue))

  }
console.log(newWords)


}

map(words, function(newWords) {
  return newWords.length;
});

map(words, function (newWords) {
  return newWords.toUpperCase();
});

map(words, function(newWords) {
  return newWords.split('').reverse().join('');
});
