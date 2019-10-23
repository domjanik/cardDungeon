class Card {
    constructor(type, value, id) {
        this.type = type.name;
        this.name = type.name;
        this.id = id;
        if (type.name !== 'user' && type.name !== 'blank' && type.name !== 'chest') {
            this.value = value;
            this.initValue = value;
        }
        this.action = type.action;
        this.icon = type.icon;
    }

    action = () => {};
    type = '';
    value = 0;
    initValue = 0;
    name = '';
    id = 0;
    icon = '';
}
