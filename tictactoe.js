		var oToMove = true; // true for O to move, false for X to move
    	var pushed = 0; // counter for number of buttons pushed
    	var gameOver = false; // used to stop game once there is a winner
    	
    	// contains territory/buttons held - used for checking win states
    	var os = [];
    	var xs = [];
    	
    	////////////////////////////////////////////////
    	
    	// triggered when button is pressed
    	function buttonPress(buttonID) {
    		//document.getElementById("messageField").innerHTML = "Button pressed: " + buttonID;
    		
    		//Check button not already pressed or that game is over
    		if (document.getElementById("b"+buttonID).value == " " && gameOver == false) { 
    			
    			if (oToMove == true) {
    		
    				document.getElementById("b"+buttonID).value = "O"; // button shows "O"
    				pushed++; 
    				os.push(buttonID); // add button to territory held
    				os.sort();
    				oToMove = false; // switch to X's turn
    				document.getElementById("messageField").innerHTML = "X to move.";
    				//document.getElementById("oField").innerHTML = "O holds " + os;
    				
    				checkForWinner("O", os);
    			
    			} else {
    		
    				document.getElementById("b"+buttonID).value = "X"; // button shows "X"
    				pushed++;
    				xs.push(buttonID); // add button to territory held
    				xs.sort();
    				oToMove = true; // switch to O's turn
    				document.getElementById("messageField").innerHTML = "O to move.";
    				//document.getElementById("xField").innerHTML = "X holds " + xs;
    			
    				checkForWinner("X", xs);
    				
    			};
    			
    			//document.getElementById("pushed").innerHTML = "Pushed: "+ pushed;
    		
    		};
    			
    	};
    	
    	////////////////////////////////////////////////
    	
    	// resets game back to start - O always moves first
    	function newGame() {
    	
    		document.getElementById("messageField").innerHTML = "New game started. O to move.";
    		//document.getElementById("miscField").innerHTML = " ";
    		//document.getElementById("pushed").innerHTML = " ";
    		//document.getElementById("oField").innerHTML = " ";
    		//document.getElementById("xField").innerHTML = " ";
    		//document.getElementById("oStringField").innerHTML = " ";
    		//document.getElementById("xStringField").innerHTML = " ";
    		
    		// reset all relevant variables
    		oToMove = true; // O always starts
    		pushed = 0;
    		os = [];
    		xs = [];
    		gameOver = false;
    		
    		// clear all buttons
    		for(i=1; i<10; i++) { 
    			document.getElementById("b"+i).value = " ";
    		};
    		
    	};
    	
    	////////////////////////////////////////////////
    		
    	function checkForWinner(player, territories) {

    		var winStatesArrays = [[1,2,3], [4,5,6], [7,8,9],	// rows
    			[1,4,7], [2,5,8], [3,6,9],						// columns
    			[1,5,9], [3,5,7]];								// diagonals
    			
    		// 3 matches means winner
    		var minMatches = 3;
    		var actualMatches = [0,0,0,0,0,0,0,0]; // 8 win states could possibly match
    		
    		// compare each element in win states arrays with territories arrays
    		for (i=0; i<winStatesArrays.length; i++) {
    		
    			for (j=0; j<winStatesArrays[i].length; j++) {
    				
    				for (k=0; k<territories.length; k++) {
    				
    					if (winStatesArrays[i][j] == territories[k]) {
    						actualMatches[i]++;
    					};
    				
    				};
    				
    			};
    			
    			if (actualMatches[i] >= minMatches) {
    				document.getElementById("messageField").innerHTML = "Winner is " + 
    					player + "!";
    				gameOver = true;
    				break;
    			} else if (pushed == 9) {
    				document.getElementById("messageField").innerHTML = "Draw!";
    			};
    		
    		};
    		
    		//document.getElementById("miscField").innerHTML += "Actual matches for " + 
    		//	player + " are " + actualMatches + "<br>";
    		
    		/*if (actualMatches[i] >= minMatches) {
    			document.getElementById("messageField").innerHTML = "Winner is " + player;
    			gameOver = true;
    		};*/
    	
    	};