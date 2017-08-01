
//var arrays: travel words, images, blank spaces, good letters, bad letters
var travelWords = ["italy", "alaska", "peru", "japan", "france", "china"];
var displayArray = [];
var travelWordArray = [];
var badLetter = [];
var displayStr; 
//priming the variable
var gameWon = 0;
var wins = 0;
var losses =0;

//guessLimit= head, body, arm, arm, leg, leg
var guessLimit = 6;

// //need to generate a random word
// //need to convert the string to an array to test the letters in the string
var randomWord = travelWords[Math.floor(Math.random() * travelWords.length)];
var travelWordArray = randomWord.split("");
var travelWordLength = travelWordArray.length;

function setupGame(){
	badLetter = [];
	guessLimit = 6;
	displayArray = [];
	randomWord = travelWords[Math.floor(Math.random() * travelWords.length)];
	travelWordArray = randomWord.split("");
	console.log("travelWordArray" , travelWordArray);
	travelWordLength = travelWordArray.length;

	for (var i = 0; i < travelWordArray.length; i++) {
	displayArray.push("_ ");
	}

	console.log("display letter" , displayArray);
	console.log("bad letter" , badLetter);
}

function screenPrint() {
	var displayArrayStr = displayArray.toString().replace(/,/g,"");
	
	var html = "<h1> Hangman </h1>" +
	"<p> Wins: " + wins + "</p>" +
	"<p> display letter: " + displayArrayStr + "</p>" +
	"<p> bad letter: " + badLetter + "</p>" +
	"<p> Losses: " + losses + "</p>"



	// Set inner html contents of #hamgman
	document.querySelector("#Game").innerHTML = html;
}

// Function is run whenever a key is pressed
setupGame();
screenPrint();

	document.onkeyup = function(event) {
	//after press key remove (press any key intro)
	document.getElementById("Hangman").style.visibility = "hidden";

	//if alpha is pressed then run code
	if (event.keyCode >=65 && event.keyCode <= 90) {

		
		//Determines which key is pressed
		var userGuess = event.key.toLowerCase();

		//gives index of -1 if userGuess is not in any of the 3 arrays
		var wordArrayTest = travelWordArray.indexOf(userGuess);
		var displayArrayTest = displayArray.indexOf(userGuess);
		var badLetterTest = badLetter.indexOf(userGuess);

			//want to take the userGuess and find out if its in one of the 3 arrays
			//A- if all 3 arrays return a -1 then push letter in badletterarray and decrement my guesslimit by 1
				if (wordArrayTest == -1 && displayArrayTest == -1 && badLetterTest == -1) {
					badLetter.push(userGuess);
					guessLimit--;
				}	

			//B- if dsplayarraytest > -1 || badletterTest >-1, then do nothing (because it is already on the screen)
			//don't write anything here just does it for you. 

			//C -while wordarraytest = x and x > -1, displayArray[x] = wordArray[x] , THEN we need to get rid of the letter by  
			//   assigning Wordarray[x] = "*", then retest wordArrayTest = travelWordArray.indexOf(userGuess);
				while (wordArrayTest > -1) {
					var x = wordArrayTest;
					displayArray[x] = travelWordArray[x];
					travelWordArray[x] = "*";
					wordArrayTest = travelWordArray.indexOf(userGuess);

				}

			gameWon = displayArray.indexOf("_ ");

			if (gameWon == -1) {
				alert("you won " + displayArray.toString().replace(/,/g,""));
				wins++;
				setupGame();
			}
			if (guessLimit == 0) {
				alert("you loose ");
				losses++;
				setupGame();
				}

			console.log("userGuess", userGuess);
			console.log("wordArrayTest" , wordArrayTest);
			console.log("displayArrayTest" , displayArrayTest);
			console.log("badLetterTest", badLetterTest);
			console.log("GameWon?", gameWon);
			console.log("travelWordArray", travelWordArray);
			console.log("displayArray", displayArray);
			console.log("badLetter", badLetter);
			console.log("wins", wins);
			console.log("guessLimit", guessLimit);

	}

	else {
		alert('Please input alpha characters only'); 
	}

	screenPrint();

	} 
