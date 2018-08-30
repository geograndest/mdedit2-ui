import template from './md-form-linkages.html';

const mdFormLinkagesController = class MdFormLinkagesController {
    constructor(XmlConverterService) {
        'ngInject';
        // this.UtilsService = UtilsService;
        this.XmlConverterService = XmlConverterService;
        // console.log('constructor: mdFormContactsController controller');
    }

    $onInit() {}

    getValues() {
        return this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        // this.linkagesList = angular.copy(this.linkages);
        // // var newLinkages = angular.copy(linkages);
        // for (var i = 0; i < this.linkagesList.length; i++) {
        //     // console.log(
        //     //     linkages[i],
        //     //     this.XmlConverterService.getValue(linkages[i], this.space, 'mdCode'),
        //     //     this.XmlConverterService.getValue(linkages[i], this.space, 'mdCode').length,
        //     //     this.XmlConverterService.getValue(linkages[i], this.space, 'code'),
        //     //     this.XmlConverterService.getValue(linkages[i], this.space, 'code').length
        //     // );
        //     // if (this.XmlConverterService.getValue(linkages[i], this.space, 'rsCode').length) {
        //     //     console.log(12, this.XmlConverterService.getValue(this.md, this.space, 'rsCode'));
        //     //     // geographicExtents.push(linkages[i]);
        //     // }
        //     if (this.XmlConverterService.getValue(this.linkagesList[i], this.space, 'mdCode').length) {
        //         var mdCode = this.XmlConverterService.getValue(this.linkagesList[i], this.space, 'mdCode');
        //         // this.XmlConverterService.setValue(linkages[i], this.space, 'mdCode', mdCode);
        //         // console.log(
        //         //     mdCode,
        //         //     this.XmlConverterService.setValue({}, this.space, 'code', mdCode)
        //         // );
        //         this.linkagesList[i] = this.XmlConverterService.setValue({}, this.space, 'code', mdCode);
        //         // console.log(13, this.XmlConverterService.getValue(this.md, this.space, 'mdCode'));
        //         // newLinkages.push(linkages[i]);
        //     }
        // }
        // return geographicExtents;

        // console.log(123, this.space, this.field.name);
        // console.log(linkages);

        // return this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        // return this.linkagesList;

    }

    $onChanges(changes) {
        if (changes.md) {
            this.linkages = this.getValues();
            if (this.linkages.length == 0) {
                this.linkages = [{}];
            }
        }
    }

    onAddLinkage() {
        this.linkages.push({});
    }

    onRemoveLinkage(key) {
        if (this.linkages.length > 1) {
            this.linkages.splice(key, 1);
        } else {
            this.linkages[key] = {};
        }
    }

    updateLinkages(key, linkage) {
        linkage = this.XmlConverterService.setValue(linkage, this.space, 'referenceSystemCodeSpace', 'EPSG');
        // console.log(linkage);
        this.linkages[key] = linkage;
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: this.linkages
        });
    }
}

export const mdFormLinkagesComponent = {
    bindings: {
        md: '<',
        field: '<',
        protocols: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormLinkagesController,
};