import template from './md-form-conformity.html';

const mdFormConformityController = class MdFormConformityController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    $onChanges(changes) {}

    onSave(space, field, fieldValue, separator) {
        this.XmlConverterService.setValue(this.conformity, space, field, fieldValue, separator);
        this.updateConformity({
            key: this.key,
            conformity: this.conformity
        });
    }

    onRemove() {
        this.removeConformity({
            key: this.key
        });
    }

}

export const mdFormConformityComponent = {
    bindings: {
        multi: '@',
        key: '@',
        conformity: '<',
        fields: '<',
        pass: '<',
        locales: '<',
        updateConformity: '&',
        removeConformity: '&'
    },
    template: template,
    controller: mdFormConformityController,
};