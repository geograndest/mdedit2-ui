import template from './md-form-distributionformat.html';

const mdFormDistributionformatController = class MdFormDistributionformatController {
    constructor(XmlConverterService) {
        'ngInject';
        // console.log('constructor: mdFormContactController controller');
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        // console.log(1, this.fields, this.distributionformat);
    }

    $onChanges(changes) {
    }

    onSave(space, field, fieldValue, separator) {
        console.log('save', this.key, fieldValue, field);
        // Get fileName extension and save
        if (field == 'fileName') {
            var ext = fieldValue[0].split('.').pop();
        }
        this.XmlConverterService.setValue(this.distributionformat, space, 'fileType', ext, separator);
        this.XmlConverterService.setValue(this.distributionformat, space, field, fieldValue, separator);
        this.updateDistributionformat({
            key: this.key,
            distributionformat: this.distributionformat
        });
    }

    onRemove() {
        console.log('remove', this.key);
        this.removeDistributionformat({
            key: this.key
        });
    }

    // onSelectGeographixExtent(item, model, label, index) {
    //     console.log('select', this.key);
    //     this.XmlConverterService.setValue(this.distributionformat, 'md', 'extentName', [item.name]);
    //     this.XmlConverterService.setValue(this.distributionformat, 'md', 'browseGraphicWestBound', [item.west]);
    //     this.XmlConverterService.setValue(this.distributionformat, 'md', 'browseGraphicEastBound', [item.east]);
    //     this.XmlConverterService.setValue(this.distributionformat, 'md', 'browseGraphicSouthBound', [item.south]);
    //     this.XmlConverterService.setValue(this.distributionformat, 'md', 'browseGraphicNorthBound', [item.north]);

    //     // Copy of this.distributionformat to force change value in $onChanges child function
    //     this.distributionformat = angular.copy(this.distributionformat);
    // }
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