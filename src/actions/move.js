function getMoveDirection(oldIndex, targetIndex) {
    const indexDiff = targetIndex - oldIndex;

    if (indexDiff === 1) {
        return 'right';
    } else if (indexDiff === -1) {
        return 'left';
    } else if (indexDiff === -3) {
        return 'up';
    } else if (indexDiff === 3) {
        return 'down';
    } else {
        console.error('getMoveDirection : Invalid directions');
    }
}

function moveRow(moveDirection, targetUserIndex, oldUserIndex) {
    const rowIndex = Math.floor(targetUserIndex / 3);
    const rowIndexes = [];
    for (i = 0; i < 3; i++) {
        rowIndexes.push((rowIndex * 3) + i);
    }
    if (moveDirection === 'right') {
        if ((oldUserIndex + 1) % 3 !== 1) {
            for (let i = 2; i >= 0; i--) {
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
        if ((oldUserIndex + 1) % 3 !== 0) {
            for (let i = 0; i <= 2; i++) {
                let cardIndex = rowIndexes[i];
                if (i === 2) {
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
    const columnIndex = (targetUserIndex % 3);
    if (moveDirection === 'down') {
        if (oldUserIndex > 2) {
            for (let i = 2; i >= 0; i--) {
                const cardIndex = (i * 3) + columnIndex;
                if (i === 0) {
                    cardTable[cardIndex] = createRandomCard();
                    renderField(cardIndex);
                } else {
                    if (targetUserIndex > cardIndex) {
                        cardTable[cardIndex] = cardTable[cardIndex - 3];
                        renderField(cardIndex);
                    }
                }
            }
        } else {
            cardTable[oldUserIndex] = createRandomCard();
            renderField(oldUserIndex);
        }
    } else if (moveDirection === 'up') {
        if (oldUserIndex < 7) {
            for (let i = 0; i <= 2; i++) {
                const cardIndex = (i * 3) + columnIndex;
                if (i === 2) {
                    cardTable[cardIndex] = createRandomCard();
                    renderField(cardIndex);
                } else {
                    if (targetUserIndex < cardIndex) {
                        cardTable[cardIndex] = cardTable[cardIndex + 3];
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
