import template from './md-form-geographicextent.html';

const mdFormGeographicextentController = class MdFormGeographicextentController {
    constructor(XmlConverterService) {
        'ngInject';
        // console.log('constructor: mdFormContactController controller');
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        // console.log(this.fields);
    }

    $onChanges(changes) {
    }

    onSave(space, field, fieldValue, separator) {
        console.log('save', this.key, fieldValue);
        this.XmlConverterService.setValue(this.geographicextent, space, field, fieldValue, separator);
        this.updateExtent({
            key: this.key,
            geographicextent: this.geographicextent
        });
    }

    removeExt() {
        console.log('remove', this.key);
        this.removeExtent({
            key: this.key
        });
    }

    onSelectGeographixExtent(item, model, label, index) {
        console.log('select', this.key);
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