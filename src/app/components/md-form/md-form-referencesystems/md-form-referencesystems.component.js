import template from './md-form-referencesystems.html';

const mdFormReferencesystemsController = class MdFormReferencesystemsController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    getValues() {
        var referencesystems = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        if (referencesystems.length === 0) {
            referencesystems = [{}];
        }
        this.referencesystems = []
        for (var r = 0; r < referencesystems.length; r++) {
            var code = this.XmlConverterService.getValue(referencesystems[r], this.space, 'referenceSystemCode')[0]
            if (code) {
                for (var l = 0; l < this.list.length; l++) {
                    if (code.toLowerCase().includes(this.list[l].search.toLowerCase())) {
                        referencesystems[r] = this.XmlConverterService.setValue(referencesystems[r], this.space, 'referenceSystemCode', [this.list[l].name])
                    }
                }
                this.referencesystems.push(referencesystems[r])
            }
        }
        if (!this.referencesystems.length) {
            this.referencesystems.push({});
        }
    }

    isValidField() {
        for (var i = 0; i < this.referencesystems.length; i++) {
            if (this.XmlConverterService.getValue(this.referencesystems[i], this.space, 'referenceSystemCode').length && this.XmlConverterService.getValue(this.referencesystems[i], this.space, 'referenceSystemCode')[0]) {
                return true;
            }
        }
        return false;
    }

    $onChanges(changes) {
        if (changes.md) {
            this.getValues()
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

        var referencesystems = []
        for (var r = 0; r < this.referencesystems.length; r++) {
            var ref = angular.copy(this.referencesystems[r])
            var code = this.XmlConverterService.getValue(ref, this.space, 'referenceSystemCode')[0]
            if (code) {
                for (var l = 0; l < this.list.length; l++) {
                    if (code.toLowerCase().includes(this.list[l].search.toLowerCase())) {
                        ref = this.XmlConverterService.setValue(ref, this.space, 'referenceSystemCode', [this.list[l].value])
                    }
                }
                referencesystems.push(ref)
            }
        }
        if (!referencesystems.length) {
            referencesystems.push({});
        }

        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: referencesystems
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