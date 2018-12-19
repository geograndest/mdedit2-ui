import template from './md-form-referencesystem.html';

const mdFormReferencesystemController = class MdFormReferencesystemController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    $onChanges(changes) {}

    onSave(space, field, fieldValue, separator) {
        this.XmlConverterService.setValue(this.referencesystem, space, field, fieldValue, separator);
        this.updateReferencesystem({
            key: this.key,
            referencesystem: this.referencesystem
        });
    }

    onRemove() {
        this.removeReferencesystem({
            key: this.key
        });
    }
}

export const mdFormReferencesystemComponent = {
    bindings: {
        multi: '@',
        key: '@',
        referencesystem: '<',
        fields: '<',
        list: '<',
        updateReferencesystem: '&',
        removeReferencesystem: '&'
    },
    template: template,
    controller: mdFormReferencesystemController,
};