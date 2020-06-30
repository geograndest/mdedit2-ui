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

    isDefined(array) {
        return array.filter((el) => { return el; }).length;
    }

    isTemporalExtent(dataExtent) {
        return (this.isDefined(this.XmlConverterService.getValue(dataExtent, this.space, 'temporalExtentBegin'))
            || this.isDefined(this.XmlConverterService.getValue(dataExtent, this.space, 'temporalExtentEnd')));
    }

    isGeographicExtent(dataExtent) {
        return (this.isDefined(this.XmlConverterService.getValue(dataExtent, this.space, 'geographicExtentWestBound')) ||
        this.isDefined(this.XmlConverterService.getValue(dataExtent, this.space, 'geographicExtentEastBound')) ||
        this.isDefined(this.XmlConverterService.getValue(dataExtent, this.space, 'geographicExtentSouthBound')) ||
        this.isDefined(this.XmlConverterService.getValue(dataExtent, this.space, 'geographicExtentNorthBound')));
    }

    isValidExtent(dataExtent) {
        return isTemporalExtent(dataExtent) || isGeographicExtent(dataExtent);
    }

    getExtents(dataExtents, type) {
        var geographicExtents = [];
        var temporalExtents = [];
        for (var i = 0; i < dataExtents.length; i++) {
            if (this.isGeographicExtent(dataExtents[i])) {
                geographicExtents.push(dataExtents[i]);
            } else if (this.isTemporalExtent(dataExtents[i])) {
                temporalExtents.push(dataExtents[i]);
            }
        }

        if (type == 'temporal') {
            return this.isDefined(temporalExtents) ? temporalExtents : [{}];
        } else {
            return this.isDefined(geographicExtents) ? geographicExtents : [{}];
        }
    }

    getValues() {
        var dataExtents = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        return this.getExtents(dataExtents, 'geographic');
    }

    $onChanges(changes) {
        if (changes.md) {
            this.geographicextents = this.getValues();
            if (this.geographicextents.length == 0) {
                this.geographicextents = [{}];
            }
        }
    }

    onAddExtent() {
        this.geographicextents.push({});
    }

    onRemoveExtent(key) {
        this.updateExtents(key, {});
    }

    updateExtents(key, geographicextent) {
        if (this.isGeographicExtent(geographicextent) || Object.keys(geographicextent).length === 0) {
            this.geographicextents[key] = geographicextent;
            this.geographicextents = this.getExtents(this.geographicextents, 'geographic');
            
            // Keep only no geo dataExtents and add new geographicextents 
            var dataExtents = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
            var temporalextents = this.getExtents(dataExtents, 'temporal');
            var newDataExtents = temporalextents.concat(this.geographicextents);
                                
            this.update({
                space: this.space,
                field: this.field.name,
                fieldValue: newDataExtents
            });
        }
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