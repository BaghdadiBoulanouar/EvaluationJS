'use strict';

var xWinner = 0;
var oWinner = 0;
var turnNumber = 0;

/**
 * Morpion game.
 * @constructor
 */

var MyMorpionXO = function MyMorpionXO(){
}

/**
 * Configure board game with size, font setting and display it.
 */

MyMorpionXO.prototype.game = function(){
    var body = document.querySelector('body');
    var board = document.createElement('table');
    board.style.border = '5px solid green'
    for(var i = 1; i <= 3; i++){
        var board_row = document.createElement('tr');
        for(var j = 1; j <= 3; j++){   
            var board_case = document.createElement('td');
            board_case.setAttribute('class', 'board-case');
            board_case.style.border = '5px solid black';
            board_case.style.width = '100px';
            board_case.style.height = '100px';
            board_case.style.textAlign = 'center';
            board_case.style.fontSize = '4.5em';
            board_case.style.fontFamily = 'Comic Sans MS';
            board_row.appendChild(board_case);
        }board.appendChild(board_row);
    }body.appendChild(board);

    var cases = document.querySelectorAll('.board-case');
    cases.forEach(el => el.addEventListener ('click', event =>{
        if(turnNumber % 2 == 0){
           if(!el.textContent) 
           el.textContent = 'X';
           el.style.color = "blue" 
        }else{
           if(!el.textContent) 
           el.textContent = 'O';
           el.style.color = "red" 
        }
        turnNumber++;
        this.isWon();
    }));
   
}

/**
 * Check if then game was win by a player
 */

MyMorpionXO.prototype.isWon = function(){
    var cases = document.querySelectorAll('.board-case');

    if(cases[0].textContent !== '' && cases[0].textContent == cases[1].textContent && cases[1].textContent == cases[2].textContent){
        this.displayWinner(cases[0].textContent);
    }
    else if(cases[3].textContent !== '' && cases[3].textContent == cases[4].textContent && cases[4].textContent == cases[5].textContent){
        this.displayWinner(cases[3].textContent);
    }
    else if(cases[6].textContent !== '' && cases[6].textContent == cases[7].textContent && cases[7].textContent == cases[8].textContent){
        this.displayWinner(cases[6].textContent);
    }
    else if(cases[0].textContent !== '' && cases[0].textContent == cases[3].textContent && cases[3].textContent == cases[6].textContent){
        this.displayWinner(cases[0].textContent);
    }
    else if(cases[1].textContent !== '' && cases[1].textContent == cases[4].textContent && cases[4].textContent == cases[7].textContent){
        this.displayWinner(cases[1].textContent);
    }
    else if(cases[2].textContent !== '' && cases[2].textContent == cases[5].textContent && cases[5].textContent == cases[8].textContent){
        this.displayWinner(cases[2].textContent);
    }
    else if(cases[0].textContent !== '' && cases[0].textContent == cases[4].textContent && cases[4].textContent == cases[8].textContent){
        this.displayWinner(cases[0].textContent);
    }
    else if(cases[2].textContent !== '' && cases[2].textContent == cases[4].textContent && cases[4].textContent == cases[6].textContent){
        this.displayWinner(cases[2].textContent);
    }
    else if(cases[0].textContent !== '' && cases[1].textContent !== '' && cases[2].textContent !== '' && cases[3].textContent !== '' && cases[4].textContent !== '' && cases[5].textContent !== '' && cases[6].textContent !== '' && cases[7].textContent !== '' && cases[8].textContent !== ''){
        this.displayWinner();
    }

}

/**
 * Display an alert with the player was won the party !
 */

MyMorpionXO.prototype.displayWinner = function(winner){

    if(winner === undefined){
        alert('Match nul! Nouveau round.');
    }
    if(winner === 'X'){
        alert('Bravo ' + winner +', tu as gagné cette manche.');
        xWinner++;
        if(xWinner >= 3){
            alert('Bravo ' + winner +', tu as gagné les trois manches et tu remportes donc la partie !');
        xWinner = 0;
        oWinner = 0;
        }
    }
    if(winner === 'O'){
        alert('Bravo ' + winner +', tu as gagné cette manche.');
        oWinner++;
        if(oWinner >= 3){
            alert('Bravo ' + winner +', tu as gagné les trois manches et tu remportes donc la partie !');
        xWinner = 0;
        oWinner = 0;
        }
    }

    var cases = document.querySelectorAll('.board-case');
    cases.forEach(el => el.textContent = '');
}

/**
 * Start the game
 */

MyMorpionXO.prototype.run = function(){
    if(!document.querySelector('table'))this.game();
}

var morpion = new MyMorpionXO();
morpion.run();