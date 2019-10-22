function openChest(targetId) {
    console.log('openChest');

    const card = cardTable[targetId];
    const contentType = Math.ceil(Math.random() % 3 * 3);
    switch(contentType) {
        case 1:
            cardTable[targetId] = new Card(cardTypes.GOLD, 5, cardId);
            renderField(targetId);
            break;
        case 2:
            cardTable[targetId] = new Card(cardTypes.SWORD, 5, cardId);
            renderField(targetId);
            break;
        case 3:
            cardTable[targetId] = new Card(cardTypes.POTION, 5, cardId);
            renderField(targetId);
            break;
        default:
            console.log('Error');
    }
}
