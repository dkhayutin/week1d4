var words = ['ground', 'control', 'to', 'major', 'tom'];

function map (arr, callBack) {
  var newArray = []
  for(word of arr) {
    newArray.push(callBack(word))
  }
  console.log(newArray)
}

function mapping (value) {
  return word;
}

map(words, mapping)

map(words, function (word) {
  return word.length;
});

map(words, function (word) {
  return word.toUpperCase();
});

map(words, function (word) {
  return word.split('').reverse().join('');
});
