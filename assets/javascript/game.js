var states=["Alabama","Alaska","Arizona","Arkansas",
"California","Colorado","Connecticut","Delaware",
"Florida","Georgia","Hawaii","Idaho","Illinois",
"Indiana","Iowa","Kansas","Kentucky","Louisiana",
"Maine","Maryland","Massachusetts","Michigan",
"Minnesota","Mississippi","Missouri","Montana",
"Nebraska","Nevada","New Hampshire","New Jersey",
"New Mexico","New York","North Carolina","North Dakota",
"Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
"South Carolina","South Dakota","Tennessee","Texas",
"Utah","Vermont","Virginia","Washington","West Virginia",
"Wisconsin","Wyoming"];

function chooseWord(){
	var compChoice = states[Math.floor(Math.random()*states.length)];
	console.log (compChoice);
	console.log("compChoice.length: "+compChoice.length);
	return compChoice;
	}

function blankWord(){
	var compChoiceArray = compChoice.split(" ");
	console.log("Array: "+ compChoiceArray);
	function first(){
		var blWord = "";
		for (var i=0; i<compChoiceArray[0].length; i++){
		blWord += "_";
		}
	console.log(blWord);
	return blWord;
	}
	var blankW= [];
	blankW.push(first());
	if (compChoiceArray.length == 2){
		var blWord2 = "";
		for (var i=0; i<compChoiceArray[1].length; i++){
			blWord2 += "_";
		}
		blankW.push(blWord2);
	}
	console.log(blankW);
	return blankW;
}

function appendWord(){
	var div= document.createElement("div");
	var text = document.createTextNode(blankW);
	div.appendChild(textdiv);
	document.querySelectorAll(".word").append(div);
}


compChoice=chooseWord();
blankW = blankWord();
appendWord()



// document.getElementByClassName("word").append
// if (compChoiceArray.length ==1){
// } 


// for (var i=0; i<compChoice.length; i++){
// 	if
// }
// if compChoice


document.onkeyup = function(event){
	console.log ("user's choice: ", event.key);



}