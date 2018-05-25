import template from './md-form-element.html';

const mdFormElementController = class MdFormElementController {
    constructor() {
        // 'ngInject';
       // console.log('constructor: mdFormElementController controller');
    }

    $onInit() {
       // console.log('Init mdFormElementController');
    }

    $onChanges(changes) {
       // console.log(7777777, changes);
        this.fieldValue = this.changeValue(this.fieldValue, 'EMPTY', '');
        this.saveData();
    }

    changeValue(fieldValue, oldValue, newValue) {
        if (fieldValue == oldValue) {
            return newValue;
        }
        return fieldValue;
    }

    saveData() {
        // console.log('AAAAAAAAA', this.fieldValue, this.tpl);
        this.update({
            field: this.field.name,
            fieldValue: this.fieldValue
        });
    }

    onBlur() {
        this.changeEdit();
        this.saveData();
    }

    isValidField() {
        if (this.field.mandatory && !this.fieldValue) {
            return false;
        }
        return true;
    }
    isEmptyField() {
        return (!this.fieldValue);
    }

    // openDatePicker(event, id) {
    //     this.field.isopen = !this.field.isopen;
    // }

    changeEdit() {
        if (this.field.editable == 'both') {
            this.edit = !(this.edit);
        } else if (this.field.editable == 'false') {
            this.edit = false;
        } else {
            this.edit = true;
        }
    }
}

export const mdFormElementComponent = {
    bindings: {
        tpl: '@',
        fieldValue: '<',
        field: '<',
        edit: '<',
        update: '&'
    },
    template: template,
    controller: mdFormElementController,
};