import template from './md-form-date.html';

const mdFormDateController = class MdFormDateController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    isValidDate() {
        var date = this.dates.filter((el) => {
            return el;
        });
        return this.date.length;
    }

    $onInit() {}

    getValues() {
        var date = [];
        this.fieldNames = this.field.name.split('|');
        this.fieldDate = angular.copy(this.field);
        this.fieldDate.name = this.fieldNames[0];
        for (var i = 0 ; i < this.fieldNames.length; i++) {
            date = date.concat(this.XmlConverterService.getValue(this.md, this.space, this.field.name));
        }
        date = date.filter((el) => {
            return el;
        });
        if (date.length) {
            return date;
        }
        return [this.value];
    }

    $onChanges(changes) {
        if (changes.md) {
            this.date = this.getValues();
        }
    }

    updateDate(space, field, fieldValue) {
        this.update({
            space: this.space,
            field: this.fieldNames[0],
            fieldValue: this.date
        });
    }
}

export const mdFormDateComponent = {
    bindings: {
        md: '<',
        field: '<',
        locales: '<',
        value: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormDateController,
};