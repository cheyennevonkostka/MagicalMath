// JavaScript Document 
// 4/20/17
//Pablo Lomeli: I've commented out almost every single thing on this javascript file and almost completely single handedly cooked this up.
 
// Timer functions
function settime1(){
 document.getElementById('timer').innerHTML =
  "01" + ":" + "00";
  document.getElementById("totalGiven").innerHTML = 20;
}

function settime5(){
 document.getElementById('timer').innerHTML =
  "05" + ":" + "00";
  document.getElementById("totalGiven").innerHTML = 100;
}	

function checkSecond(sec) {
	if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
	if (sec < 0) {sec = "59"};
  return sec;
}

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0)
  	{
		results();
	  	return; 
	}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

// stop timer function needed.



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
			document.getElementById("mathSignHIDDEN").innerHTML = radios2[i].value;
			// only one radio can be logically checked, don't check the rest
			break;
		}
	}
	
	//sets the game menu's selected symbols
	var currentMathSign = document.getElementById("mathSign").innerHTML;
	if(currentMathSign == "*")
	{
		document.getElementById("mathSign").innerHTML = "&times";
	}
	if(currentMathSign == "/")
	{
		document.getElementById("mathSign").innerHTML = "&divide";
	}
	
	//Disables menu so test may begin.
	document.getElementById("submitButton").disabled = true;
	document.getElementById("testing").disabled = false;
	
	//these loops disable all the radio buttons
	var radios1 = document.getElementsByName('number');

	for (var i=0, iLen=radios1.length; i<iLen; i++) {
	  radios1[i].disabled = true;
	} 
	var radios2 = document.getElementsByName('mathSign');

	for (var i=0, iLen=radios2.length; i<iLen; i++) {
	  radios2[i].disabled = true;
	} 
	
	if(currentMathSign != "/")
	{
		// Random number generator (Needs refinement most likely)
		var ranNum = Math.floor((Math.random() * 12) + 1);
		document.getElementById("randomNumber").value = ranNum;
	}
	
	else if(currentMathSign == "/")
	{
		var selectedNumber = document.getElementById("chosenNumber").value;
		function GetRandomNumberBetween(lo, hi) {
		  return Math.floor(lo + Math.random() * (hi - lo));
		}
		
		//start of a random number generator thats divisible by the number selected
		Number.prototype.FindClosestNumberThatIsDivisibleBy = function(n) {
		  return Math.round(this / n) * n; 
		  //simplify as per Guffa
		};
		
		var r = GetRandomNumberBetween(6, 144);
		var c = r.FindClosestNumberThatIsDivisibleBy(selectedNumber);
		document.getElementById("randomNumber").value = c;
		
	}
	
	startTimer();
	document.getElementById("testing").focus();

}



