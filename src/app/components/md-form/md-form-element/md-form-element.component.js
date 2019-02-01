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
        if ((this.edit && this.edit != "true") || (this.field.editable && this.field.editable == "false")) {
            edit = false;
        }
        for (var i = 0; i < this.fieldValue.length; i++) {
            this.isEdited[i] = edit;
        }
        this.edit = edit;

        // Initi this.fieldValue according config and attribute values
        if (this.value) {
            this.value = [this.value]
        } else {
            this.value = this.field.value
        }
        var isFieldValueEmpty = this.fieldValue.every((value) => {
            return (value !== false);
        });
        if (isFieldValueEmpty && this.value) {
            this.fieldValue = this.value;
            this.saveData(this.fieldValue);
        }

        // Initi this.type according config and attribute values
        if (!this.type) {
            this.type = this.field.type || "text";
        }

        this.fieldValue = this.getValues();
    }

    getValues() {
        var value = this.XmlConverterService.getValue(
            this.md,
            this.space,
            this.field.name
        );
        if (this.type == "date" || this.type == "datetime-local") {
            value = value.map(function(d) {
                if (d) {
                    return new Date(d)
                }
                return d
            });
        }
        value = this.getUniqueValues(value)
        return value;
    }

    getUniqueValues(values) {
        return values.filter((v, i, a) => a.indexOf(v) === i);
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
                    if (d && d instanceof Date && !isNaN(d)) {
                        // Set datetime minutes according to local timezone offset
                        d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
                        return d.toISOString().slice(0, 10);
                    }
                    return d;
                });
            } else if (this.type == "datetime-local") {
                items = items.map((d) => {
                    if (d && d instanceof Date && !isNaN(d)) {
                        return d.toISOString();
                    }
                    return d;
                });
            }
            // Filter array to keep only uniques values
            items = this.getUniqueValues(items)
            this.update({
                space: this.space,
                field: this.field.name,
                fieldValue: items
            });
        }
    }

    onBlur(key, itemValue) {
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

    isValidField() {
        if (
            this.field.mandatory == "true" &&
            this.fieldValue.length &&
            this.fieldValue.every((v) => {
                if (v != undefined && v != null && v != '' && !(Object.prototype.toString.call(v) === "[object Date]" && isNaN(Date.parse(v)))) { // Seems to WORK
                    return false
                }
                return true
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
            this.fieldValue.splice(key, 1);
        } else {
            this.fieldValue[key] = '';
        }
        this.saveData(this.fieldValue);
    }
};

export const mdFormElementComponent = {
    bindings: {
        space: "@",
        multi: "@",
        label: "@",
        field: "<",
        locales: "<",
        list: "<",
        value: "<",
        type: "@",
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