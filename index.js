// const boxOne = document.getElementById('box-one');


let player = "X";
let filledBoxes = {
    box1 : false,
    box2 : false,
    box3 : false,
    box4 : false,
    box5 : false,
    box6 : false,
    box7 : false,
    box8 : false,
    box9 : false,

}

let playersInBoxes = {
    box1 : "",
    box2 : "",
    box3 : "",
    box4 : "",
    box5 : "",
    box6 : "",
    box7 : "",
    box8 : "",
    box9 : "",
}

function clearGamr() {
    location.reload();
}

function checkWinner () {
    console.log('checking winner');
    if ((playersInBoxes.box1 === 'X' && playersInBoxes.box2 === 'X' && playersInBoxes.box3 === 'X') ||
         (playersInBoxes.box4 === 'X' && playersInBoxes.box5 === 'X' && playersInBoxes.box6 === 'X') ||
         (playersInBoxes.box7 === 'X' && playersInBoxes.box8 === 'X' && playersInBoxes.box9 === 'X') ||
         (playersInBoxes.box1 === 'X' && playersInBoxes.box4 === 'X' && playersInBoxes.box7 === 'X') ||
         (playersInBoxes.box2 === 'X' && playersInBoxes.box5 === 'X' && playersInBoxes.box8 === 'X') ||
         (playersInBoxes.box3 === 'X' && playersInBoxes.box6 === 'X' && playersInBoxes.box9 === 'X') ||
         (playersInBoxes.box1 === 'X' && playersInBoxes.box5 === 'X' && playersInBoxes.box9 === 'X') ||
         (playersInBoxes.box3 === 'X' && playersInBoxes.box5 === 'X' && playersInBoxes.box7 === 'X')
         ) 
         {
             window.alert('winner X');
             clearGamr();
    } else if ((playersInBoxes.box4 === 'O' && playersInBoxes.box5 === 'O' && playersInBoxes.box6 === 'O') ||
    (playersInBoxes.box1 === 'O' && playersInBoxes.box2 === 'O' && playersInBoxes.box3 === 'O') ||
    (playersInBoxes.box7 === 'O' && playersInBoxes.box8 === 'O' && playersInBoxes.box9 === 'O') ||
    (playersInBoxes.box1 === 'O' && playersInBoxes.box4 === 'O' && playersInBoxes.box7 === 'O') ||
    (playersInBoxes.box2 === 'O' && playersInBoxes.box5 === 'O' && playersInBoxes.box8 === 'O') ||
    (playersInBoxes.box3 === 'O' && playersInBoxes.box6 === 'O' && playersInBoxes.box9 === 'O') ||
    (playersInBoxes.box1 === 'O' && playersInBoxes.box5 === 'O' && playersInBoxes.box9 === 'O') ||
    (playersInBoxes.box3 === 'O' && playersInBoxes.box5 === 'O' && playersInBoxes.box7 === 'O')) 
    {
        window.alert('winner O');
        clearGamr();
    }
}



function fillBox(player, boxId) {

    
    // console.log('clicked');
    // boxOne.innerHTML = "one";
    const getBox = document.getElementById(boxId);
    getBox.textContent = player; 
    playersInBoxes[boxId] = player;
    checkWinner();
}

function clickBox(boxId) {

    const getH3 = document.getElementById('nowPlaying');


    // console.log(filledBoxes[boxId]);
    if (filledBoxes[boxId] === false) {
        console.log('found a one false');

        fillBox(player, boxId);
             if (player==='X') {
                player = 'O';
                getH3.textContent = player;
            } else {
                player = 'X';
                getH3.textContent = player;
             }
             filledBoxes[boxId] = true;

    }

    // console.log(boxId);
    
}

