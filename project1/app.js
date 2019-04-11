var box1 = document.querySelector('.box-1');
var box2 = document.querySelector('.box-2');
var box3 = document.querySelector('.box-3');
var box4 = document.querySelector('.box-4');
var box5 = document.querySelector('.box-5');
var box6 = document.querySelector('.box-6');
var box7 = document.querySelector('.box-7');
var box8 = document.querySelector('.box-8');
var box9 = document.querySelector('.box-9');

var setGameMessage = document.querySelector('.game-message');
//var startGameBtn = document.querySelector('.start-game-btn');

var boxItems = document.querySelectorAll('.box');

var currentMark = 'X';
var nextMark = 'O';

var isWin = false;
var clickCounter = 0;

/*
var getPlayerMark = function() {
    return currentMark;
}

var setPlayerMark = function(mark) {
    currentMark = mark;
}
*/

var judgeWin = function() {
    //win in first column   
    if((box1.value == box2.value) && (box2.value == box3.value) && (box1.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
        //win animation effect(css) goes here
        setTimeout(function() {
            box1.classList.add('win');
            box2.classList.add('win');
            box3.classList.add('win');
        }, 500);
    }
    //win in second column
    if((box4.value == box5.value) && (box5.value == box6.value) && (box4.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
        setTimeout(function() {
            box4.classList.add('win');
            box5.classList.add('win');
            box6.classList.add('win');
        }, 500);
    }
    //win in third column
    if((box7.value == box8.value) && (box8.value == box9.value) && (box7.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
        setTimeout(function() {
            box7.classList.add('win');
            box8.classList.add('win');
            box9.classList.add('win');
        }, 500);
    }
    //win in first row
    if((box1.value == box4.value) && (box4.value == box7.value) && (box1.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
        setTimeout(function() {
            box1.classList.add('win');
            box4.classList.add('win');
            box7.classList.add('win');
        }, 500);
    }
    //win in second row
    if((box2.value == box5.value) && (box5.value == box8.value) && (box2.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
        setTimeout(function() {
            box2.classList.add('win');
            box5.classList.add('win');
            box8.classList.add('win');
        }, 500);
    }
    //win in third row
    if((box3.value == box6.value) && (box6.value == box9.value) && (box3.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
        setTimeout(function() {
            box3.classList.add('win');
            box6.classList.add('win');
            box9.classList.add('win');
        }, 500);
    }
    //win in box 1, 5, 9
    if((box1.value == box5.value) && (box5.value == box9.value) && (box1.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
        setTimeout(function() {
            box1.classList.add('win');
            box5.classList.add('win');
            box9.classList.add('win');
        }, 500);
    }
    //win in box 3, 5, 7
    if((box3.value == box5.value) && (box5.value == box7.value) && (box3.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
        setTimeout(function() {
            box3.classList.add('win');
            box5.classList.add('win');
            box7.classList.add('win');
        }, 500);
    }
    
}

var handleClickBox = function(event) {
    if(nextMark == 'O') {
        if(!(event.target.classList.contains('clicked'))) {
            event.target.classList.add('clicked');
            if(!(event.target.classList.contains('x-clicked'))) { //prevent clicking an already clicked button
                event.target.classList.add('x-clicked');   //handle current mark
                event.target.value = 'X';
                currentMark = 'X';
                nextMark = 'X';
            }
        }
    } else {
        if(!(event.target.classList.contains('clicked'))) {
            event.target.classList.add('clicked');
            if((!event.target.classList.contains('o-clicked'))) {
                event.target.classList.add('o-clicked');
                event.target.value = 'O';
                currentMark = 'O';
                nextMark = 'O';
            }
        }
    }

    //clickCounter = clickCounter + 1;
    //console.log(clickCounter);

    if(isWin == false) {
        judgeWin();
    } 
    if(isWin == false && document.querySelectorAll('.clicked').length == boxItems.length) {
    //if(isWin == false && clickCounter == boxItems.length) {
        setTimeout(function() {
            setGameMessage.textContent = `Tie game.`;
        }, 1000);
        for(var i = 0; i < boxItems.length; i++) { // disable all boxes, make them not clickable
            boxItems[i].classList.add('clicked');
        }
    }
    if(isWin == true) {
        if(currentMark == 'X') {
            setTimeout(function() {
                setGameMessage.textContent = `Player 1 wins.`; 
            }, 1000);
        }
        if(currentMark == 'O') {
            setTimeout(function() {
                setGameMessage.textContent = `Player 2 wins.`; 
            }, 1000);
        }
        
        for(var i = 0; i < boxItems.length; i++) { // disable all boxes, make them not clickable
           boxItems[i].classList.add('clicked');
        }
    }
}

/*
//only enables box 1-9 clickable after clicking "Start"
var handleStartGame = function() {
    var boxItems = document.querySelectorAll('.box');
    boxItems.forEach(function(item) {
        item.addEventListener('click', handleClickBox);
    });  
}
*/

//startGameBtn.addEventListener('click', handleStartGame);

boxItems.forEach(function(item) {
    item.addEventListener('click', handleClickBox);
});









