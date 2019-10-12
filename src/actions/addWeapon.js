function setAttack(value) {
    if(value > userStats.userAttack) {
        userStats.overallGold += userStats.userAttack;
        userStats.userAttack = value;
        document.getElementById('user-attack').innerHTML = value;
        document.getElementById('gold-meter').innerHTML = userStats.overallGold;
    }
}

function addWeapon(targetId) {
    console.log('addWeapon');
    setAttack(cardTable[targetId].value);
    move(targetId);
}
