import template from './md-form-temporalextent.html';

const mdFormTemporalextentController = class MdFormTemporalextentController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    $onChanges(changes) {}

    onSave(space, field, fieldValue, separator) {
        this.XmlConverterService.setValue(this.temporalextent, space, field, fieldValue, separator);
        this.updateExtent({
            key: this.key,
            temporalextent: this.temporalextent
        });
    }

    removeExt() {
        this.removeExtent({
            key: this.key
        });
    }

}

export const mdFormTemporalextentComponent = {
    bindings: {
        multi: '@',
        key: '@',
        temporalextent: '<',
        fields: '<',
        extents: '<',
        updateExtent: '&',
        removeExtent: '&'
    },
    template: template,
    controller: mdFormTemporalextentController,
};