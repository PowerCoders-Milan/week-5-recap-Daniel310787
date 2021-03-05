// # Random objects

// Create a function that given two arrays will create an object with randomly selected names as values and a random score.

// Careful, the names cannot repeat.

// Create another function that given an object will console log the names in alphabetical order and their related score.
array1 = ['marco', 'antonio', 'luca', 'leo', 'mary', 'sebastian', 'will']
array2 = [4, 7, 2, 9, 12, 22, 66, 234, 1, 23]
var result = {};

array1.forEach (function randomly() {
    var random1 = Math.floor(Math.random() * array1.length);
    var random2 = Math.floor(Math.random() * array2.length);
    result[array1[random1]] = array2[random2]
})

console.log(result)







// function sort() {
//     numbers.sort(function(a, b){return a-b});
//      = numbers.join(" - ");
//  }