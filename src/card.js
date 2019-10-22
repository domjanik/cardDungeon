class Card {
    constructor(type, value, id) {
        this.type = type.name;
        this.name = type.name;
        this.id = id;
        if (type.name !== 'user') {
            this.value = value
        }
        this.color = type.color;
        this.action = type.action;
    }

    action = () => {};
    color = '';
    type = '';
    value = 0;
    name = '';
    id = 0;
}
