import template from './md-form-elements.html';

const mdFormElementsController = class MdFormElementsController {
    constructor() {
        'ngInject';

        // console.log('constructor: mdFormContactsController controller');
        // this.mdFormLocales = mdFormLocales;
    }

    $onInit() {
        // console.log('Init mdFormContactsController');
        // if (!angular.isArray(this.contacts)) {
        //     this.contacts = [this.contacts];
        // }
        this.items.push({});
    }

    $onChanges(changes) {
        // console.log('C1111', changes);
    }

    onAddItem() {
        this.items.push({});
        console.log(this.items);
    }

    onRemoveItems(key) {
        console.log('remove item', key);
        // delete this.items[key];
        this.items.splice(key, 1);
        console.log(this.items);
    }

    updateContacts(key, item) {
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

export const mdFormElementsComponent = {
    bindings: {
        // tpl: '@',
        // mdFormLocales: '<',
        items: '<',
        codelists: '<',
        contacts: '<',
        field: '<',
        multi: '@',
        space: '@',
        onUpdate: '&'
    },
    template: template,
    controller: mdFormElementsController,
};