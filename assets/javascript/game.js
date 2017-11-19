// $(document).ready(function(){
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


	//the function that selects word ramdomly from states array
	function chooseWord(){ 
		var compChoice = states[Math.floor(Math.random()*states.length)];
		// console.log ("compChoice: "+compChoice);
		// console.log("compChoice.length: "+compChoice.length);
		return compChoice;
		}

	//show underscores instead of letters in words
	function blankWord(){
		console.log("Array: "+ compChoiceArray);
		function first(){
			var blWord = "";
			for (var i=0; i<compChoiceArray[0].length; i++){
			blWord += "-";
			}
		return blWord;
		}
		var blankW= [];
		blankW.push(first());
		if (compChoiceArray.length == 2){
			var blWord2 = "";
			for (var i=0; i<compChoiceArray[1].length; i++){
				blWord2 += "-";
			}
			blankW.push(blWord2);
		}
		console.log("blankW: " + blankW);
		return blankW;
	}

	//display (append) the blankW in DOM
	function appendWord(){
		var wordContainer= document.createElement("div")
		wordContainer.setAttribute("id","compWordOne");
		console.log("wordContainer1: ");
		console.log(wordContainer);
		var text = document.createTextNode(blankW[0]);
		wordContainer.appendChild(text);
		// console.log(text)
		document.getElementById("word").appendChild(wordContainer);

		if (blankW.length === 2){
			var wordContainer= document.createElement("div")
			wordContainer.setAttribute("id","compWordTwo");
			console.log("wordContainer2: ");
			console.log(wordContainer)
			var text = document.createTextNode(blankW[1]);
			wordContainer.appendChild(text);
			document.getElementById("word").appendChild(wordContainer);
		}
	}

	//looking for a guessed letter 
	document.onkeyup = function(event){
		userGuess= event.key;

		var clickedLetters =[];
		clickedLetters=clickedLetters.push(userGuess);

		for (var x=0; x<clickedLetters.length; x++){
			if 
		}
		
		console.log("compChoiceArray[0].length: "+compChoiceArray[0].length)
		for (var i=0; i<compChoiceArray[0].length; i++){
			if (compChoiceArray[0].substr(i, 1) === userGuess){	//substring func to replace arrayter
				console.log("before replacement "+blankW);
				// blankW=blankW[0].replaceAt(i,userGuess);
				blankW[0] = blankW[0].substr(0, i) + userGuess + blankW[0].substr(i + 1);
				console.log("after replacenent: "+blankW);
			}
		}
		if (compChoiceArray.length === 2){
			for (var i=0; i<compChoiceArray[1].length; i++){
				if (compChoiceArray[1].substr(i, 1) === userGuess){
					console.log("before replacement of 2 "+blankW);
					// blankW=blankW[0].replaceAt(i,userGuess);
					blankW[1] = blankW[1].substr(0, i) + userGuess + blankW[1].substr(i + 1);
					console.log("after replacenent: of 2 "+blankW);
				}
			}
		}
		document.getElementById("compWordOne").innerText= blankW[0];
		if (compChoiceArray.length === 2){
			document.getElementById("compWordTwo").innerText= blankW[1];

		}
		console.log(blankW)
	} 

	compChoice=chooseWord();
	var compChoiceArray = compChoice.split(" ");
	blankW = blankWord();
	appendWord()



	// document.getElementByClassName("word").append
	// if (compChoiceArray.length ==1){
	// } 


	// for (var i=0; i<compChoice.length; i++){
	// 	if
	// }
	// if compChoice


	// document.onkeyup = function(event){
	// 	console.log ("user's choice: ", event.key);



	// }



























