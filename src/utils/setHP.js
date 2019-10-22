function setHP(value) {
    userStats.currentHP = value;
    document.getElementById('user-health').innerHTML = userStats.currentHP;
}
