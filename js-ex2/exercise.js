// # Objects - messy test results

// The test results are in but the machine did a mess. <br> The array one should be the names and the array two should be the scores.

// Create a function that combines the two arrays together and creates an object with key and value pair like this => name: score.

// The two arrays are mixed, but their order is correct.

// Use all the strings elements as keys and the number elements as values to create the "score" object.

// Once you created the score object print it to the console.


var array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary'];
var order1 =array1.splice(3, 0, "sebastian", "will")
var value1 = 13;
var value2 = 18
array1 = array1.filter(function(item) {
    return item !== value1 && item !== value2
})
console.log(array1)
var array2 = [21, 19, 12, 'sebastian', 'will', 23, 20];
var order2 =array2.splice(3, 0, 13, 18)
var value3 = "sebastian";
var value4 = "will";
array2 = array2.filter(function(item) {
    return item !== value3 && item !== value4
})
console.log(array2)

var result = {};
array1.forEach((key, i) => result[key] = array2[i]);
console.log(result);
