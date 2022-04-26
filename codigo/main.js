
// Minigame Number Selector
var number = random();

// Round
var round = 1;

// Random 1-4 numbers
function random(){
    return Math.floor(Math.random() * 4);
}

// Clear function
function clear(){
    while (document.body.firstChild){
        document.body.removeChild(document.body.firstChild);
    }
}

// Intro function
function intro(){
    round = 1;
    //Parts of the page
    var page = document.body;

    var menu = document.createElement('div');
    menu.setAttribute('class', 'introMenu');

    var title = document.createElement('img');
    title.setAttribute('src', 'img/ui/title.gif');
    title.setAttribute('class', 'title');

    var play = document.createElement('img');
    play.setAttribute('src', 'img/ui/play.gif');
    play.setAttribute('onclick', 'play()');

    var minigames = document.createElement('img');
    minigames.setAttribute('src', 'img/ui/minigames.gif');

    var options = document.createElement('img');
    options.setAttribute('src', 'img/ui/options.gif');

    //Appends all elements
    page.appendChild(menu);
    menu.appendChild(title);
    menu.appendChild(play);
    menu.appendChild(minigames);
    menu.appendChild(options);

}

// Start game function
function play(){
    var page = document.body;

    clear();

    var ingame = document.createElement('div');
    ingame.setAttribute('class', 'inGame');

    var scoreDiv = document.createElement('div');
    scoreDiv.setAttribute('class', 'score');

    var score = document.createElement('img');
    score.setAttribute('src', 'img/score/'+round+'.png');

    var pausebtnDiv = document.createElement('div');
    pausebtnDiv.setAttribute('class', 'pauseBtn');

    var pausebtn = document.createElement('img');
    pausebtn.setAttribute('src', 'img/ui/pause.png');
    pausebtn.setAttribute('onclick', 'pause();')

    var gameDiv = document.createElement('div');
    gameDiv.setAttribute('class', 'game');
    gameDiv.setAttribute('id', 'game');

    page.appendChild(ingame);
    ingame.appendChild(scoreDiv);
    ingame.appendChild(pausebtnDiv);
    ingame.appendChild(gameDiv);
    scoreDiv.appendChild(score);
    pausebtnDiv.appendChild(pausebtn);

    selectGame();

}

// Pause function
function pause(){
    var page = document.body;

    var pauseDiv = document.createElement('div');
    pauseDiv.setAttribute('class', 'pauseBox');
    pauseDiv.setAttribute('id', 'pauseBox');

    var continueBtn = document.createElement('img');
    continueBtn.setAttribute('src', 'img/ui/continue.png');
    continueBtn.setAttribute('onclick', 'closeMenu();')

    var restartBtn = document.createElement('img');
    restartBtn.setAttribute('src', 'img/ui/restart.png');
    restartBtn.setAttribute('onclick', 'restart();')

    var toMenuBtn = document.createElement('img');
    toMenuBtn.setAttribute('src', 'img/ui/back.png');

    page.appendChild(pauseDiv);
    pauseDiv.appendChild(continueBtn);
    pauseDiv.appendChild(restartBtn);
    pauseDiv.appendChild(toMenuBtn);
}

// Continue function
function closeMenu(){
    var pauseDiv = document.getElementById('pauseBox');
    document.body.removeChild(pauseDiv);
}

// Restart function
function restart(){
    round = 1;
    play();
}

// SELECT GAME
function selectGame(){
    switch (number){
        case 1:
            console.log(number + "caso 1");
            desenrrollaGame();
            break;
        case 2:
            console.log(number + "caso 2");
            desenrrollaGame();
            break;
        case 3:
            console.log(number + "caso 3");
            desenrrollaGame();
            break;
        default:
            console.log(number + "caso pred");
            desenrrollaGame();
            break;
        }
}
// DESENRROLLA
function desenrrollaGame(){
    var gameDiv = document.getElementById('game');
    var des = document.createElement('img');
    des.setAttribute('src', 'img/des/initial.png');
    des.setAttribute('id', 'gamePlaying');
    des.setAttribute('onclick', 'firstDes();')
    gameDiv.appendChild(des);
}
    function firstDes(){
        var des = document.getElementById('gamePlaying');
        des.setAttribute('src', 'img/des/first.gif');
        des.setAttribute('onclick', 'secondDes();');
    }
    function secondDes(){
        var des = document.getElementById('gamePlaying');
        des.setAttribute('src', 'img/des/second.gif');
        des.setAttribute('onclick', 'thirdDes();');
    }
    function thirdDes(){
        var des = document.getElementById('gamePlaying');
        des.setAttribute('src', 'img/des/third.gif');
        setTimeout(() => {nextGame();}, 2000);
    }

//RETUERCE
function retuerceGame(){
    var gameDiv = document.getElementById('game');
    var des = document.createElement('img');
    des.setAttribute('src', 'img/ret/initial.png');
    des.setAttribute('id', 'gamePlaying');
    des.setAttribute('onclick', 'firstRet();')
    gameDiv.appendChild(des);
}
    function firstRet(){
        var des = document.getElementById('gamePlaying');
        des.setAttribute('src', 'img/ret/first.gif');
        des.setAttribute('onclick', 'secondRet();');
    }
    function secondRet(){
        var des = document.getElementById('gamePlaying');
        des.setAttribute('src', 'img/ret/second.gif');
        des.setAttribute('onclick', 'thirdRet();');
    }
    function thirdRet(){
        var des = document.getElementById('gamePlaying');
        des.setAttribute('src', 'img/ret/third.gif');
        des.setAttribute('onclick', 'fourthRet');
    }
    function fourthRet(){
        var des = document.getElementById('gamePlaying');
        des.setAttribute('src', 'img/ret/third.gif');
        setTimeout(() => {nextGame();}, 2000);
    }

// NEXT GAME
function nextGame(){
    round ++;
    play();
}

window.onload = intro;
