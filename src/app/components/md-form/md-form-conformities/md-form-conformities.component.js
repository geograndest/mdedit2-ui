import template from './md-form-conformities.html';

const mdFormConformitiesController = class MdFormConformitiesController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    getValues() {
        var values = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        if (values.length == 0) {
            values = [{}];
        }
        return values;
    }

    $onChanges(changes) {
        if (changes.md) {
            this.md = angular.copy(this.md);
            this.conformities = this.getValues();
        }
    }

    isValidField(key) {
        return true;
    }

    onAddConformity() {
        this.conformities.push({});
    }

    onRemoveConformity(key) {
        if (this.conformities.length > 1) {
            this.conformities.splice(key, 1);
        } else {
            this.conformities[key] = {};
        }
    }

    updateConformities(key, conformity) {
        this.conformities[key] = conformity;
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: this.conformities
        });
    }
}

export const mdFormConformitiesComponent = {
    bindings: {
        md: '<',
        field: '<',
        pass: '<',
        locales: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormConformitiesController,
};