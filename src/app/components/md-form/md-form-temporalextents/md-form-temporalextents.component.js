import template from './md-form-temporalextents.html';

const mdFormTemporalextentsController = class MdFormTemporalextentsController {
    constructor(XmlConverterService) {
        'ngInject';
        // this.UtilsService = UtilsService;
        this.XmlConverterService = XmlConverterService;
        // console.log('constructor: mdFormContactsController controller');
    }

    $onInit() {
        // this.show = false;
        // this.UtilsService.getJsonFile(this.extentsFile).then((data) => {
        //     this.extents = data;
        //     this.show = true;
        // });
        // console.log(this.field);
    }

    getValues() {
        var dataExtents = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        // console.log(dataExtents);
        var temporalExtents = [];
        for (var i = 0; i < dataExtents.length; i++) {
            // console.log(this.XmlConverterService.getValue(dataExtents[i], this.space, 'temporalExtent'));
            if (this.XmlConverterService.getValue(dataExtents[i], this.space, 'temporalExtent').length) {
                temporalExtents.push(dataExtents[i]);
            }
        }
        // console.log(temporalExtents);
        return temporalExtents;
    }

    $onChanges(changes) {
        if (changes.md) {
            this.temporalextents = this.getValues();
        }
    }

    onAddExtent() {
        this.temporalextents.push({});
    }

    onRemoveExtent(key) {
        if (this.temporalextents.length > 1) {
            this.temporalextents.splice(key, 1);
        } else {
            this.temporalextents[key] = {};
        }
    }

    updateExtents(key, temporalextent) {
        this.temporalextents[key] = temporalextent;

        // Keep only no geo dataExtents and add new temporalExtents 
        var dataExtents = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        var newDataExtents = [];
        for (var d = 0; d < dataExtents.length; d++) {
            if (!this.XmlConverterService.getValue(dataExtents[d], this.space, 'temporalExtent').length) {
                newDataExtents.push(dataExtents[d]);
            }
        }
        newDataExtents = newDataExtents.concat(this.temporalextents);

        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: newDataExtents
        });
    }

}

export const mdFormTemporalextentsComponent = {
    bindings: {
        // extentsFile: '@',
        md: '<',
        field: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormTemporalextentsController,
};