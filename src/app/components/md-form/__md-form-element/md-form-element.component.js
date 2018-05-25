// import template from './md-form-element.html'
import tpl_text from './md-form-text.html';
import tpl_select from './md-form-select.html';
import tpl_textarea from './md-form-textarea.html';
import tpl_date from './md-form-date.html';

const templates = {
    'text': tpl_text,
    'date': tpl_text,
    'select': tpl_select,
    'textarea': tpl_textarea
};

const mdFormElementController = class MdFormElementController {
    constructor() {
        // 'ngInject';
        // console.log('constructor: mdFormElementController controller');
        // console.log(0);
        // if (this.type == 'date') {
        //     console.log(1);
        //     this.fieldValue = new Date(this.fieldValue);
        // }
    }


    $onInit() {
        // console.log('Init mdFormElementController');
        // console.log(this.fieldValue);
        // Initi this.edit according "this.field.editable" value
        if (!this.edit || this.field.editable == 'false') {
            this.edit = false;
        }

        // Init default value
        // console.log(this.fieldValue, this.field.value);
        this.fieldValue = this.fieldValue || this.field.value;
        this.type = this.field.type || 'text';
        // Init list values if define as parameter
        // this.list = this.list || this.mdEditLocales.codelists[this.field.list];

        // for type="date"
        this.field.isopen = false;
        // if (this.type == 'date') {
        //     console.log(1);
        //     this.fieldValue = new Date(this.fieldValue);
        // }

    }

    $onChanges(changes) {
        // console.log(7777777, changes.items);
        if (changes.fieldValue) {
            // this.fieldValue = this.changeValue(this.fieldValue, 'EMPTY', '');
            // console.log(changes.fieldValue.currentValue, this.fieldValue);
            this.fieldValue = (changes.fieldValue.currentValue == 'EMPTY') ? '' : changes.fieldValue.currentValue;
            // console.log(this.type);
            // if (this.type == 'date') {
            //     console.log(2);
            //     // console.log(this.fieldValue, new Date(this.fieldValue));
            //     this.fieldValue = new Date(this.fieldValue);
            // }
            if (!changes.fieldValue.isFirstChange()) {
                this.saveData();
            }
        }
    }

    // changeValue(fieldValue, oldValue, newValue) {
    //     if (fieldValue == oldValue) {
    //         return newValue;
    //     }
    //     return fieldValue;
    // }

    saveData() {
        // console.log('AAAAAAAAA', this.fieldValue, this.tpl);
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: this.fieldValue
        });
    }

    onBlur() {
        this.changeEdit();
        this.saveData();
    }

    isValidField() {
        if (this.field.mandatory == 'true' && !this.fieldValue) {
            return false;
        }
        return true;
    }
    isEmptyField() {
        return (!this.fieldValue);
    }

    // for type="date"
    openDatePicker(event, id) {
        this.field.isopen = !this.field.isopen;
    }

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
        values: '<',
        space: '@',
        type: '@',
        multi: '@',
        // items: '<',
        fieldValue: '<',
        field: '<',
        list: '<',
        edit: '<',
        update: '&'
    },
    // template: template,
    template: ($element, $attrs) => {
        'ngInject';
        // console.log($attrs);
        var type = $attrs.type || 'text';
        return templates[type];
    },
    controller: mdFormElementController,
};