import template from './md-form-identifier.html';

const mdFormIdentifierController = class MdFormIdentifierController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    $onChanges(changes) {}

    onSave(space, field, fieldValue, separator) {
        this.XmlConverterService.setValue(this.identifier, space, field, fieldValue, separator);
        this.updateIdentifier({
            key: this.key,
            identifier: this.identifier
        });
    }

    onRemove() {
        this.removeIdentifier({
            key: this.key
        });
    }
}

export const mdFormIdentifierComponent = {
    bindings: {
        multi: '@',
        key: '@',
        identifier: '<',
        fields: '<',
        extents: '<',
        locales: '<',
        updateIdentifier: '&',
        removeIdentifier: '&'
    },
    template: template,
    controller: mdFormIdentifierController,
};