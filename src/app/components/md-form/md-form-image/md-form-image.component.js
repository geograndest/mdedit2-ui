import template from './md-form-image.html';

const mdFormImageController = class MdFormImageController {
    constructor(XmlConverterService) {
        'ngInject';
       // console.log('constructor: mdFormImageController controller');
       this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
    }
    
    getValues() {
        return this.XmlConverterService.getValue(this.md, this.space, this.field.name);
    }

    $onChanges(changes) {
        if (changes.md) {
            this.fieldValue = (!this.getValues().length || this.getValues()[0] == 'EMPTY') ? [''] : this.getValues();
        }
    }

    isEmptyField() {
        return (!this.getValues().length);
    }
}

export const mdFormImageComponent = {
    bindings: {
        space: '@',
        md: '<',
        fieldValue: '<',
        field: '<'
    },
    template: template,
    controller: mdFormImageController,
};