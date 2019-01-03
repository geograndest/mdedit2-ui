import template from './md-form-referencesystems.html';

const mdFormReferencesystemsController = class MdFormReferencesystemsController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    getValues() {
        return this.XmlConverterService.getValue(this.md, this.space, this.field.name);
    }

    isValidField(key) {
        return true;
    }

    $onChanges(changes) {
        if (changes.md) {
            this.referencesystems = this.getValues();
            if (this.referencesystems.length == 0) {
                this.referencesystems = [{}];
            }
        }
    }

    onAddReferencesystem() {
        this.referencesystems.push({});
    }

    onRemoveReferencesystem(key) {
        if (this.referencesystems.length > 1) {
            this.referencesystems.splice(key, 1);
        } else {
            this.referencesystems[key] = {};
        }
    }

    updateReferencesystems(key, referencesystem) {
        referencesystem = this.XmlConverterService.setValue(referencesystem, this.space, 'referenceSystemCodeSpace', 'EPSG');
        this.referencesystems[key] = referencesystem;
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: this.referencesystems
        });
    }
}

export const mdFormReferencesystemsComponent = {
    bindings: {
        md: '<',
        field: '<',
        list: '<',
        locales: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormReferencesystemsController,
};