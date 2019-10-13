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

const cardTypes = {
    0: 'user',
    1: 'blank',
    2: 'sword',
    3: 'gold',
    4: 'monster'
};

function createRandomCard() {
    let cardType = Math.floor((Math.random() % 4) * 4) + 1;
    let value = Math.floor((Math.random() % 10) * 10) + 1;
    cardId++;
    return new Card(cardType, value, cardId);
}

function generateMap() {
    cardTable[4] = new Card(0);
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
    if (isFieldAvailable(targetId)) {
        performCardAction(targetId);
    }
}

function performCardAction(targetId) {
    switch (cardTable[targetId].type) {
        case 0:
            wait(targetId);
            break;
        case 1:
            move(targetId);
            break;
        case 2:
            addWeapon(targetId);
            break;
        case 3:
            addGold(targetId);
            break;
        case 4:
            attack(targetId);
            break;
        default:
            console.log('error');
            break;
    }
}

function isFieldAvailable(targetId) {
    let userPosition = getCurrentUserPosition();
    if (targetId === userPosition + 1 || targetId === userPosition - 1 || targetId === userPosition + 3 || targetId === userPosition - 3) {
        return true;
    }
    return false;
}

function getCurrentUserPosition() {
    return cardTable.indexOf(cardTable.find((card) => card ? card.name === cardTypes[0] : false));
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
