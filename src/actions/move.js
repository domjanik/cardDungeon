function move(targetId) {
    console.log('move');
    const userIndex = getCurrentUserPosition();
    cardTable[targetId] = {...cardTable[userIndex]};
    renderField(targetId);
    cardTable[userIndex] = createRandomCard();
    renderField(userIndex);
}