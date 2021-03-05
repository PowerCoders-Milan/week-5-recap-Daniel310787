// # Arrays

// Create a function that when given an array will console log:
// - the lenght of the array
// - how many numbers and how many string elements there are in the array.

// Test it by calling it with two different arrays.

var array1 = [3, 'c', 'c', 'c', 2, 3, 'b', 3, 'b', 2, 4, 9, "b"];
var array2 = [6, 'q', 'd', 'z', 7, 8, 7, 7, 'z', 6, 6, 6, 1,2, 5, 6, "d"];
var num = 0;
var str = 0;
    
function lookUp(array) {
    array.forEach(function(item){
        if(typeof item === "number"){
            num = num +1;
        } else {
            str = str +1;
        }
    })
    console.log("The length of the array is " +array.length);
    console.log(num+ " is the quantity of numbers");
    console.log(str+ " is the quantity of strings");
}


console.log(lookUp(array2))
