import template from './md-form-linkage.html';

const mdFormLinkageController = class MdFormLinkageController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    $onChanges(changes) {}

    onSave(space, field, fieldValue, separator) {
        this.XmlConverterService.setValue(this.linkage, space, field, fieldValue, separator);
        this.updateLinkage({
            key: this.key,
            linkage: this.linkage
        });
    }

    onRemove() {
        this.removeLinkage({
            key: this.key
        });
    }
}

export const mdFormLinkageComponent = {
    bindings: {
        multi: '@',
        key: '@',
        linkage: '<',
        fields: '<',
        protocols: '<',
        updateLinkage: '&',
        removeLinkage: '&'
    },
    template: template,
    controller: mdFormLinkageController,
};