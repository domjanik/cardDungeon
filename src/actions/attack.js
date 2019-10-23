function attack(targetId) {
    console.log('attack');

    const card = cardTable[targetId];
    if(userStats.userAttack) {
        if(userStats.userAttack > card.value) {
            let value = Math.floor((Math.random() % card.value) * card.value) + 1;
            cardId++;
            setAttack(userStats.userAttack - card.value);
            cardTable[targetId] = new Card(cardTypes.GOLD, value, cardId);
            renderField(targetId);
        } else {
            card.value -= userStats.userAttack;
            if(card.value === 0) {
                cardId++;
                cardTable[targetId] = new Card(cardTypes.GOLD, card.initValue, cardId);
            }
            setAttack(0);
            renderField(targetId);
        }
    } else {
        if(card.value < userStats.currentHP) {
            setHP(userStats.currentHP - card.value);
            move(targetId);
        } else {
            setHP(userStats.currentHP - card.value);

            gameOver();
        }
    }
}
