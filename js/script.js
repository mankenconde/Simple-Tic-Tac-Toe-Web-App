let origBoard;
		const winCombos=[
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[6,4,2]
        ]
        
        let checkForWin=[0,0,0,0,0,0,0,0,0];
        
		let player= false;

		function select(id){
			let selected_id= id;
			

			if(player%2==0){

			document.getElementById(selected_id).innerHTML="X"
			document.querySelector("table").style.fontSize="50px";

			}

			else{
				document.getElementById(selected_id).innerHTML="O";
			document.querySelector("table").style.fontSize="50px";

			}
					player=player+1;
				}


         const cells=document.querySelectorAll(".block");
    
         startGame();

        function startGame(){
			document.querySelector(".endGame").style.display="none";
			origBoard=Array.from(Array(9).keys());
			for(let i=0; i<cells.length; i++){
				cells[i].innerText='';
				cells[i].style.removeProperty('background-color');
                cells[i].addEventListener('click',turnClick,false);
                console.log(cells[i]);
			}
        }

		function turnClick(square){
			

			if(player==true){

			document.getElementById(square.target.id).innerHTML="X";
			// document.querySelector("table").style.fontSize="50px";
                checkForWin[square.target.id]=1;
			}

			else{
				document.getElementById(square.target.id).innerHTML="O";
			// document.querySelector("table").style.fontSize="50px";
                checkForWin[square.target.id]=2;
			}
            
            let win = Win();
            if(win != false){
                alert("Winner is Player " + win);
            }

            player=!player;
		}

        function Win(){
            
            for(let j=0; j<winCombos.length; j++){
                for(let k=0; k<1; k++){
                    if(checkForWin[winCombos[j][k]]==checkForWin[winCombos[j][k+1]] 
                        && checkForWin[winCombos[j][k+1]]==checkForWin[winCombos[j][k+2]] 
                        && checkForWin[winCombos[j][k]] != 0){
                        document.querySelector(".endGame").style.display="absolute";
                        return checkForWin[winCombos[j][k]];
                    }
                }
            }
            return false;
        }