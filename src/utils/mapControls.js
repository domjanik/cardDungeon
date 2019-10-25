function generateMap() {
    cardTable = [];
    document.getElementById('game-table').style.width = `${rowLength * 90}px`;
    for (var i = 0; i < cardAmount; i++) {
        createCardField(i, cardAmount);
        cardTable.push(null);
        if (i !== Math.floor(cardAmount / 2)) {
            cardTable[i] = createRandomCard();
        } else {
            cardTable[i] = new Card(cardTypes.USER);
        }
        renderField(i);
    }
}

function clearMap() {
    document.getElementById("card-area").innerHTML = "";
}

function createCardField(id, targetAmount) {
    var node = document.createElement("div");
    node.classList.add('card');
    node.style.flex = `1 1 ${100 / rowLength - 3}%`;
    node.id = id;
    node.addEventListener("click", function () {
            useCard(id)
        }
    );
    node.innerHTML = 'test';
    document.getElementById("card-area").appendChild(node);
}

function renderField(targetId) {
    let elem = document.getElementById(targetId);
    elem.innerHTML = `<div class="icon-${cardTable[targetId].icon}"></div> ${cardTable[targetId].value ? cardTable[targetId].value : ' '}`
    if (cardTable[targetId].name === 'user') {
        elem.style.backgroundColor = "#FBEB04";
    } else {
        elem.style.backgroundColor = "transparent";
    }
}

function isFieldAvailable(targetId) {
    let userPosition = getCurrentUserPosition();
    return (targetId === userPosition + 1 || targetId === userPosition - 1 || targetId === userPosition + rowLength || targetId === userPosition - rowLength)
}

function getCurrentUserPosition() {
    return cardTable.indexOf(cardTable.find((card) => card ? card.name === cardTypes.USER.name : false));
}
