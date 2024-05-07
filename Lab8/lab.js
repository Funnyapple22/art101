// Array 
function isEven(x){
    return (x % 2 == 0);
}

//test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [362, 71, 44, 6, 9, 2003]
console.log("My array", array);

var result = array.map(isEven);
// should return [true, false, false, false, false]
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
    return x ** 0.5;
})
// should return [19.026297590440446, 8.426149773176359, 6.6332495807108, 2.449489742783178, 3, 44.75488800120049]
console.log("squareroot of array:", result);