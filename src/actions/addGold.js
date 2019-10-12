function setGold(amount) {
    document.getElementById('gold-meter').innerHTML = amount;
    userStats.overallGold += amount;
}

function addGold(targetId) {
    setGold(userStats.overallGold + cardTable[targetId].value);
    move(targetId);
}

