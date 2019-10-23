const cardTypes = {
    USER: {
        name: 'user',
        action: wait,
        icon: 'knight'
    },
    BLANK: {
        name: 'blank',
        action: move,
        icon: ''
    },
    SWORD: {
        name: 'sword',
        action: addWeapon,
        icon: 'sword'
    },
    GOLD: {
        name: 'gold',
        action: addGold,
        icon: 'coin'
    },
    MONSTER: {
        name: 'monster',
        action: attack,
        icon: 'spooky'
    },
    POTION: {
        name: 'potion',
        action: addHP,
        icon: 'love-potion'
    },
    CHEST: {
        name: 'chest',
        action: openChest,
        icon: 'treasure'
    }
};
