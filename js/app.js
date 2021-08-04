// Bernard Mulaw
// GUI Class Professor Zhang
// 08/01/2021

// this is my validation function. I check to see if the inputs are with min > max and if they're decimal numbers
function checkForErrors(minW, maxW, minH, maxH) { 
    if (minW > maxW) {
        document.getElementById("error").innerHTML = "<h4>!!! please enter a min width (" + minW + ") that is less than max width (" + maxW + ") !!! </h4>";
        return null;
    }

    if (minH > maxH) {
        document.getElementById("error").innerHTML = "<h4>!!! please enter a min height (" + minH + ") that is less than max height (" + maxH + ") !!! </h4>";
        return null;
    }

    if (minW%1 !== 0 || maxW%1 !== 0 || minH%1 !== 0 || maxH%1 !== 0 ) {
        document.getElementById("error").innerHTML = "<h4>!!! whole number please !!! </h4>";
        return null;
    }
    // all functions above return null so the function call knows there is an error!
    else {
        document.getElementById("error").innerHTML = "<h4> </h4>";
    }
    // error message is displayed in h4 tag because it is visibily aestheic
}

// here is where I extract data from form and return that data after error checking
function getNumbers() {
    // taking the inputs in the form (code aspired by lecture videos provided by you, Professor Zhang)
    var minW = (document.getElementById('minW').value);
    var maxW = (document.getElementById('maxW').value);
    var minH = (document.getElementById('minH').value);
    var maxH = (document.getElementById('maxH').value);
    
    // if there is an empty input, i will raise an error requiring user to input numbers
    if (minW === "" || maxW === "" || minH === "" || maxH === "") {
        document.getElementById("error").innerHTML = "<h4>!!! please enter a number for each fields !!! </h4>";
        return null;
        // i return null so the function exits
    }

    var errorCheck = checkForErrors(Number(minW), Number(maxW), Number(minH), Number(maxH));
    if (errorCheck === null) {
        // if errorCheck gets back null, it knows there is definitely an error so we can exit the function
        return null;
        // not reseting the fields so user knows where they're error is
    }
    // https://stackoverflow.com/questions/14589193/clearing-my-form-inputs-after-submission
    // reseting the fields was learned from link above. I do this so it looks more new when user clicks button
    document.getElementById('minW').value = "";
    document.getElementById('maxW').value = "";
    document.getElementById('minH').value = "";
    document.getElementById('maxH').value = "";
    
    
    // parseInt was found here: https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
    // i return it in an array so I can parse through and make table according to the data in it
    return [parseInt(minW), parseInt(maxW), parseInt(minH), parseInt(maxH)]
}


function makeTable() {
    const chosenNumbers = getNumbers();
    if (chosenNumbers === null) {
        // if function call gets a null, we know there's an error (see comments above), so we exit code with return
        return;
    }
    // establishing values from the array 
    let minW = chosenNumbers[0];
    let maxW = chosenNumbers[1];
    let minH = chosenNumbers[2];
    let maxH = chosenNumbers[3];

    // this is where I populate/create my table
    var table = document.getElementById('myTable');
    for (var h=minH; h < maxH +1; h ++) {
        // getting height first to set it as rows - setting to variable eachRow
        var eachRow = table.insertRow(h - minH);
        for (var w=minW; w < maxW+ 1; w++) {
            // ech row is inserted (in correct cell) with multiplication of values at each iteration
            // so we update the width number, multiply it by the current height number and put that in a cell
            eachRow.insertCell(w - minW).innerHTML = w * h;
        }
        // after each multiplication and storing result in cell, i add the height info to table in the first col (at 0)
        eachRow.insertCell(0).innerHTML = h;
    }
    let topRowTable = table.insertRow(0);
    for (var w = minW; w <= maxW; w ++) {
        // after all multiplications and storing result in cell, i add the width info to table in the first row (at 0)
        topRowTable.insertCell(w - minW).innerHTML = w;
    }
    // just adding a space to top left corner for aethetics/spacing
    topRowTable.insertCell(0).innerHTML = " ";
}

function reset() {
    // resets page found/learned from here: https://www.w3schools.com/jsref/met_loc_reload.asp
    location.reload();
}
