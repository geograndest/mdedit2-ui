// import template from './md-form-element.html'
import tpl_text from "./md-form-text.html";
import tpl_select from "./md-form-select.html";
import tpl_textarea from "./md-form-textarea.html";
// import tpl_date from "./md-form-date.html";

const templates = {
    text: tpl_text,
    date: tpl_text,
    datetime: tpl_text,
    select: tpl_select,
    textarea: tpl_textarea
};

const mdFormElementController = class MdFormElementController {
    constructor(XmlConverterService) {
        "ngInject";

        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        // Disabled field if not editable
        if (this.field.editable == "false") {
            this.field.disabled = true;
        }
        // Initi this.edit according "this.field.editable" value
        var edit = true;
        this.isEdited = [];
        if (this.edit != "true" || this.field.editable == "false") {
            edit = false;
        }
        for (var i = 0; i < this.fieldValue.length; i++) {
            this.isEdited[i] = edit;
        }
        this.edit = edit;
        // console.log(12, this.fieldValue, this.isEdited, this.field.name);

        // Init default value
        var isFieldValueEmpty = this.fieldValue.some(function(i) {
            return !!i;
        });
        if (this.field.value) {
            this.fieldValue = isFieldValueEmpty || this.field.value;
            this.saveData(this.fieldValue);
        }
        this.type = this.field.type || "text";

        this.getValues();

        console.log(478, this.type, this.fieldValue, this.field.name);
    }

    getValues() {
        var value = this.XmlConverterService.getValue(
            this.md,
            this.space,
            this.field.name
        );
        if (this.type == "date" || this.type == "datetime-local") {
            console.log(147, value.map(d => new Date(d)));
            return value.map(d => new Date(d));
        }
        return value;
    }

    $onChanges(changes) {
        if (changes.md) {
            this.fieldValue = !this.getValues().length || this.getValues()[0] == "EMPTY" ? [""] :
                this.getValues();
            if (!changes.md.isFirstChange()) {
                // this.saveData();
                for (var i = 0; i < this.fieldValue.length; i++) {
                    this.isEdited[i] = this.edit;
                }
            }
            // console.log(7, this.field.name, this.fieldValue);
            this.saveData();
        }
    }

    saveData(items) {
        // console.log(8, this.field.name, this.fieldValue);
        if (items !== undefined) {
            // console.log('save items', items);
            if (this.type == "date") {
                items = items.map(d => d.toISOString().slice(0, 10));
            } else if (this.type == "datetime-local") {
                items = items.map(d => d.toISOString());
            }
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
        if (
            this.field.mandatory == "true" &&
            this.fieldValue.length &&
            this.fieldValue.every(function(i) {
                if (i != undefined) {
                    return !i.length;
                }
            })
        ) {
            return false;
        }
        return true;
    }
    isEmptyField(key) {
        return !this.fieldValue[key];
    }

    changeEdit(key) {
        if (this.field.editable == "both") {
            this.isEdited[key] = !this.isEdited[key];
        } else if (this.field.editable == "false") {
            this.isEdited[key] = false;
        } else {
            this.isEdited[key] = true;
        }
    }

    addItem() {
        this.fieldValue.push("");
        this.isEdited.push(this.edit);
    }

    removeItem(key) {
        if (this.fieldValue.length > 1) {
            this.fieldValue[key] = undefined;
        }
    }
};

export const mdFormElementComponent = {
    bindings: {
        space: "@",
        multi: "@",
        label: "@",
        field: "<",
        list: "<",
        edit: "@",
        md: "<",
        update: "&",
        selectItem: "&"
    },
    template: ($element, $attrs) => {
        "ngInject";
        var type = $attrs.type || "text";
        return templates[type];
    },
    controller: mdFormElementController
};