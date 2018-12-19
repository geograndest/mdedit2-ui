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
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormGeographicextentsController,
};