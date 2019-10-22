const userStats = {
    overallGold: 0,
    currentHP: 10,
    userAttack: 0
}
let cardId = 0;

const cardTable = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
]


function createRandomCard() {
    let rand = Math.floor((Math.random() % 100) * 100) + 1;
    let cardType = chanceTable.find((cardType) => {
        return cardType.rangeStart <= rand && rand <= cardType.rangeEnd
    });
    let value = Math.floor((Math.random() % 10) * 10) + 1;
    cardId++;
    return new Card(cardTypes[cardType.name], value, cardId);
}

function generateMap() {
    cardTable[4] = new Card(cardTypes.USER);
    renderField(4);
    for (var i = 0; i < 9; i++) {
        if (!cardTable[i]) {
            const card = createRandomCard();
            cardTable[i] = card;
            renderField(i);
        }
    }

}

function renderField(targetId) {
    let elem = document.getElementById(targetId);
    elem.innerHTML = cardTable[targetId].name + (cardTable[targetId].type ? ' ' + cardTable[targetId].value + ' ' : '');
    elem.style.backgroundColor = cardTable[targetId].color;

}

function useCard(targetId) {
    if (userStats.currentHP > 0 && isFieldAvailable(targetId)) {
        performCardAction(targetId);
    }
}

function performCardAction(targetId) {
    if(cardTable[targetId].action) {
        cardTable[targetId].action(targetId)
    } else {
        console.log('ERROR IN ACTIONS');
    }
}

function isFieldAvailable(targetId) {
    let userPosition = getCurrentUserPosition();
    return (targetId === userPosition + 1 || targetId === userPosition - 1 || targetId === userPosition + 3 || targetId === userPosition - 3)
}

function getCurrentUserPosition() {
    return cardTable.indexOf(cardTable.find((card) => card ? card.name === cardTypes.USER.name : false));
}

function initGame() {
    setGold(0);
    let elemHp = document.getElementById('user-health');
    elemHp.innerHTML = userStats.currentHP;
    let elemAtk = document.getElementById('user-attack');
    elemAtk.innerHTML = userStats.userAttack;
    generateMap();
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
        targetId += 3;
    } else if (e.keyCode === 39) {
        targetId += 1;
    } else if (e.keyCode === 38) {
        targetId -= 3;
    } else {
        return;
    }
    useCard(targetId)
};
