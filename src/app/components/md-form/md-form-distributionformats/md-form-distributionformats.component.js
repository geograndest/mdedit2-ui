import template from './md-form-distributionformats.html';

const mdFormDistributionformatsController = class MdFormDistributionformatsController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    isValidField() {
        for (var i = 0; i < this.distributionformats.length; i++) {
            var formatName = this.XmlConverterService.getValue(this.distributionformats[i], this.space, 'formatName')
            var formatVersion = this.XmlConverterService.getValue(this.distributionformats[i], this.space, 'formatVersion')
            if (!formatName[0] || !formatVersion[0]) {
                return false;
            }
        }
        return true;
    }

    getValues() {
        return this.XmlConverterService.getValue(this.md, this.space, this.field.name);
    }

    $onChanges(changes) {
        if (changes.md) {
            this.distributionformats = this.getValues();
            if (this.distributionformats.length == 0) {
                this.distributionformats = [{}];
            }
        }
    }

    onAddDistributionformat() {
        this.distributionformats.push({});
    }

    onRemoveDistributionformat(key) {
        if (this.distributionformats.length > 1) {
            this.distributionformats.splice(key, 1);
        } else {
            this.distributionformats[key] = {};
        }
    }

    updateDistributionformats(key, distributionformat) {
        this.distributionformats[key] = distributionformat;
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: this.distributionformats
        });
    }
}

export const mdFormDistributionformatsComponent = {
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
    controller: mdFormDistributionformatsController,
};