function findWaldo(arr, found) {
  arr.forEach(function (name, i) {
    if  (name === "Waldo") {
      found(i);
    }
  })
  }


var actionWhenFound = function (i) {
  console.log("Found him at index " + i );
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
