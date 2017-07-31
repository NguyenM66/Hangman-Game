// It's a good idea to start with your variables first then work on your funtions


//var arrays: travel words, images, blank spaces, good letters, bad letters
var travelWords = ["italy", "alaska", "peru", "japan", "germany", "bermuda"];
var travelImages = []; //this is likely not an array and an image that is associated with word
var displayArray = [];
var travelWordArray = [];
var badLetter = [];
var displayStr; 
var gameWon = 1;

// Variables here
// Wins=0 and a win++ at the end of the win loop
// guessLimit=6 and a guess-- at the end of guess loop
var wins = 0;
//guessLimit= head, body, arm, arm, leg, leg
var guessLimit = 6;

//need to generate a random word
//make array same size with -- and display it
//need to convert the string to an array to test the letters in the string
var randomWord = travelWords[Math.floor(Math.random() * travelWords.length)];
document.querySelector("#Hangman").innerHTML = displayStr;
var travelWordArray = randomWord.split("");
console.log("travelWordArray" , travelWordArray);
// need an array of -- to put on the screen that is the same size as the word
var travelWordLength = travelWordArray.length;


//for loop to put in the same number of - as letters
for (var i = 0; i < travelWordArray.length; i++) {
	displayArray.push("_ ");
}


console.log("display letter" , displayArray);
console.log("bad letter" , badLetter);


// Function is run whenever a key is pressed
document.onkeyup = function(event) {
	var gameWon = displayArray.indexOf("_ ");
	//while (gameWon > -1 && guessLimit >= 0){

		//Determines which key is pressed
		var userGuess = event.key;

			//if alpha is pressed then run code
				//make alpha into lower case userguess.tolowercase()

		//gives index of -1 if userGuess is not in any of the 3 arrays
		var wordArrayTest = travelWordArray.indexOf(userGuess);
		var displayArrayTest = displayArray.indexOf(userGuess);
		var badLetterTest = badLetter.indexOf(userGuess);


		//want to take the userGuess and find out if its in one of the 3 arrays
		//A- if all 3 arrays return a -1 then push letter in badletterarray and decrement my guesslimit by 1
			if (wordArrayTest == -1 && displayArrayTest == -1 && badLetterTest == -1) {
				badLetter.push(userGuess);
				guessLimit--;

				if (gameWon == -1) {
					console.log("You Win!");
					wins++;
				}

				if (guessLimit == 0) {
					console.log("You Loose... ");
}
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

		// when display array is filled then they win, increment win++


		//restart game with new word

		gameWon = displayArray.indexOf("_ ");
		console.log("userGuess", userGuess);
		console.log("wordArrayTest" , wordArrayTest);
		console.log("displayArrayTest" , displayArrayTest);
		console.log("badLetterTest", badLetterTest);
		console.log("GameWon?", gameWon);
		console.log("travelWordArray", travelWordArray);
		console.log("displayArray", displayArray);
		console.log("badLetter", badLetter);
		console.log("guessLimit", guessLimit);
		console.log("wins", wins);
	//}
}



// if numberGuesses = guessLimit, you loose
// if input is invalid do not do anything until it is valid
// Game over

	// Set inner html contents of #hamgman
	//document.querySelector("#Hangman").innerHTML = html;