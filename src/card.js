class Card {
    constructor(type, value) {
        this.type = type;
        this.name = cardTypes[type];
        this.value = value
    }
    type = '';
    value = 0;
    name = '';
}