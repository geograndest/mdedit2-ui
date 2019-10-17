import template from './md-form-image.html';

const mdFormImageController = class MdFormImageController {
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
            this.fieldValue = !this.getValues().length ? [''] : this.getValues();
        }
    }

    isEmptyField() {
        return (!this.getValues().length);
    }

    isValidField(key) {
        return true;
    }
}

export const mdFormImageComponent = {
    bindings: {
        space: '@',
        md: '<',
        fieldValue: '<',
        field: '<',
        locales: '<'
    },
    template: template,
    controller: mdFormImageController,
};