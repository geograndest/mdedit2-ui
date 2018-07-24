import template from './md-form-inspirekeyword.html';

const mdFormInspirekeywordController = class MdFormInspirekeywordController {
    constructor(XmlConverterService) {
        'ngInject';
        // console.log('constructor: mdFormContactController controller');
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        console.log(1, this.fields, this.inspirekeyword);
    }

    $onChanges(changes) {}

    onSave(space, field, fieldValue, separator) {
        console.log('save', this.key, fieldValue, field, this.inspirekeyword);
        this.XmlConverterService.setValue(this.inspirekeyword, space, field, fieldValue, separator);
        this.XmlConverterService.setValue(this.inspirekeyword, space, 'keywordType', ['Theme']);
        this.XmlConverterService.setValue(this.inspirekeyword, space, 'thesaurusName', ['GEMET - INSPIRE themes, version 1.0']);
        this.XmlConverterService.setValue(this.inspirekeyword, space, 'thesaurusDatePublication', ['2008-06-01']);
        this.updateInspirekeyword({
            key: this.key,
            keyword: this.inspirekeyword
        });
    }

    onRemove() {
        console.log('remove', this.key);
        this.removeInspirekeyword({
            key: this.key
        });
    }
}

export const mdFormInspirekeywordComponent = {
    bindings: {
        multi: '@',
        key: '@',
        inspirekeyword: '<',
        fields: '<',
        list: '<',
        updateInspirekeyword: '&',
        removeInspirekeyword: '&'
    },
    template: template,
    controller: mdFormInspirekeywordController,
};