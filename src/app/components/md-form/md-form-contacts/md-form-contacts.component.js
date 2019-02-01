import template from './md-form-contacts.html';

const mdFormContactsController = class MdFormContactsController {
    constructor(XmlConverterService, StoreService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
        this.StoreService = StoreService;
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

    isValidField(key) {
        return true;
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

    duplicateContact(contactsFieldName, contact) {
        var contacts = this.XmlConverterService.getValue(this.md, this.space, contactsFieldName);
        contacts.push(angular.copy(contact))
        this.XmlConverterService.setValue(this.md, this.space, contactsFieldName, contacts);
        // Create a deep copy of this.md to change reference and force change of mdjs in StoreService to reload and update form data
        this.StoreService.setData({
            mdjs: angular.copy(this.md)
        });
    }

    onDuplicateContact(key) {
        if (this.field.name == 'mdContacts') {
            this.duplicateContact('dataPointOfContacts', this.contacts[key])
        } else if (this.field.name == 'dataPointOfContacts') {
            this.duplicateContact('mdContacts', this.contacts[key])
        }
    }

    onCloneContact(key) {
        this.contacts.push(angular.copy(this.contacts[key]))
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
        locales: '<',
        multi: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormContactsController,
};