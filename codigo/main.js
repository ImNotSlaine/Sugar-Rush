
// Clear function
var number = random();

function random(){
    return Math.floor(Math.random() * 4);
}

function clear(){
    while (document.body.firstChild){
        document.body.removeChild(document.body.firstChild);
    }
}

// Intro function
function intro(){
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
var round = 1;
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

function desenrrollaGame(){
    var winCondition = false;

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
    des.setAttribute('onclick', 'nextGame();');
}

function nextGame(){
    round ++;

    play();
}

window.onload = intro;
