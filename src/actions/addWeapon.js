
function addWeapon(targetId) {
    console.log('addWeapon');
    if (cardTable[targetId].value > userStats.userAttack) {
        userStats.overallGold += userStats.userAttack;
        document.getElementById('gold-meter').innerHTML = userStats.overallGold;

        setAttack(cardTable[targetId].value);
    }
    move(targetId);
}
