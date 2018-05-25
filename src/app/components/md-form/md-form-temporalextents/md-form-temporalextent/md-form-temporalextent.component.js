import template from './md-form-temporalextent.html';

const mdFormTemporalextentController = class MdFormTemporalextentController {
    constructor(XmlConverterService) {
        'ngInject';
        // console.log('constructor: mdFormContactController controller');
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        console.log(this.fields);
    }

    $onChanges(changes) {
    }

    onSave(space, field, fieldValue, separator) {
        console.log('save', this.key, fieldValue);
        this.XmlConverterService.setValue(this.temporalextent, space, field, fieldValue, separator);
        this.updateExtent({
            key: this.key,
            temporalextent: this.temporalextent
        });
    }

    removeExt() {
        console.log('remove', this.key);
        this.removeExtent({
            key: this.key
        });
    }

    // onSelectGeographixExtent(item, model, label, index) {
    //     console.log('select', this.key);
    //     this.XmlConverterService.setValue(this.temporalextent, 'md', 'extentName', [item.name]);
    //     this.XmlConverterService.setValue(this.temporalextent, 'md', 'geographicExtentWestBound', [item.west]);
    //     this.XmlConverterService.setValue(this.temporalextent, 'md', 'geographicExtentEastBound', [item.east]);
    //     this.XmlConverterService.setValue(this.temporalextent, 'md', 'geographicExtentSouthBound', [item.south]);
    //     this.XmlConverterService.setValue(this.temporalextent, 'md', 'geographicExtentNorthBound', [item.north]);

    //     // Copy of this.temporalextent to force change value in $onChanges child function
    //     this.temporalextent = angular.copy(this.temporalextent);
    // }
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