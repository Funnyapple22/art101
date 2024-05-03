// sort username functions that takes user names and sorts them
function sortUserName() {
    var userName = window.prompt("Hi, please tell me your name so I can sort it :)");
    console.log("userName =", userName);

    // Split the string into an array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    // Sort the array
    var nameArraySort = nameArray.sort(); // Corrected the assignment

    console.log("nameArraySort =", nameArraySort);

    // Join the array back into a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
}

// Output the sorted name
document.writeln("Name sorted: ", sortUserName(), "</br>");

//output
document.writeln("name fixed: ",
sortUserName(), "</br>");