var flag = false;
var istart = false;

window.onload = function() {
    	//Exercise 1:- $("boundary1").onmouseover = overLine;
    
	$("start").onclick = startGame; //To begin the game
    	$("end").onmouseover = endGame; //To end the game

	//$("body:not(div#maze)").onmouseover = cheatGame;
	//$("body").children().not("#maze").onmouseover = cheatGame;
	//$(document.body).contents().not('#maze').onmouseover = cheatGame;
	//$("body *").not("#maze").onmouseover = cheatGame;

	/**/
	$(document.body).onmousemove = function(e) {
  		//Prints out current mouse position (Co-ordinates in browser window)
		console.log('mouse X coord: ' + e.clientX);
  		console.log('mouse Y coord: ' + e.clientY);

  		//The maze dimensions
  		var mz = $$("div#maze");
  		var mzW = mz[0].offsetWidth;
  		var mzH = mz[0].offsetHeight;
  		var mzSX = mz[0].offsetLeft;
  		var mzSY = mz[0].offsetTop;

  		//Calculate the end points of the maze div
  		var mzEX = parseInt(mzSX) + parseInt(mzW);
  		var mzEY = parseInt(mzSY) + parseInt(mzH);

  		console.log('Maze start X coord: ' + mzSX);
  		console.log('Maze start Y coord: ' + mzSY);

  		console.log('Maze end X coord: ' + mzEX);
  		console.log('Maze end Y coord: ' + mzEY);

  		// Cheating defined only if the player has started the game
  		if (istart){
      			// check if the mouse pointer is outside the maze
      			if (e.clientX < mzSX || e.clientY < mzSY 
			||e.clientY > mzEY || e.clientX > mzEX) {
          			cheatGame();
      			}
  		}
	}

	/*
	Exercise 2:- Array list >> Contents: Div containers [Id maze; Class boundary]
	Eventhandler >> Listens to elements in array list (If player's mouse move into any of these elements)
	*/

	var borders = $$("div#maze div.boundary");
	for(var k = 0; k < borders.length; k++){
		borders[k].onmouseover = overLine;
	}
}

function overLine() {
	//Exercise 1:- $("boundary1").addClassName("youlose");
	
	/*
	Exercise 2:- Array list >> Contents: Div containers [Id maze; Class boundary]
	Response >> Turns the background of all elements to Red
	*/

	flag = true; //Player loses the game
	istart = false; 

	$("status").textContent = "You lose! :(";

	var borders = $$("div#maze div.boundary");
	for(var k = 0; k < borders.length; k++){
		borders[k].addClassName("youlose");
	}
}

function startGame(){
	flag = false;
	istart = true;	

	$("status").textContent = "Let's do this! :D Find the E";

	/*
	Exercise 4:- Array list >> Contents: Div containers [Id maze; Class boundary]
	Response >> Resets background colour
	*/

	var borders = $$("div#maze div.boundary");
	for (var i = 0; i < borders.length; i++) {
        	borders[i].removeClassName("youlose");}
}

function cheatGame(){
	if(istart){
		overLine();
		$("status").textContent = "You cheater!!! >_<";
		
	}	
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
