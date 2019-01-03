import template from './md-form-contact.html';

const mdFormContactController = class MdFormContactController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    $onChanges(changes) {}

    onSave(space, field, fieldValue, separator) {
        var values = [];
        for (var v = 0; v < fieldValue.length; v++) {
            var splitValues = fieldValue[v];
            if (fieldValue[v]) {
                splitValues = fieldValue[v].split(separator).map((val) => val.trim())
            }
            values = values.concat(splitValues);
        }
        this.XmlConverterService.setValue(this.contact.value, space, field, values, separator);
        this.updateContact({
            key: this.contact.key,
            contact: this.contact.value
        });
    }

    removeCnt(key) {
        this.removeContact({
            key: key
        });
    }

    cloneCnt(key) {
        this.cloneContact({
            key: key
        });
    }

    duplicateCnt(key) {
        this.duplicateContact({
            key: key
        });
    }
}

export const mdFormContactComponent = {
    bindings: {
        multi: '@',
        key: '@',
        contact: '<',
        fields: '<',
        lists: '<',
        locales: '<',
        updateContact: '&',
        removeContact: '&',
        cloneContact: '&',
        duplicateContact: '&'
    },
    template: template,
    controller: mdFormContactController,
};