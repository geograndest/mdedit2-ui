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

    $onInit() {
    }

    // getValues() {
    //     var scaleDistance = this.XmlConverterService.getValue(this.md, this.space, this.field.scale.dataScaleDistance.name);
    //     this.scaleDistance = scaleDistance || {};
    //     var scaleDenominator = this.XmlConverterService.getValue(this.md, this.space, this.field.scale.dataScaleDenominator.name);
    //     this.scaleDenominator = scaleDenominator || {};
    //     console.log(1, this.scaleDistance, this.scaleDenominator, this.md, this.space, this.field.scale.dataScaleDistance.name);
    // }

    // $onChanges(changes) {
    //     if (changes.md) {
    //         this.getValues();
    //     }
    // }

    updateResolution(space, field, fieldValue) {
        // console.log(2, space, field, fieldValue);
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