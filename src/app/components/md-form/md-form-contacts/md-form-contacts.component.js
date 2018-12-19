import template from './md-form-contacts.html';

const mdFormContactsController = class MdFormContactsController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    getValues() {
        return this.XmlConverterService.getValue(this.md, this.space, this.field.name);
    }

    $onChanges(changes) {
        if (changes.md) {
            this.contacts = this.getValues();
            if (this.contacts.length == 0) {
                this.contacts = [{}];
            }
        }
    }

    onAddContact() {
        this.contacts.push({});
    }

    onRemoveContact(key) {
        if (this.contacts.length > 1) {
            this.contacts.splice(key, 1);
        } else {
            this.contacts[key] = {};
        }
    }

    updateContacts(key, contact) {
        this.contacts[key] = contact;
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: this.contacts
        });
    }

}

export const mdFormContactsComponent = {
    bindings: {
        lists: '<',
        md: '<',
        field: '<',
        multi: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormContactsController,
};