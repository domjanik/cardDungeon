function addHP(targetId) {
    if(userStats.currentHP + cardTable[targetId].value <= userStats.maxHP) {
        setHP(userStats.currentHP + cardTable[targetId].value);
    } else {
        setHP(userStats.maxHP);
    }
    move(targetId);
}
