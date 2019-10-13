import template from './md-form-identifiers.html';

const mdFormIdentifiersController = class MdFormIdentifiersController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        // this.isValid = false;
    }

    getValues() {
        this.identifiers = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        if (this.identifiers.length == 0) {
            this.identifiers = [{}];
        }
        this.identifiersList = angular.copy(this.identifiers);
        for (var i = 0; i < this.identifiersList.length; i++) {
            if (this.XmlConverterService.getValue(this.identifiersList[i], this.space, 'mdCode').length) {
                var mdCode = this.XmlConverterService.getValue(this.identifiersList[i], this.space, 'mdCode');
                this.identifiersList[i] = this.XmlConverterService.setValue({}, this.space, 'code', mdCode);
            }
        }
    }

    $onChanges(changes) {
        if (changes.md) {
            this.md = angular.copy(this.md);
            this.getValues();
        }
    }

    isValidField() {
        for (var i = 0; i < this.identifiers.length; i++) {
            if (this.XmlConverterService.getValue(this.identifiers[i], this.space, 'mdCode').length && this.XmlConverterService.getValue(this.identifiers[i], this.space, 'mdCode')[0]) {
                return true;
            }
        }
        return false;
    }

    onAddIdentifier() {
        this.identifiersList.push({});
    }

    onRemoveIdentifier(key) {
        if (this.identifiersList.length > 1) {
            this.identifiersList.splice(key, 1);
        } else {
            this.identifiersList[key] = {};
        }
    }

    updateIdentifiers(key, identifier) {
        // Use 'mdCode' if no 'codeSpace'
        var codeSpace = this.XmlConverterService.getValue(identifier, this.space, 'codeSpace');
        if (!codeSpace.length) {
            var code = this.XmlConverterService.getValue(identifier, this.space, 'code');
            identifier = this.XmlConverterService.setValue({}, this.space, 'mdCode', code);
        }
        this.identifiers[key] = identifier;
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: this.identifiers
        });
    }
}

export const mdFormIdentifiersComponent = {
    bindings: {
        md: '<',
        field: '<',
        locales: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormIdentifiersController,
};