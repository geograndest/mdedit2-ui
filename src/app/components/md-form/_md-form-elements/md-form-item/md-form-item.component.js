import template from './md-form-item.html';

const mdFormItemController = class MdFormItemController {
    constructor(XmlConverterService) {
        'ngInject';

        // console.log('constructor: mdFormItemController controller');
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        // console.log('Init mdFormItemController');
    }

    $onChanges(changes) {
        // console.log(11223344, changes);
    }

    onSave(field, fieldValue, separator) {
        // console.log('BBBBBBBB', this.item, field, fieldValue);
        // console.log('BBBB', this.XmlConverterService.setValue(this.item.value, field, fieldValue, separator));
        this.XmlConverterService.setValue(this.item.value, field, fieldValue, separator);
        this.updateItem({
            key: this.item.key,
            item: this.item.value
        });
        // console.log('BBBB', this.item.value);
    }

    onRemove(key) {
        console.log('remove', key);
        this.removeItem({
            key: key
        });
    }
}

export const mdFormItemComponent = {
    bindings: {
        multi: '@',
        key: '@',
        item: '<',
        fields: '<',
        codelists: '<',
        updateItem: '&',
        removeItem: '&'
    },
    template: template,
    controller: mdFormItemController,
};