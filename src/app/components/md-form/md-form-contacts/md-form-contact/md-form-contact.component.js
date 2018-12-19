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
            // TODO: ajouter pour contourner un problème sur logoUrl. Revoie fieldValue=[[""]] à la place de [""]
            if (Array.isArray(fieldValue[0])) {
                fieldValue = fieldValue[0]
            }
            // console.log(field, fieldValue)
            values = values.concat(fieldValue[v].split(separator));
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
}

export const mdFormContactComponent = {
    bindings: {
        multi: '@',
        key: '@',
        contact: '<',
        fields: '<',
        lists: '<',
        updateContact: '&',
        removeContact: '&'
    },
    template: template,
    controller: mdFormContactController,
};