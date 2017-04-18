// JavaScript Document - just bare bones for testing right now

// insert function that grabs the number selected from the list of numbers
function insertData(){
	//Gets the radio button's that are selected and puts them into the corresponding html components.
	var radios1 = document.getElementsByName('number');
	var radios2 = document.getElementsByName('mathSign');
	
	for (var i = 0, length = radios1.length; i < length; i++) {
		if (radios1[i].checked) {
			// do whatever you want with the checked radio
			document.getElementById("chosenNumber").value = radios1[i].value;
	
			// only one radio can be logically checked, don't check the rest
			break;
		}
	}
	for (var i = 0, length = radios2.length; i < length; i++) {
		if (radios2[i].checked) {
			// do whatever you want with the checked radio
			document.getElementById("mathSign").innerHTML = radios2[i].value;
	
			// only one radio can be logically checked, don't check the rest
			break;
		}
	}
	
	//Disables menu so test may begin.
	document.getElementById("submitButton").disabled = true;
	document.getElementById("testing").disabled = false;
	
	var radios1 = document.getElementsByName('number');

	for (var i=0, iLen=radios1.length; i<iLen; i++) {
	  radios1[i].disabled = true;
	} 
	var radios2 = document.getElementsByName('mathSign');

	for (var i=0, iLen=radios2.length; i<iLen; i++) {
	  radios2[i].disabled = true;
	} 
	
	selectedSign = document.getElementById("mathSign").innerHTML;
	
	// Random number generator (Needs refinement most likely)
	var ranNum = Math.floor((Math.random() * 10) + 1);
	document.getElementById("randomNumber").value = ranNum;
	
	/*
	if(selectedSign == "&divde")
	{
		var selectedNumber = document.getElementById("chosenNumber").value;
		function GetRandomNumberBetween(lo, hi) {
		  return Math.floor(lo + Math.random() * (hi - lo));
		}
		
		Number.prototype.FindClosestNumberThatIsDivisibleBy = function(n) {
		  return Math.round(this / n) * n; 
		  //simplify as per Guffa
		};
		
		var r = GetRandomNumberBetween(6, 144);
		var c = r.FindClosestNumberThatIsDivisibleBy(ranNum);
		document.getElementById("randomNumber").value = c;
		
	}
	*/
	

}



// this uses the enter button to submit the answer
function onTestChange() {
    var key = window.event.keyCode;

    // If the user has pressed enter
    if (key === 13) {
		
		var testSolution = calculationFunction();
		
		if(testSolution == true){
			// calls score function to count the answer right.
			var ranNum = Math.floor((Math.random() * 10) + 1);
			document.getElementById("randomNumber").value = ranNum;
			alert("Answer was right and this ran good")
		
		}
		else if(testSolution == false){
			//does not call score function to not count cus user got answer wrong.
			var ranNum = Math.floor((Math.random() * 10) + 1);
			document.getElementById("randomNumber").value = ranNum;
			alert("Answer was wrong and this ran good")
		}
		

        
    }
 
}

function calculationFunction() {
	var userInput = document.getElementById("testing").value;
	var firstNumber = document.getElementById("randomNumber").value;
	var secondNumber = document.getElementById("chosenNumber").value;
	var mathSign = document.getElementById("mathSign").value;
	var answer = userInput;
	var mathSignJS = mathSign;
	parseInt(answer);
	
	if (mathSignJS == "+")
	{
		var solution = parseInt(firstNumber) + parseInt(secondNumber);
		if(answer == solution)
		{
			return true;
		}
		
	}
	
	if (mathSignJS == "-")
	{
		var solution = parseInt(firstNumber) - parseInt(secondNumber);
		if(answer == solution)
		{
			return true;
		}
	}
	
	if (mathSignJS == "*")
	{
		alert("made it this far")
		var solution = parseInt(firstNumber) * parseInt(secondNumber);
		if(answer == solution)
		{
			return true;
		}
	}
	
	if (mathSignJS == "/")
	{
		alert("you got this far")
		var solution = parseInt(firstNumber) / parseInt(secondNumber);
		if(answer == solution)
		{
			return true;
		}
	}
	
	
	return false;
	
}

/// or gives you a wrong message and updates the test question/ Calculation function contains the method for testing if answer is right, then calls the message function that either updates the test question
