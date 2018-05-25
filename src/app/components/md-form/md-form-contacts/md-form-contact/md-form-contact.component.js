import template from './md-form-contact.html';

const mdFormContactController = class MdFormContactController {
    constructor(XmlConverterService) {
        'ngInject';

        // console.log('constructor: mdFormContactController controller');
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        // console.log(this.fields);
    }

    $onChanges(changes) {
        // console.log(11223344, changes);
    }

    onSave(space, field, fieldValue, separator) {
        // console.log('BBBBBBBB', this.contact, field, fieldValue);
        // console.log('BBBB', this.XmlConverterService.setValue(this.contact.value, field, fieldValue, separator));
        var values = [];
        for (var v = 0; v < fieldValue.length; v++) {
            // console.log(fieldValue.split())
            values = values.concat(fieldValue[v].split(separator));
        }
        // // fieldValue = fieldValue[0].split[separator];
        // console.log(33, fieldValue, values);
        this.XmlConverterService.setValue(this.contact.value, space, field, values, separator);
        this.updateContact({
            key: this.contact.key,
            contact: this.contact.value
        });
        // console.log('BBBB', this.contact.value);
    }

    removeCnt(key) {
        console.log('remove', key);
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