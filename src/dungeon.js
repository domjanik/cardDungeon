const userStats = {
    overallGold: 0,
    currentHP: 0,
    maxHP: 10,
    userAttack: 0
};

let cardAmount = 9;
let rowLength = Math.ceil(Math.sqrt(cardAmount));
let cardId = 0;
let cardTable = [];


function createRandomCard() {
    let rand = Math.floor((Math.random() % 100) * 100) + 1;
    let cardType = chanceTable.find((cardType) => {
        return cardType.rangeStart <= rand && rand <= cardType.rangeEnd
    });
    let value = Math.floor((Math.random() % 10) * 10) + 1;
    cardId++;
    return new Card(cardTypes[cardType.name], value, cardId);
}


function useCard(targetId) {
    if (userStats.currentHP > 0 && isFieldAvailable(targetId)) {
        performCardAction(targetId);
    } else {
        console.error('Card not available!')
    }
}

function performCardAction(targetId) {
    if(cardTable[targetId].action) {
        cardTable[targetId].action(targetId)
    } else {
        console.error('Error in actions');
    }
}


function initGame() {
    setGold(0);
    setHP(10);
    setAttack(0);
    generateMap();
}

function restart() {
    clearMap();
    initGame();
}

function gameOver() {
    console.log("You loose");
    alert('You loose');
}

document.onkeydown = function (e) {
    let targetId = getCurrentUserPosition();
    if(e.keyCode === 37) {
        targetId -= 1;
    } else if (e.keyCode === 40) {
        targetId += rowLength;
    } else if (e.keyCode === 39) {
        targetId += 1;
    } else if (e.keyCode === 38) {
        targetId -= rowLength;
    } else {
        return;
    }
    useCard(targetId)
};
