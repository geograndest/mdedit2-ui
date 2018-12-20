import tpl_text from "./md-form-text.html";
import tpl_select from "./md-form-select.html";
import tpl_textarea from "./md-form-textarea.html";

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

        var isFieldValueEmpty = this.fieldValue.every((value) => {
            return value == '';
        });
        if (isFieldValueEmpty && this.field.value) {
            this.fieldValue = this.field.value;
            this.saveData(this.fieldValue);
        }
        this.type = this.field.type || "text";


        this.fieldValue = this.getValues();
    }

    getValues() {
        var value = this.XmlConverterService.getValue(
            this.md,
            this.space,
            this.field.name
        );
        if (this.type == "date" || this.type == "datetime-local") {
            return value.map((d) => {
                return new Date(d)
            });
        }
        return value;
    }

    $onChanges(changes) {
        if (changes.md) {
            this.fieldValue = !this.getValues().length ? [""] : this.getValues();
            if (!changes.md.isFirstChange()) {
                for (var i = 0; i < this.fieldValue.length; i++) {
                    this.isEdited[i] = this.edit;
                }
            }
            this.saveData(this.fieldValue);
        }
    }

    saveData(items) {
        if (items !== undefined) {
            if (this.type == "date") {
                items = items.map((d) => {
                    if (d instanceof Date && !isNaN(d)) {
                        return d.toISOString().slice(0, 10);
                    }
                    return d;
                });
            } else if (this.type == "datetime-local") {
                items = items.map((d) => {
                    if (d instanceof Date && !isNaN(d)) {
                        return d.toISOString();
                    }
                    return d;
                });
            }
            this.update({
                space: this.space,
                field: this.field.name,
                fieldValue: items
            });
        }
    }

    onBlur(key, itemValue) {
        console.log('blur', key, itemValue);
        this.changeEdit(key);
        this.fieldValue[key] = itemValue;
        this.saveData(this.fieldValue);
    }

    onSelectItem(item, model, label, index) {
        this.selectItem({
            item: item,
            model: model,
            label: label,
            index: index
        });
    }

    onSelect(key, value) {
        this.selectItem({
            key: key,
            value: this.fieldValue[key]
        });
    }

    isValidField(key) {
        if (
            this.field.mandatory == "true" &&
            this.fieldValue.length &&
            this.fieldValue.every(function (i) {
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