function addGold(targetId) {
    userStats.overallGold += cardTable[targetId].value
    console.log(`current gold : ${userStats.overallGold}`);
    move(targetId);
}

