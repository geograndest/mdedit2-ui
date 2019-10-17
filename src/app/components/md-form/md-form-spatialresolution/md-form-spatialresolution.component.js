import template from './md-form-spatialresolution.html';

const mdFormSpatialresolutionController = class MdFormSpatialresolutionController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    isValid() {
        var scaleDistance = this.XmlConverterService.getValue(this.md, this.space, this.field.scale.dataScaleDistance.name).filter((el) => {
            return el;
        });
        var scaleDenominator = this.XmlConverterService.getValue(this.md, this.space, this.field.scale.dataScaleDenominator.name).filter((el) => {
            return el;
        });
        return (scaleDistance.length || scaleDenominator.length);
    }

    $onInit() {}

    getValues() {}

    $onChanges(changes) {
        if (changes.md) {}
    }

    updateResolution(space, field, fieldValue) {
        this.update({
            space: this.space,
            field: field,
            fieldValue: fieldValue
        });
    }
}

export const mdFormSpatialresolutionComponent = {
    bindings: {
        md: '<',
        field: '<',
        locales: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormSpatialresolutionController
};