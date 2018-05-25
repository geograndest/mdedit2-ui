import template from './md-form-referencesystems.html';

const mdFormReferencesystemsController = class MdFormReferencesystemsController {
    constructor(XmlConverterService) {
        'ngInject';
        // this.UtilsService = UtilsService;
        this.XmlConverterService = XmlConverterService;
        // console.log('constructor: mdFormContactsController controller');
    }

    $onInit() {}

    getValues() {
        return this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        // this.referencesystemsList = angular.copy(this.referencesystems);
        // // var newReferencesystems = angular.copy(referencesystems);
        // for (var i = 0; i < this.referencesystemsList.length; i++) {
        //     // console.log(
        //     //     referencesystems[i],
        //     //     this.XmlConverterService.getValue(referencesystems[i], this.space, 'mdCode'),
        //     //     this.XmlConverterService.getValue(referencesystems[i], this.space, 'mdCode').length,
        //     //     this.XmlConverterService.getValue(referencesystems[i], this.space, 'code'),
        //     //     this.XmlConverterService.getValue(referencesystems[i], this.space, 'code').length
        //     // );
        //     // if (this.XmlConverterService.getValue(referencesystems[i], this.space, 'rsCode').length) {
        //     //     console.log(12, this.XmlConverterService.getValue(this.md, this.space, 'rsCode'));
        //     //     // geographicExtents.push(referencesystems[i]);
        //     // }
        //     if (this.XmlConverterService.getValue(this.referencesystemsList[i], this.space, 'mdCode').length) {
        //         var mdCode = this.XmlConverterService.getValue(this.referencesystemsList[i], this.space, 'mdCode');
        //         // this.XmlConverterService.setValue(referencesystems[i], this.space, 'mdCode', mdCode);
        //         // console.log(
        //         //     mdCode,
        //         //     this.XmlConverterService.setValue({}, this.space, 'code', mdCode)
        //         // );
        //         this.referencesystemsList[i] = this.XmlConverterService.setValue({}, this.space, 'code', mdCode);
        //         // console.log(13, this.XmlConverterService.getValue(this.md, this.space, 'mdCode'));
        //         // newReferencesystems.push(referencesystems[i]);
        //     }
        // }
        // return geographicExtents;

        // console.log(123, this.space, this.field.name);
        // console.log(referencesystems);

        // return this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        // return this.referencesystemsList;

    }

    $onChanges(changes) {
        if (changes.md) {
            this.referencesystems = this.getValues();
            // this.getValues();
            console.log(this.referencesystems);
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
        // console.log(referencesystem);
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
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormReferencesystemsController,
};