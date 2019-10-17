import template from './md-form-geographicextents.html';

const mdFormGeographicextentsController = class MdFormGeographicextentsController {
    constructor(UtilsService, XmlConverterService) {
        'ngInject';
        this.UtilsService = UtilsService;
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        this.show = false;
        this.UtilsService.getJsonFile(this.extentsFile).then((data) => {
            this.extents = data;
            this.show = true;
        });
        // this.geographicextents = []
    }

    isValidField(key) {
        for (var i = 0; i < this.geographicextents.length; i++) {
            var geographicExtentWestBound = this.XmlConverterService.getValue(this.geographicextents[i], this.space, 'geographicExtentWestBound')[0];
            var geographicExtentEastBound = this.XmlConverterService.getValue(this.geographicextents[i], this.space, 'geographicExtentEastBound')[0];
            var geographicExtentSouthBound = this.XmlConverterService.getValue(this.geographicextents[i], this.space, 'geographicExtentSouthBound')[0];
            var geographicExtentNorthBound = this.XmlConverterService.getValue(this.geographicextents[i], this.space, 'geographicExtentNorthBound')[0];

            var isValidWestBound = (geographicExtentWestBound > -180 && geographicExtentWestBound < 180)
            var isValidEastBound = (geographicExtentEastBound > -180 && geographicExtentEastBound < 180)
            var isValidSouthBound = (geographicExtentSouthBound > -180 && geographicExtentSouthBound < 180)
            var isValidNorthBound = (geographicExtentNorthBound > -180 && geographicExtentNorthBound < 180)

            var areValidLongitudes = (isValidWestBound && isValidEastBound && geographicExtentWestBound < geographicExtentEastBound)
            var areValidLatitudes = (isValidSouthBound && isValidNorthBound && geographicExtentSouthBound < geographicExtentNorthBound)

            if (!areValidLongitudes || !areValidLatitudes) {
                return false
            }

        }
        return true;
    }

    getValues() {
        var dataExtents = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        var geographicExtents = [];
        for (var i = 0; i < dataExtents.length; i++) {
            if (this.XmlConverterService.getValue(dataExtents[i], this.space, 'geographicExtent').length) {
                geographicExtents.push(dataExtents[i]);
            }
        }
        return geographicExtents;
    }

    $onChanges(changes) {
        if (changes.md) {
            this.geographicextents = this.getValues();
        }
    }

    onAddExtent() {
        this.geographicextents.push({});
    }

    onRemoveExtent(key) {
        if (this.geographicextents.length > 1) {
            this.geographicextents.splice(key, 1);
        } else {
            this.geographicextents[key] = {};
        }
    }

    updateExtents(key, geographicextent) {
        this.geographicextents[key] = geographicextent;

        // Keep only no geo dataExtents and add new geographicExtents 
        var dataExtents = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        var newDataExtents = [];
        for (var d = 0; d < dataExtents.length; d++) {
            if (!this.XmlConverterService.getValue(dataExtents[d], this.space, 'geographicExtent').length) {
                newDataExtents.push(dataExtents[d]);
            }
        }
        newDataExtents = newDataExtents.concat(this.geographicextents);

        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: newDataExtents
        });
    }

}

export const mdFormGeographicextentsComponent = {
    bindings: {
        extentsFile: '@',
        md: '<',
        field: '<',
        locales: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormGeographicextentsController,
};