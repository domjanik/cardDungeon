function attack(targetId) {
    console.log('attack');

    const card = cardTable[targetId];
    if(userStats.userAttack) {
        if(userStats.userAttack > card.value) {
            let value = Math.floor((Math.random() % card.value) * card.value) + 1;
            cardId++;
            setAttack(userStats.userAttack - card.value);
            cardTable[targetId] = new Card(3, value, cardId);
            renderField(targetId);
        } else {
            card.value -= userStats.userAttack;
            if(card.value === 0) {
                cardId++;
                cardTable[targetId] = new Card(3, card.value, cardId);
            }
            setAttack(0);
            renderField(targetId);
        }
    } else {
        userStats.currentHP -= card.value;
        let elemHp = document.getElementById('user-health');
        elemHp.innerHTML = userStats.currentHP;

        if(card.value < userStats.currentHP) {
            move(targetId);
        } else {
            gameOver();
        }
    }
}
