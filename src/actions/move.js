function getMoveDirection(oldIndex, targetIndex) {
    const indexDiff = targetIndex - oldIndex;

    if (indexDiff === 1) {
        return 'right';
    } else if (indexDiff === -1) {
        return 'left';
    } else if (indexDiff === -rowLength) {
        return 'up';
    } else if (indexDiff === rowLength) {
        return 'down';
    } else {
        console.error('getMoveDirection : Invalid directions');
    }
}

function moveRow(moveDirection, targetUserIndex, oldUserIndex) {
    const rowIndex = Math.floor(targetUserIndex / rowLength);
    const rowIndexes = [];
    for (i = 0; i < rowLength; i++) {
        rowIndexes.push((rowIndex * rowLength) + i);
    }
    if (moveDirection === 'right') {
        if ((oldUserIndex + 1) % rowLength !== 1) {
            for (let i = (rowLength - 1); i >= 0; i--) {
                let cardIndex = rowIndexes[i];
                if (i === 0) {
                    cardTable[cardIndex] = createRandomCard();
                    renderField(cardIndex);
                } else if (targetUserIndex > cardIndex) {
                    cardTable[cardIndex] = cardTable[cardIndex - 1];
                    renderField(cardIndex);
                }
            }
        } else {
            cardTable[oldUserIndex] = createRandomCard();
            renderField(oldUserIndex);
        }
    } else if (moveDirection === 'left') {
        if ((oldUserIndex + 1) % rowLength !== 0) {
            for (let i = 0; i <= (rowLength - 1); i++) {
                let cardIndex = rowIndexes[i];
                if (i === (rowLength - 1)) {
                    cardTable[cardIndex] = createRandomCard();
                    renderField(cardIndex);
                } else if (targetUserIndex < cardIndex) {
                    cardTable[cardIndex] = cardTable[cardIndex + 1];
                    renderField(cardIndex);
                }
            }
        } else {
            cardTable[oldUserIndex] = createRandomCard();
            renderField(oldUserIndex);
        }
    }
}

function moveColumn(moveDirection, targetUserIndex, oldUserIndex) {
    const columnIndex = (targetUserIndex % rowLength);
    if (moveDirection === 'down') {
        if (oldUserIndex > (rowLength - 1)) {
            for (let i = (rowLength - 1); i >= 0; i--) {
                const cardIndex = (i * rowLength) + columnIndex;
                if (i === 0) {
                    cardTable[cardIndex] = createRandomCard();
                    renderField(cardIndex);
                } else {
                    if (targetUserIndex > cardIndex) {
                        cardTable[cardIndex] = cardTable[cardIndex - rowLength];
                        renderField(cardIndex);
                    }
                }
            }
        } else {
            cardTable[oldUserIndex] = createRandomCard();
            renderField(oldUserIndex);
        }
    } else if (moveDirection === 'up') {
        if (oldUserIndex < (cardAmount - rowLength + 1)) {
            for (let i = 0; i <= (rowLength - 1); i++) {
                const cardIndex = (i * rowLength) + columnIndex;
                if (i === (rowLength - 1)) {
                    cardTable[cardIndex] = createRandomCard();
                    renderField(cardIndex);
                } else {
                    if (targetUserIndex < cardIndex) {
                        cardTable[cardIndex] = cardTable[cardIndex + rowLength];
                        renderField(cardIndex);
                    }
                }
            }
        } else {
            cardTable[oldUserIndex] = createRandomCard();
            renderField(oldUserIndex);
        }
    }
}

function moveUserRow(oldUserIndex, targetUserIndex) {

    const moveDirection = getMoveDirection(oldUserIndex, targetUserIndex);
    console.log(moveDirection);
    if (moveDirection === 'left' || moveDirection === 'right') {
        moveRow(moveDirection, targetUserIndex, oldUserIndex);
    } else if (moveDirection === 'up' || moveDirection === 'down') {
        moveColumn(moveDirection, targetUserIndex, oldUserIndex);
    } else {
        console.error('moveUserRow : Invalid direction');
    }

}

function move(targetId) {
    const userIndex = getCurrentUserPosition();
    cardTable[targetId] = {...cardTable[userIndex]};
    renderField(targetId);
    moveUserRow(userIndex, targetId)
}
