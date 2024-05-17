function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random text
    return text.slice(randStart, randStart + randLen);
}

// Ensure the document is ready before attaching event listeners
$(document).ready(function(){
    // Click listener for button
    $("#make-convo").click(function(){
        console.log("click");
        // Get new fake dialogue
        const newText = generateRandomText();
        // Append a new div to our output div
        $("#output").append('<div class="text"><p>' + newText + '</p></div>');
    });
});