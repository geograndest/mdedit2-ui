import template from './md-form-linkages.html';

const mdFormLinkagesController = class MdFormLinkagesController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    isValidField(key) {
        return true;
    }

    getValues() {
        return this.XmlConverterService.getValue(this.md, this.space, this.field.name);
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
        locales: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormLinkagesController,
};