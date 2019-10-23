const cardTypes = {
    USER: {
        name: 'user',
        color: '#bbbbbb',
        action: wait,
        icon: 'knight'
    },
    BLANK: {
        name: 'blank',
        color: '#ff99cc',
        action: move,
        icon: ''
    },
    SWORD: {
        name: 'sword',
        color: '#006666',
        action: addWeapon,
        icon: 'sword'
    },
    GOLD: {
        name: 'gold',
        color: '#eeee00',
        action: addGold,
        icon: 'coin'
    },
    MONSTER: {
        name: 'monster',
        color: '#ff3333',
        action: attack,
        icon: 'spooky'
    },
    POTION: {
        name: 'potion',
        color: '#008800',
        action: addHP,
        icon: 'love-potion'
    },
    CHEST: {
        name: 'chest',
        color: '#0088ff',
        action: openChest,
        icon: 'treasure'
    }
};
