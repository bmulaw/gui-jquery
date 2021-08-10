// https://www.w3schools.com/jquery/jquery_ref_events.asp
$(document).ready(function() {
    // will use ".on('input')" for rest of project becuase of this source:
        //https://www.tutorialrepublic.com/faq/how-to-detect-change-in-a-text-input-box-in-jquery.php
    $("#minW").on("input", function() {
        const otherValue = document.getElementById("maxW").value;
        const minNum = Number(this.value);
        const maxNum = Number(document.getElementById("maxW").value);
        const maxHasDecimal = document.getElementById("maxW").value.includes('.');
        const minHasDecimal = document.getElementById("minW").value.includes('.');
        
        if (this.value === '' || !otherValue) {
            $("#minW").removeClass();
        }
        if(otherValue !== '' &&  minNum > maxNum && !maxHasDecimal) {
            // for .addClass and .removeClass source:  https://api.jquery.com/removeClass/
            $("#minW").removeClass();  
            $("#minW").addClass("error");
            $("#maxW").removeClass(); 
            // source for .html https://stackoverflow.com/questions/55913980/display-an-error-message-in-html-using-jquery/55914010
            $("#errorW").html('Min Width needs to be less than Max Width');
        } 
        else if (minHasDecimal) {
            $('#minW').removeClass();
            $('#minW').addClass('error');
        }
        else {
            $("#minW").removeClass();
            $("#errorW").html('');
        }
    });

    $("#maxW").on("input", function() {
        const maxNum = Number(this.value);
        const minNum = Number(document.getElementById("minW").value);
        const otherValue = document.getElementById("minW").value;
        const maxHasDecimal = document.getElementById("maxW").value.includes('.');
        const minHasDecimal = document.getElementById("minW").value.includes('.');

        if (this.value === '' || !minNum) {
            $("#maxW").removeClass();
        }
        else if(otherValue !== '' &&  maxNum < minNum && !minHasDecimal ){
            $("#minW").removeClass(); 
            $("#maxW").removeClass();   
            $("#maxW").addClass("error");
            $("#errorW").html('Max Width needs to be greater than Min Width');
        }
        else if (maxHasDecimal) {
            $('#maxW').removeClass();
            $('#maxW').addClass('error');
        }
        else {
            $("#maxW").removeClass();
            $("#errorW").html('');
        }
        
    });
    $("#minH").on("input", function() {
        const minNum = Number(this.value);
        const maxNum = Number(document.getElementById("maxH").value);
        const otherValue = document.getElementById("maxH").value;
        const maxHasDecimal = document.getElementById("maxH").value.includes('.');
        const minHasDecimal = document.getElementById("minH").value.includes('.');

        if (this.value === '' || !maxNum) {
            $("#minH").removeClass();
        }
        if(otherValue !== '' && minNum > maxNum && !maxHasDecimal) {
            $("#minH").removeClass();  
            $("#minH").addClass("error");
            $("#maxH").removeClass(); 
            $("#errorH").html('Min Height needs to be less than Max Heigth');
        }
        else if (minHasDecimal) {
            $('#minH').removeClass();
            $('#minH').addClass('error');
        } 
        else {
            $("#minH").removeClass();
            $("#errorH").html('');
        }
    });
    $("#maxH").on("input", function() {
        const maxNum = Number(this.value);
        const minNum = Number(document.getElementById("minH").value);
        const otherValue = document.getElementById("minH").value;
        const maxHasDecimal = document.getElementById("maxH").value.includes('.');
        const minHasDecimal = document.getElementById("minH").value.includes('.');

        if (this.value === '' || !minNum) {
            $("#maxH").removeClass();
        }
        else if(otherValue !== '' && maxNum < minNum && !minHasDecimal){
            $("#minH").removeClass(); 
            $("#maxH").removeClass();   
            $("#maxH").addClass("error");
            $("#errorH").html('Max Height needs to be greater than Min Height');
        }
        else if (maxHasDecimal) {
            $('#maxH').removeClass();
            $('#maxH').addClass('error');
        }
        else {
            $("#maxH").removeClass();
            $("#errorH").html('');
        }
        });
    });

// all code underneath are my exact same code from hw3 (see app.js file)

function getNumbers() {
    var minW = (document.getElementById('minW').value);
    var maxW = (document.getElementById('maxW').value);
    var minH = (document.getElementById('minH').value);
    var maxH = (document.getElementById('maxH').value);
    
    if (minW === "" || maxW === "" || minH === "" || maxH === "") {
        document.getElementById("error").innerHTML = "<h4>!!! please enter a number for each fields !!! </h4>";
        return null;
    }
    
    return [parseInt(minW), parseInt(maxW), parseInt(minH), parseInt(maxH)]
}


function makeTable() {
    const chosenNumbers = getNumbers();
    if (chosenNumbers === null) {
        return;
    }
    let minW = chosenNumbers[0];
    let maxW = chosenNumbers[1];
    let minH = chosenNumbers[2];
    let maxH = chosenNumbers[3];

    var table = document.getElementById('myTable');
    for (var h=minH; h < maxH +1; h ++) {
        var eachRow = table.insertRow(h - minH);
        for (var w=minW; w < maxW+ 1; w++) {
            eachRow.insertCell(w - minW).innerHTML = w * h;
        }
        eachRow.insertCell(0).innerHTML = h;
    }
    let topRowTable = table.insertRow(0);
    for (var w = minW; w <= maxW; w ++) {
        topRowTable.insertCell(w - minW).innerHTML = w;
    }
    topRowTable.insertCell(0).innerHTML = " ";
}

