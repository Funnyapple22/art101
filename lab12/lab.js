function sortingHat(str) {
    let len = str.length;
    let mod = len % 7;
    if (mod == 0) {
        return "Gryffindor";
    } else if (mod == 1) {
        return "Ravenclaw";
    } else if (mod == 2) {
        return "Slytherin";
    } else if (mod == 3) {
        return "Hufflepuff";
    } else if (mod == 4) {
        return "Gryffindor";
    } else if (mod == 5) {
        return "Ravenclaw";
    } else if (mod == 6) {
        return "Slytherin";
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    var newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
});