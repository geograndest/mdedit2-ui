import template from './md-form-identifiers.html';

const mdFormIdentifiersController = class MdFormIdentifiersController {
    constructor(XmlConverterService) {
        'ngInject';
        // this.UtilsService = UtilsService;
        this.XmlConverterService = XmlConverterService;
        // console.log('constructor: mdFormContactsController controller');
    }

    $onInit() {}

    getValues() {
        this.identifiers = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        this.identifiersList = angular.copy(this.identifiers);
        // var newIdentifiers = angular.copy(identifiers);
        for (var i = 0; i < this.identifiersList.length; i++) {
            // console.log(
            //     identifiers[i],
            //     this.XmlConverterService.getValue(identifiers[i], this.space, 'mdCode'),
            //     this.XmlConverterService.getValue(identifiers[i], this.space, 'mdCode').length,
            //     this.XmlConverterService.getValue(identifiers[i], this.space, 'code'),
            //     this.XmlConverterService.getValue(identifiers[i], this.space, 'code').length
            // );
            // if (this.XmlConverterService.getValue(identifiers[i], this.space, 'rsCode').length) {
            //     console.log(12, this.XmlConverterService.getValue(this.md, this.space, 'rsCode'));
            //     // geographicExtents.push(identifiers[i]);
            // }
            if (this.XmlConverterService.getValue(this.identifiersList[i], this.space, 'mdCode').length) {
                var mdCode = this.XmlConverterService.getValue(this.identifiersList[i], this.space, 'mdCode');
                // this.XmlConverterService.setValue(identifiers[i], this.space, 'mdCode', mdCode);
                // console.log(
                //     mdCode,
                //     this.XmlConverterService.setValue({}, this.space, 'code', mdCode)
                // );
                this.identifiersList[i] = this.XmlConverterService.setValue({}, this.space, 'code', mdCode);
                // console.log(13, this.XmlConverterService.getValue(this.md, this.space, 'mdCode'));
                // newIdentifiers.push(identifiers[i]);
            }
        }
        // return geographicExtents;

        // console.log(123, this.space, this.field.name);
        // console.log(identifiers);

        // return this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        // return this.identifiersList;

    }

    $onChanges(changes) {
        if (changes.md) {
            // this.identifiers = this.getValues();
            this.getValues();
            // console.log(this.identifiers);
        }
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
        // var identifiers = angular.copy(this.identifiers);
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
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormIdentifiersController,
};