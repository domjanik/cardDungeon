class Card {
    constructor(type, value, id) {
        this.type = type;
        this.name = cardTypes[type];
        this.id = id;
        if (cardTypes[type] !== cardTypes[1]) {
            this.value = value
        }
    }

    type = '';
    value = 0;
    name = '';
    id = 0;
}
