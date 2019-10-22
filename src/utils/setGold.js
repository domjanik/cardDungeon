function setGold(amount) {
    document.getElementById('gold-meter').innerHTML = amount;
    userStats.overallGold = amount;
}
