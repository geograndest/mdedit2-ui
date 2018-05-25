import template from './md-form-multi-element.html';

const mdFormMultiElementController = class MdFormMultiElementController {
    constructor() {
        'ngInject';

        // console.log('constructor: mdFormMultiElementController controller');
        // this.mdFormLocales = mdFormLocales;
    }

    $onInit() {
        // console.log('Init mdFormMultiElementController');
        // if (!angular.isArray(this.contacts)) {
        //     this.contacts = [this.contacts];
        // }
        // this.contacts.push({});
        console.log(this.field);
    }

    $onChanges(changes) {
        // console.log('C1111', changes);
    }

    onAddItem() {
        this.items.push({});
        console.log(this.items);
    }

    onRemoveItem(key) {
        console.log('remove item', key);
        // delete this.items[key];
        this.items.splice(key, 1);
        console.log(this.items);
    }

    onUpdateItem(key, item) {
        this.items[key] = item;
        // console.log('CCCCCCC', key, contact, this.contacts);
        this.onUpdate({
            space: this.space,
            field: this.field.name,
            fieldValue: this.items
        });
        // console.log('CCCC', this.contacts);
    }

}

export const mdFormMultiElementComponent = {
    bindings: {
        // tpl: '@',
        // mdFormLocales: '<',
        list: '<',
        items: '<',
        type: '@',
        field: '<',
        edit: '@',
        multi: '@',
        space: '@',
        onUpdate: '&'
    },
    template: template,
    controller: mdFormMultiElementController,
};