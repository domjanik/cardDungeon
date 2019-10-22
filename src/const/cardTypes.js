const cardTypes = {
    USER: {
        name: 'user',
        color: '#bbbbbb',
        action: wait
    },
    BLANK: {
        name: 'Blank',
        color: '#ff99cc',
        action: move
    },
    SWORD: {
        name: 'sword',
        color: '#006666',
        action: addWeapon
    },
    GOLD: {
        name: 'gold',
        color: '#eeee00',
        action: addGold
    },
    MONSTER: {
        name: 'monster',
        color: '#ff3333',
        action: attack
    },
    POTION: {
        name: 'potion',
        color: '#008800',
        action: addHP
    },
    CHEST: {
        name: 'chest',
        color: '#0088ff',
        action: openChest
    }
};