// this uses the enter button to submit the answer
function onTestChange() {
    var key = window.event.keyCode;

    // If the user has pressed enter
    if (key === 13) {
		
		var testSolution = calculationFunction();
		
		if(testSolution == true){
			// calls score function to count the answer right.
			currentMathSign = document.getElementById("mathSignHIDDEN").innerHTML;
			
			if(currentMathSign != "/")
			{
				// Random number generator (Needs refinement most likely)
				var ranNum = Math.floor((Math.random() * 12) + 1);
				document.getElementById("randomNumber").value = ranNum;
				//alert("Answer was right and this ran good")
				document.getElementById("testing").value = "";
				var answer = "correct";
				showResult(answer);
			}
			
			else if(currentMathSign == "/")
			{
				//start of a random number generator thats divisible by the number selected
				var selectedNumber = document.getElementById("chosenNumber").value;
				function GetRandomNumberBetween(lo, hi) {
				  return Math.floor(lo + Math.random() * (hi - lo));
				}
				
				Number.prototype.FindClosestNumberThatIsDivisibleBy = function(n) {
				  return Math.round(this / n) * n; 
				  //simplify as per Guffa
				};
				
				var r = GetRandomNumberBetween(6, 144);
				var c = r.FindClosestNumberThatIsDivisibleBy(selectedNumber);
				document.getElementById("randomNumber").value = c;
				//alert("Answer was right and this ran good (division")
				document.getElementById("testing").value = "";
				var answer = "correct";
				showResult(answer);
				
			}
		
		}
		else if(testSolution == false){
			currentMathSign = document.getElementById("mathSignHIDDEN").innerHTML;
			
			if(currentMathSign != "/")
			{
				// Random number generator (Needs refinement most likely)
				var ranNum = Math.floor((Math.random() * 12) + 1);
				document.getElementById("randomNumber").value = ranNum;
				//alert("Answer was wrong and this ran good")
				document.getElementById("testing").value = "";
				var answer = "wrong";
				showResult(answer);
			}
			
			else if(currentMathSign == "/")
			{
				//start of a random number generator thats divisible by the number selected
				var selectedNumber = document.getElementById("chosenNumber").value;
				function GetRandomNumberBetween(lo, hi) {
				  return Math.floor(lo + Math.random() * (hi - lo));
				}
				
				Number.prototype.FindClosestNumberThatIsDivisibleBy = function(n) {
				  return Math.round(this / n) * n; 
				  //simplify as per Guffa
				};
				
				var r = GetRandomNumberBetween(6, 144);
				var c = r.FindClosestNumberThatIsDivisibleBy(selectedNumber);
				document.getElementById("randomNumber").value = c;
				//alert("Answer was wrong and this ran good (division")
				document.getElementById("testing").value = "";
				var answer = "wrong";
				showResult(answer);
				
			}		
		}
		

        
    }
 
}

function calculationFunction() {
	// grabs all values to be used for the calculation
	var userInput = document.getElementById("testing").value;
	var firstNumber = document.getElementById("randomNumber").value;
	var secondNumber = document.getElementById("chosenNumber").value;
	var mathSign = document.getElementById("mathSignHIDDEN").innerHTML;
	var answer = userInput;
	var mathSignJS = mathSign;
	parseInt(answer);
	
	// 4 if statements to catch what math sign there is to use.
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
		
		var solution = parseInt(firstNumber) * parseInt(secondNumber);
		if(answer == solution)
		{
			return true;
		}
	}
	
	if (mathSignJS == "/")
	{
		
		var solution = parseInt(firstNumber) / parseInt(secondNumber);
		if(answer == solution)
		{
			return true;
		}
	}
	
	
	return false;
	
}

//counter feature coding below
var rightcounter = 0;
var counter = 0;
var typeTest = document.getElementById("totalGiven").innerHTML;

function showResult(answerInput) {
	
	var delayMillis = 1000; //1 second

	if(answerInput == "correct")
	{
		rightcounter++;
		counter++;
		document.getElementById("answerNotification").innerHTML = "Good job!";
		
		setTimeout(function() {
	  	document.getElementById("answerNotification").innerHTML = "";
		}, delayMillis);
		
		document.getElementById("currentAnswered").innerHTML = rightcounter;
		
	}
	
	if(answerInput == "wrong")
	{
		counter++;
		document.getElementById("answerNotification").innerHTML = "Wrong!";
		
		setTimeout(function() {
	  	document.getElementById("answerNotification").innerHTML = "";
		}, delayMillis);
		
	}
	
	if(counter == 20 && typeTest == "20")
	{
		document.getElementById("testing").disabled = true;
		document.getElementById("randomNumber").value = "";
		document.getElementById("chosenNumber").value = "";
		
		results();
	}
	if(counter == 100 && typeTest == "100")
	{
		document.getElementById("testing").disabled = true;
		document.getElementById("randomNumber").value = "";
		document.getElementById("chosenNumber").value = "";
		
		results();
	}
	// if statement need to catch when the timer goes off to do what these ones will do as well
	
	
}


// results feature coded below
function results()
{
		
	if(typeTest == "20")
	{
		var results = rightcounter / 20;
		results = results * 100;
		document.getElementById("testResults").innerHTML = results.toFixed(2) + "%";
		
	}
	if(typeTest == "50")
	{
		var results = rightcounter / 100;
		results = results * 100;
		document.getElementById("testResults").innerHTML = results.toFixed(2) + "%";
		
	}
}


