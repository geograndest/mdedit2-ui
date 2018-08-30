import template from './md-form-distributionformats.html';

const mdFormDistributionformatsController = class MdFormDistributionformatsController {
    constructor(XmlConverterService) {
        'ngInject';
        // this.UtilsService = UtilsService;
        this.XmlConverterService = XmlConverterService;
        // console.log('constructor: mdFormContactsController controller');
    }

    $onInit() {
        // this.show = false;
        // this.UtilsService.getJsonFile(this.extentsFile).then((data) => {
        //     this.extents = data;
        //     this.show = true;
        // });
    }

    getValues() {
        // console.log(this.md, this.space, this.field.name);
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
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormDistributionformatsController,
};