var states=["alabama","alaska","arizona","arkansas",
"california","colorado","connecticut","delaware",
"florida","georgia","hawaii","idaho","illinois",
"indiana","iowa","kansas","kentucky","louisiana",
"maine","maryland","massachusetts","michigan",
"minnesota","mississippi","missouri","montana",
"nebraska","nevada","new hampshire","new jersey",
"new mexico","new york","north carolina","north dakota",
"ohio","oklahoma","oregon","pennsylvania","rhode island",
"south carolina","south dakota","tennessee","texas",
"utah","vermont","virginia","washington","west virginia",
"wisconsin","wyoming"];
var wins=0;
var guessesRemaining=12;
var wrongGuessed=[];
var clickedLetters =[];
var compChoice ="";
var albpabet=['a','b','c','d','e','f','g','h','i','j','k',
'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//the function that selects word ramdomly from states array
function chooseWord(){ 
	compChoice = states[Math.floor(Math.random()*states.length)];
	console.log("compChoice after restart: "+compChoice)
	wrongGuessed=[];
	document.getElementById("usedLetters").innerText="Letters already guessed: "+wrongGuessed ;
	// clickedLetters =[];
	console.log("clickedLetters on chooseWord: "+ clickedLetters);
	// blankWord();
	compChoiceArray = compChoice.split(" ");
	console.log("compChoiceArray after restart: "+ compChoiceArray)
	console.log("Array: "+ compChoiceArray);
	function first(){
		var blWord = "";
		for (var i=0; i<compChoiceArray[0].length; i++){
		blWord += "-";
		}
		console.log(""+blWord)
	return blWord;
	}
	blankW.push(first());
	if (compChoiceArray.length == 2){
		var blWord2 = "";
		for (var i=0; i<compChoiceArray[1].length; i++){
			blWord2 += "-";
		}
		blankW.push(blWord2);
	}

	console.log("blankW: " + blankW);
	document.getElementById("compWordOne").innerText = blankW[0];

	if (blankW.length === 2){
		document.getElementById("compWordTwo").innerText = blankW[1];
	}
	else{
		document.getElementById("compWordTwo").innerText= "";
	}
	return blankW;
}

//looking for a guessed letter 
document.onkeyup = function(event){
	userGuess= event.key;
	if (albpabet.indexOf(event.key) === -1){
		console.log("ERROR: not a letter");
	}
	else{
		console.log("	/////////looking for a guessed letter "+userGuess)
		var letterAlreadyUsed = 0
		for (var c=0; c<clickedLetters.length;c++){
			if (userGuess === clickedLetters[c]){
				console.log("ERROR: this letter already was clicked");
				letterAlreadyUsed +=1;
			}
		}
		console.log("letterAlreadyUsed after loop: " + letterAlreadyUsed)
		if (letterAlreadyUsed === 0){
			var met=false;
			console.log("//////////	function firstTimeLetter()")
			console.log("compChoiceArray[0].length: "+compChoiceArray[0].length)
			// if guessed letter is in 1st part of compChoice, replace _ with that letter and save in blankW[0]
			for (var i=0; i<compChoiceArray[0].length; i++){
				if (compChoiceArray[0].substr(i, 1) === userGuess){	//substring func to replace arrayter
					console.log("before replacement "+blankW);
					// blankW=blankW[0].replaceAt(i,userGuess);
					blankW[0] = blankW[0].substr(0, i) + userGuess.toUpperCase() + blankW[0].substr(i + 1);
					console.log("after replacenent: "+blankW);
					met=true;
				}
			}
			// if guessed letter is in 2nd part of compChoice, replace _ with that letter and save in blankW[1]
			if (compChoiceArray.length === 2){
				for (var i=0; i<compChoiceArray[1].length; i++){
					if (compChoiceArray[1].substr(i, 1) === userGuess){
						console.log("before replacement of 2 "+blankW);
						// blankW=blankW[0].replaceAt(i,userGuess);
						blankW[1] = blankW[1].substr(0, i) + userGuess.toUpperCase() + blankW[1].substr(i + 1);
						console.log("after replacenent: of 2 "+blankW);
						met=true;
					}
				}
			}
			document.getElementById("compWordOne").innerText= blankW[0];
			if (compChoiceArray.length === 2){
				document.getElementById("compWordTwo").innerText= blankW[1];
			}
			if (met===false){
				guessesRemaining -=1;
				document.getElementById("guesses").innerText="Number of guesses remaining: "+guessesRemaining ;


				console.log("wrongGuessed: " +wrongGuessed + typeof wrongGuessed)
				console.log("clickedLetters: "+clickedLetters + typeof clickedLetters)

				wrongGuessed.push(userGuess);
			
				document.getElementById("usedLetters").innerText="Letters already guessed: "+wrongGuessed ;
				console.log(blankW)
				if (guessesRemaining === 0){
					console.log("I AM IN lost func");
					alert("Looser");
					document.getElementById("wins").innerText= "Wins: "+ wins;
					guessesRemaining=12;
					document.getElementById("guesses").innerText="Number of guesses remaining: "+guessesRemaining;
					document.getElementById("compWordOne").textContent = "";
					document.getElementById("compWordTwo").innerText = "";
					compChoice="";
					blankW=[];
					chooseWord();
					console.log("compChoice "+compChoice);
					clickedLetters = [];
					return;
				}
			} 
			else{
				console.log("I AM IN isWordOpen func");
				var isWOpen1=true;
				var isWOpen2=true;
				for (var b=0; b<blankW[0].length; b++){
					if (blankW[0].substr(b, 1) === "-"){	
						isWOpen1 = false;
					}
				}
				if (blankW.length === 2){
					for (var b=0; b<blankW[1].length; b++){
						if (blankW[1].substr(b, 1) === "-"){
							isWOpen1 = false;
						}
					}
				}	
				if (blankW.length === 2){
					if (isWOpen1 && isWOpen2){
						console.log("I AM IN wordOpen func");
						wins += 1;
						document.getElementById("wins").innerText= "Wins: "+ wins;
						guessesRemaining=12;
						document.getElementById("guesses").innerText="Number of guesses remaining: "+guessesRemaining;
						document.getElementById("compWordOne").textContent = "";
						document.getElementById("compWordTwo").innerText = "";
						compChoice="";
						blankW=[];
						chooseWord();
						console.log("compChoice "+compChoice);
						clickedLetters = [];
						return;
					}
					else{
						return
					}
				}
				else{
					if (isWOpen1){
						console.log("I AM IN wordOpen func");
						wins += 1;
						document.getElementById("wins").innerText= "Wins: "+ wins;
						guessesRemaining=12;
						document.getElementById("guesses").innerText="Number of guesses remaining: "+guessesRemaining;
						document.getElementById("compWordOne").textContent = "";
						document.getElementById("compWordTwo").innerText = "";
						compChoice="";
						blankW=[];
						chooseWord();
						console.log("compChoice "+compChoice);
						clickedLetters = [];
						return 
					}
					else{
						return
					}
				}
			}
			console.log("blankW is " +blankW)
			console.log("compChoiceArray "+ compChoiceArray)
		}
		clickedLetters.push(userGuess);
		console.log("clickedLetters on ONKEYUP: "+clickedLetters + " ||| typeof:  " + typeof clickedLetters);
	}
}

var blankW=[];
clickedLetters = [];
blankW=chooseWord();




























