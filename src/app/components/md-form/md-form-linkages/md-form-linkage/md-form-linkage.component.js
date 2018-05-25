import template from './md-form-linkage.html';

const mdFormLinkageController = class MdFormLinkageController {
    constructor(XmlConverterService) {
        'ngInject';
        // console.log('constructor: mdFormContactController controller');
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        // console.log(1, this.fields, this.linkage);
    }

    $onChanges(changes) {
    }

    onSave(space, field, fieldValue, separator) {
        console.log('save', this.key, fieldValue, field, this.linkage);
        // Get fileName extension and save
        // if (field == 'fileName') {
        //     var ext = fieldValue[0].split('.').pop();
        // }
        // this.XmlConverterService.setValue(this.linkage, space, 'fileType', ext, separator);
        this.XmlConverterService.setValue(this.linkage, space, field, fieldValue, separator);
        this.updateLinkage({
            key: this.key,
            linkage: this.linkage
        });
    }

    onRemove() {
        console.log('remove', this.key);
        this.removeLinkage({
            key: this.key
        });
    }

    // onSelectGeographixExtent(item, model, label, index) {
    //     console.log('select', this.key);
    //     this.XmlConverterService.setValue(this.linkage, 'md', 'extentName', [item.name]);
    //     this.XmlConverterService.setValue(this.linkage, 'md', 'browseGraphicWestBound', [item.west]);
    //     this.XmlConverterService.setValue(this.linkage, 'md', 'browseGraphicEastBound', [item.east]);
    //     this.XmlConverterService.setValue(this.linkage, 'md', 'browseGraphicSouthBound', [item.south]);
    //     this.XmlConverterService.setValue(this.linkage, 'md', 'browseGraphicNorthBound', [item.north]);

    //     // Copy of this.linkage to force change value in $onChanges child function
    //     this.linkage = angular.copy(this.linkage);
    // }
}

export const mdFormLinkageComponent = {
    bindings: {
        multi: '@',
        key: '@',
        linkage: '<',
        fields: '<',
        protocols: '<',
        updateLinkage: '&',
        removeLinkage: '&'
    },
    template: template,
    controller: mdFormLinkageController,
};