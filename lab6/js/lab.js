// index.js - experiment with javascript
// Author: Allon
// Date: 4/28/24

// Constants

// Functions


// Define different modes of transport
myTransport = ["Subaru Impreza", "Skateboard", "Bike", "Walking"];

// Define the main vehicle with its properties
var myMainRide = {
  make: "Subaru",
  model : "Impreza",
  color : "Red",
  year : 1995,
  age: function() {
    return 2022 - this.year;
  }

}

document.writeln("Kinds of transportation I use: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "<pre>");




// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
