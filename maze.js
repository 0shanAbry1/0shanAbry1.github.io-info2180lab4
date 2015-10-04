var flag = false;

window.onload = function() {
    	//Exercise 1:- $("boundary1").onmouseover = overLine;
    
	$("start").onclick = startGame; //To begin the game
    	$("end").onmouseover = endGame; //To end the game	

	/*
	Exercise 2:- Array list >> Contents: Div containers [Id maze; Class boundary]
	Eventhandler >> Listens to elements in array list (If player's mouse move into any of these elements)
	*/

	var borders = $$("div#maze div.boundary");
	for(var k = 0; k < borders.length; k++){
		borders[k].onmouseover = overLine;
	}
};

function overLine() {
	//Exercise 1:- $("boundary1").addClassName("youlose");
	
	/*
	Exercise 2:- Array list >> Contents: Div containers [Id maze; Class boundary]
	Response >> Turns the background of all elements to Red
	*/

	var borders = $$("div#maze div.boundary");
	for(var k = 0; k < borders.length; k++){
		borders[k].addClassName("youlose");
	}

	flag = true; //Player loses the game
	$("status").textContent = "You lose! :(";
}

function startGame(){
	flag = false;
	
	/*
	Exercise 4:- Array list >> Contents: Div containers [Id maze; Class boundary]
	Response >> Resets background colour
	*/

	var borders = $$("div#maze div.boundary");
	for (var i = 0; i < borders.length; i++) {
        	borders[i].removeClassName("youlose");}

	$("status").textContent = "Let's do this! :D Find the E";
}

function endGame(){

	/*
	Exercise 3&6:- Decides the winner of the Maze Game
	*/

    	/*if(flag){alert("Sorry, you lost... :[");
	}else{alert("You win! :]");}*/

	if (!flag) {
		$("status").textContent = "You win! :]";
    	}
}
