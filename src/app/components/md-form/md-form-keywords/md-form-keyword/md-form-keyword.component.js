import template from './md-form-keyword.html';

const mdFormKeywordController = class MdFormKeywordController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    $onChanges(changes) {}

    onSave(space, field, fieldValue, separator) {
        if (separator) {
            fieldValue = fieldValue.map((value) => value.split(separator)).flat(1).map((value) => value.trim());
        }
        this.XmlConverterService.setValue(this.keyword, space, field, fieldValue, separator);
        this.updateKeyword({
            key: this.key,
            keyword: this.keyword
        });
    }

    onRemove() {
        this.removeKeyword({
            key: this.key
        });
    }
}

export const mdFormKeywordComponent = {
    bindings: {
        multi: '@',
        key: '@',
        keyword: '<',
        fields: '<',
        list: '<',
        locales: '<',
        updateKeyword: '&',
        removeKeyword: '&'
    },
    template: template,
    controller: mdFormKeywordController,
};