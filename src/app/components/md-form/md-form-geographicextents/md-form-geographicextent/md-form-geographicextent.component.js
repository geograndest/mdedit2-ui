import template from './md-form-geographicextent.html';

const mdFormGeographicextentController = class MdFormGeographicextentController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    $onChanges(changes) {}

    onSave(space, field, fieldValue, separator) {
        this.XmlConverterService.setValue(this.geographicextent, space, field, fieldValue, separator);
        this.updateExtent({
            key: this.key,
            geographicextent: this.geographicextent
        });
    }

    removeExt() {
        this.removeExtent({
            key: this.key
        });
    }

    onSelectGeographixExtent(item, model, label, index) {
        this.XmlConverterService.setValue(this.geographicextent, 'md', 'extentName', [item.name]);
        this.XmlConverterService.setValue(this.geographicextent, 'md', 'geographicExtentWestBound', [item.west]);
        this.XmlConverterService.setValue(this.geographicextent, 'md', 'geographicExtentEastBound', [item.east]);
        this.XmlConverterService.setValue(this.geographicextent, 'md', 'geographicExtentSouthBound', [item.south]);
        this.XmlConverterService.setValue(this.geographicextent, 'md', 'geographicExtentNorthBound', [item.north]);

        // Copy of this.geographicextent to force change value in $onChanges child function
        this.geographicextent = angular.copy(this.geographicextent);
    }
}

export const mdFormGeographicextentComponent = {
    bindings: {
        multi: '@',
        key: '@',
        geographicextent: '<',
        fields: '<',
        extents: '<',
        updateExtent: '&',
        removeExtent: '&'
    },
    template: template,
    controller: mdFormGeographicextentController,
};