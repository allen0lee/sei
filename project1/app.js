var box1 = document.querySelector('.box-1');
var box2 = document.querySelector('.box-2');
var box3 = document.querySelector('.box-3');
var box4 = document.querySelector('.box-4');
var box5 = document.querySelector('.box-5');
var box6 = document.querySelector('.box-6');
var box7 = document.querySelector('.box-7');
var box8 = document.querySelector('.box-8');
var box9 = document.querySelector('.box-9');

var setFooter = document.querySelector('footer');
var startGameBtn = document.querySelector('.start-game-btn');

//var boxItems = document.querySelectorAll('.box');
var boxItems = null;

var color = 'red';
var nextColor = 'green';
var isWin = false;
var clickCounter = 0;


var judgeWin = function() {
    //win in first column   
    if((box1.style.backgroundColor == box2.style.backgroundColor) && 
        (box2.style.backgroundColor == box3.style.backgroundColor) && 
        (box1.style.backgroundColor != '')) {
        console.log(`${color} win`);
        isWin = true;
    }
    //win in second column
    if((box4.style.backgroundColor == box5.style.backgroundColor) && 
        (box5.style.backgroundColor == box6.style.backgroundColor) && 
        (box4.style.backgroundColor != '')) {
        console.log(`${color} win`);
        isWin = true;
    }
    //win in third column
    if((box7.style.backgroundColor == box8.style.backgroundColor) && 
        (box8.style.backgroundColor == box9.style.backgroundColor) && 
        (box7.style.backgroundColor != '')) {
        console.log(`${color} win`);
        isWin = true;
    }
    //win in first row
    if((box1.style.backgroundColor == box4.style.backgroundColor) && 
        (box4.style.backgroundColor == box7.style.backgroundColor) && 
        (box1.style.backgroundColor != '')) {
        console.log(`${color} win`);
        isWin = true;
    }
    //win in second row
    if((box2.style.backgroundColor == box5.style.backgroundColor) && 
        (box5.style.backgroundColor == box8.style.backgroundColor) && 
        (box2.style.backgroundColor != '')) {
        console.log(`${color} win`);
        isWin = true;
    }
    //win in third row
    if((box3.style.backgroundColor == box6.style.backgroundColor) && 
        (box6.style.backgroundColor == box9.style.backgroundColor) && 
        (box3.style.backgroundColor != '')) {
        console.log(`${color} win`);
        isWin = true;
    }
    //win in box 1, 5, 9
    if((box1.style.backgroundColor == box5.style.backgroundColor) && 
        (box5.style.backgroundColor == box9.style.backgroundColor) && 
        (box1.style.backgroundColor != '')) {
        console.log(`${color} win`);
        isWin = true;
    }
    //win in box 3, 5, 7
    if((box3.style.backgroundColor == box5.style.backgroundColor) && 
        (box5.style.backgroundColor == box7.style.backgroundColor) && 
        (box3.style.backgroundColor != '')) {
        console.log(`${color} win`);
        isWin = true;
    }
}

var handleClickBox = function(event) {
    if(nextColor == 'green') {
        event.target.style.backgroundColor = 'red'; //handle current color
        event.target.classList.add('clicked');

        color = 'red';
        nextColor = 'red';
    } else {
        event.target.style.backgroundColor = 'green';
        event.target.classList.add('clicked');

        color = 'green';
        nextColor = 'green';
    }

    clickCounter = clickCounter + 1;
    console.log(nextColor);
    console.log(clickCounter);
    if(isWin == false) {
        judgeWin();
    } 
    if(isWin == false && document.querySelectorAll('.clicked').length == boxItems.length) {
        setFooter.textContent = `tie game`;
        boxItems = null;
    }
    if(isWin == true) {
        //boxItems = null;
        setFooter.textContent = `${color} is winner`; 
        boxItems = null;
    }

    /*
    if (clickCounter == 9 && isWin == false) {
        //boxItems = null;
        //alert('tie game');
    }
    */
}

var handleStartGame = function() {
    if(boxItems == null) {
        boxItems = document.querySelectorAll('.box');
        boxItems.forEach(function(item) {
            item.addEventListener('click', handleClickBox);
        });
    }
}

/*
boxItems.forEach(function(item) {
    item.addEventListener('click', handleClickBox);
});
*/

startGameBtn.addEventListener('click', handleStartGame);


console.log('red is first to move');
//alert('red is first to move');







