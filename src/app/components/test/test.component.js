import template from './test.html';

const testController = class TestController {
    constructor(XmlConverterService) {
        'ngInject';

        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    $onChanges(changes) {
        if (changes.md) {
            this.fieldValue = this.getValues();
        }
    }

    getValues() {
        return this.XmlConverterService.getValue(this.md, this.space, this.field);
    }
}

export const testComponent = {
    bindings: {
        md: '<',
        field: '@',
        space: '@'
    },
    template: template,
    controller: testController,
};