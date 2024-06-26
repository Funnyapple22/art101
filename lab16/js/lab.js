// index.js - Lab 16: JSON and APIs 
// Author: Allon Ramirez
// Date: 6/9/24
$.ajax({
    dataType: "json", // 
    success: function(data) {
        console.log(data);
        // Assuming data contains an image URL and some text, update the DOM accordingly
        $('#response').html(`<p>${data.answer}</p><img src="${data.image}" alt="Comic">`);
    },
    error: function(jqXHR, textStatus, errorThrown) { 
        console.error("Error:", textStatus, errorThrown);
        $('#response').html('<p>Sorry, something went wrong. Please try again later.</p>');
    }
});