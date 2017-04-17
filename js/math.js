// JavaScript Document - just bare bones for testing right now

// insert function that grabs the number selected from the list of numbers
document.getElementById("changingNumber").value = "1";

// insert a function that grabs the desired math 
document.getElementById("mathSign").innerHTML = "&divide"; // for times its &times

// Random number generator
var ranNum = Math.floor((Math.random() * 10) + 1);
document.getElementById("randomNumber").value = ranNum;

// this uses the enter button to submit the answer
function onTestChange() {
    var key = window.event.keyCode;

    // If the user has pressed enter
    if (key === 13) {
		
		document.getElementById("testing").value = "testing";
		//calls calculation function
        
    }
 
}

/// or gives you a wrong message and updates the test question/ Calculation function contains the method for testing if answer is right, then calls the message function that either updates the test question
