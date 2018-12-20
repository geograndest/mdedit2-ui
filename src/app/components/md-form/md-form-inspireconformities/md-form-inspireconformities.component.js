import template from './md-form-inspireconformities.html';

const mdFormInspireconformitiesController = class MdFormInspireconformitiesController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
        console.log('constructor: mdFormInspireconformitiesController controller');
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
            this.inspireconformities = this.getValues();
        }
    }

    isValidField(key) {
        return true;
    }

    onAddInspireConformity() {
        this.inspireconformities.push({});
    }

    onRemoveInspireConformity(key) {
        if (this.inspireconformities.length > 1) {
            this.inspireconformities.splice(key, 1);
        } else {
            this.inspireconformities[key] = {};
        }
    }

    updateInspireConformities(key, inspireconformity) {
        this.inspireconformities[key] = inspireconformity;
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: this.inspireconformities
        });
    }
}

export const mdFormInspireconformitiesComponent = {
    bindings: {
        md: '<',
        field: '<',
        pass: '<',
        specifications: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormInspireconformitiesController,
};