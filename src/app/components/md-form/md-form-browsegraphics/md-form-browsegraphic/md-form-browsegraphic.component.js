import template from './md-form-browsegraphic.html';

const mdFormBrowsegraphicController = class MdFormBrowsegraphicController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    $onChanges(changes) {}

    onSave(space, field, fieldValue, separator) {
        // Get fileName extension and save
        if (field == 'fileName') {
            var ext = fieldValue[0].split('.').pop();
        }
        this.XmlConverterService.setValue(this.browsegraphic, space, 'fileType', ext, separator);
        this.XmlConverterService.setValue(this.browsegraphic, space, field, fieldValue, separator);
        this.updateBrowsegraphic({
            key: this.key,
            browsegraphic: this.browsegraphic
        });
    }

    onRemove() {
        this.removeBrowsegraphic({
            key: this.key
        });
    }
}

export const mdFormBrowsegraphicComponent = {
    bindings: {
        multi: '@',
        key: '@',
        browsegraphic: '<',
        fields: '<',
        extents: '<',
        locales: '<',
        updateBrowsegraphic: '&',
        removeBrowsegraphic: '&'
    },
    template: template,
    controller: mdFormBrowsegraphicController,
};