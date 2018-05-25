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
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;

        // console.log('constructor: mdFormElementController controller');
        // console.log(0);
        // if (this.type == 'date') {
        //     console.log(1);
        //     this.fieldValue = new Date(this.fieldValue);
        // }
    }


    $onInit() {
        // Disabled field if not editable
        if (this.field.editable == 'false') {
            this.field.disabled = true;
        }
        // Initi this.edit according "this.field.editable" value
        var edit = true;
        this.isEdited = [];
        if (this.edit != 'true' || this.field.editable == 'false') {
            edit = false;
        }
        for (var i = 0; i < this.fieldValue.length; i++) {
            this.isEdited[i] = edit;
        }
        this.edit = edit;

        // Init default value
        var isFieldValueEmpty = this.fieldValue.some(function (i) {
            return !!i;
        });
        if (this.field.value) {
            this.fieldValue = isFieldValueEmpty || this.field.value;
        }
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

    getValues() {
        return this.XmlConverterService.getValue(this.md, this.space, this.field.name);
    }

    $onChanges(changes) {
        if (changes.md) {
            this.fieldValue = (!this.getValues().length || this.getValues()[0] == 'EMPTY') ? [''] : this.getValues();
            if (!changes.md.isFirstChange()) {
                this.saveData();
            }
        }
    }

    saveData(items) {
        if (items !== undefined) {
            // console.log('save items', items);
            this.update({
                space: this.space,
                field: this.field.name,
                fieldValue: items
            });
        }
    }

    onBlur(key, itemValue) {
        // console.log('blur', this.field, this.md, key, itemValue);
        this.changeEdit(key);
        this.fieldValue[key] = itemValue;
        this.saveData(this.fieldValue);
    }

    onSelectItem(item, model, label, index) {
        // console.log('select', this.field, this.md);
        this.selectItem({
            item: item,
            model: model,
            label: label,
            index: index
        });
    }

    isValidField(key) {
        if (this.field.mandatory == 'true' && this.fieldValue.length && this.fieldValue.every(function (i) {
                if (i != undefined) {
                    return !i.length;
                }
            })) {
            return false;
        }
        return true;
    }
    isEmptyField(key) {
        return (!this.fieldValue[key]);
    }

    // for type="date"
    openDatePicker(event, id) {
        this.field.isopen = !this.field.isopen;
    }

    changeEdit(key) {
        if (this.field.editable == 'both') {
            this.isEdited[key] = !(this.isEdited[key]);
        } else if (this.field.editable == 'false') {
            this.isEdited[key] = false;
        } else {
            this.isEdited[key] = true;
        }
    }

    addItem() {
        this.fieldValue.push('');
        this.isEdited.push(this.edit);
    }

    removeItem(key) {
        if (this.fieldValue.length > 1) {
            this.fieldValue[key] = undefined;
        }
    }
}

export const mdFormElementComponent = {
    bindings: {
        space: '@',
        type: '@',
        multi: '@',
        label: '@',
        field: '<',
        list: '<',
        edit: '@',
        md: '<',
        update: '&',
        selectItem: '&'
    },
    template: ($element, $attrs) => {
        'ngInject';
        var type = $attrs.type || 'text';
        return templates[type];
    },
    controller: mdFormElementController,
};