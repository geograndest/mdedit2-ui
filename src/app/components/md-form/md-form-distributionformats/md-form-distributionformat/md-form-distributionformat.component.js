import template from './md-form-distributionformat.html';

const mdFormDistributionformatController = class MdFormDistributionformatController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    $onChanges(changes) {}

    onSave(space, field, fieldValue, separator) {
        this.XmlConverterService.setValue(this.distributionformat, space, field, fieldValue, separator);
        this.updateDistributionformat({
            key: this.key,
            distributionformat: this.distributionformat
        });
    }

    onRemove() {
        this.removeDistributionformat({
            key: this.key
        });
    }
}

export const mdFormDistributionformatComponent = {
    bindings: {
        multi: '@',
        key: '@',
        distributionformat: '<',
        fields: '<',
        extents: '<',
        updateDistributionformat: '&',
        removeDistributionformat: '&'
    },
    template: template,
    controller: mdFormDistributionformatController,
};