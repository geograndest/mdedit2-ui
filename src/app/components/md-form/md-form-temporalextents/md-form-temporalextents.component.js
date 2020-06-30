import template from './md-form-temporalextents.html';

const mdFormTemporalextentsController = class MdFormTemporalextentsController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        this.temporalextents = [{}];
    }

    isValidField(key) {
        return true;
    }

    cleanArray(array) {
        if (array) {
            return array.filter((el) => { return el; });
        }
        return array;
    }

    isDefined(array) {
        if (array) {
            return this.cleanArray(array).length !== 0;
        }
        return false;
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
        return this.getExtents(dataExtents, 'temporal');
    }

    $onChanges(changes) {
        if (changes.md) {
            this.temporalextents = this.getValues();
            if (this.temporalextents.length == 0) {
                this.temporalextents = [{}];
            }
        }
    }

    onAddExtent() {
        this.temporalextents.push({});
    }

    onRemoveExtent(key) {
        this.updateExtents(key, {});
    }

    updateExtents(key, temporalextent) {
        if (this.isTemporalExtent(temporalextent) || Object.keys(temporalextent).length === 0) {
            this.temporalextents[key] = temporalextent;
            this.temporalextents = this.getExtents(this.temporalextents, 'temporal');
            
            // Keep only no geo dataExtents and add new temporalExtents 
            var dataExtents = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
            var geographicextents = this.getExtents(dataExtents, 'geographic');
            var newDataExtents = geographicextents.concat(this.temporalextents);

            this.update({
                space: this.space,
                field: this.field.name,
                fieldValue: newDataExtents
            });
        }
    }

}

export const mdFormTemporalextentsComponent = {
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
    controller: mdFormTemporalextentsController,
};