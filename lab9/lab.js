// ad button to challenge section
$("#challenge").append("<button id='button-challenge'>commit arson</button>");
// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});
$( "#challenge" ).on( "click", function() {
    alert( "why did u press that." );
} );



// add button to the problems section
$("#problems").append("<button id='button-problems'>call the fire department</button>");
// add a click listener to the problems button
$("button-problems").click(function(){
//now add (or subtract) the "special" class to the section
$("#problems").toggleClass("special");
});
$( "#problems" ).on( "click", function() {
    alert( "w r here. ");
} );



// add button to results section
$("#results").append("<button id='button-results'>sneeze</button>");
// add a click listener to the results button
$("button-results") .click(function(){
    //now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});
$( "#results" ).on( "click", function() {
    alert( "bless you ");
} );


