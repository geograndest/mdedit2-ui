import template from './md-form-contacts.html';

const mdFormContactsController = class MdFormContactsController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;

        // console.log('constructor: mdFormContactsController controller');
        // this.mdFormLocales = mdFormLocales;
    }

    $onInit() {
        // console.log('Init mdFormContactsController');
        // if (!angular.isArray(this.contacts)) {
        //     this.contacts = [this.contacts];
        // }
        // this.contacts.push({});
        // this.contacts = this.getValues();
    }

    getValues() {
        // console.log(this.field);
        return this.XmlConverterService.getValue(this.md, this.space, this.field.name);
    }

    $onChanges(changes) {
        if (changes.md) {
            // this.fieldValue = this.getValues();
            this.contacts = this.getValues();

            // if (!changes.md.isFirstChange()) {
            //     this.saveData();
            // }
        }
    }

    onAddContact() {
        this.contacts.push({});
        // console.log(this.contacts);
    }

    onRemoveContact(key) {
        console.log('remove contact', key);
        if (this.contacts.length > 1) {
            // delete this.contacts[key];
            this.contacts.splice(key, 1);
        } else {
            this.contacts[key] = {};
        }
        // console.log(this.contacts);
    }

    updateContacts(key, contact) {
        this.contacts[key] = contact;
        // console.log('CCCCCCC', key, contact, this.contacts);
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: this.contacts
        });
        // console.log('CCCC', this.contacts);
    }

}

export const mdFormContactsComponent = {
    bindings: {
        // tpl: '@',
        // mdFormLocales: '<',
        lists: '<',
        // contacts: '<',
        md: '<',
        field: '<',
        multi: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormContactsController,
};