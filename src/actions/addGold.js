function addGold(targetId) {
    setGold(userStats.overallGold + cardTable[targetId].value);
    move(targetId);
}

