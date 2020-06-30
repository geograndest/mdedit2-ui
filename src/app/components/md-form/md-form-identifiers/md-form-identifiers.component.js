import template from './md-form-identifiers.html';

const mdFormIdentifiersController = class MdFormIdentifiersController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    getValues() {
        var identifiers = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        if (identifiers.length == 0) {
            identifiers = [{}];
        }

        this.identifiersList = angular.copy(identifiers);
        for (var i = 0; i < this.identifiersList.length; i++) {
            if (this.XmlConverterService.getValue(this.identifiersList[i], this.space, 'mdCode').length) {
                var mdCode = this.XmlConverterService.getValue(this.identifiersList[i], this.space, 'mdCode');
                this.identifiersList[i] = this.XmlConverterService.setValue({}, this.space, 'code', mdCode);
            }
        }
    }

    $onChanges(changes) {
        if (changes.md) {
            this.getValues();
        }
    }

    isValidField() {
        var identifiers = this.XmlConverterService.getValue(this.md, this.space, 'dataIdentifiersCodes');
        identifiers = identifiers.filter((el) => el);
        return identifiers.length > 0;
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
        var identifiers = angular.copy(this.identifiersList);
        identifiers[key] = identifier;

        for (var i = 0; i < identifiers.length; i++) {
            var codeSpace = this.XmlConverterService.getValue(identifiers[i], this.space, 'codeSpace');
            if (!codeSpace.length || !codeSpace[0]) {
                var code = this.XmlConverterService.getValue(identifiers[i], this.space, 'code');
                identifiers[i] = this.XmlConverterService.setValue({}, this.space, 'mdCode', code);
            }
        }

        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: identifiers
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