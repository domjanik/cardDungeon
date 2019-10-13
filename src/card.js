class Card {
    constructor(type, value, id) {
        this.type = type;
        this.name = cardTypes[type];
        this.id = id;
        if (cardTypes[type] !== cardTypes[1]) {
            this.value = value
        }
        if(type === 0) {
            this.color = '#bbbbbb'
        } else if (type === 1) {
            this.color = '#ff99cc'
        } else if (type === 2) {
            this.color = '#006666';
        } else if (type === 3) {
            this.color = '#eeee00'
        } else if (type === 4) {
            this.color = '#ff3333'
        } else {
            this.color = '#ffffff';
        }
    }

    color = '';
    type = '';
    value = 0;
    name = '';
    id = 0;
}
