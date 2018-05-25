import template from './md-form-browsegraphic.html';

const mdFormBrowsegraphicController = class MdFormBrowsegraphicController {
    constructor(XmlConverterService) {
        'ngInject';
        // console.log('constructor: mdFormContactController controller');
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        // console.log(1, this.fields, this.browsegraphic);
    }

    $onChanges(changes) {
    }

    onSave(space, field, fieldValue, separator) {
        console.log('save', this.key, fieldValue, field);
        // Get fileName extension and save
        if (field == 'fileName') {
            var ext = fieldValue[0].split('.').pop();
        }
        this.XmlConverterService.setValue(this.browsegraphic, space, 'fileType', ext, separator);
        this.XmlConverterService.setValue(this.browsegraphic, space, field, fieldValue, separator);
        this.updateBrowsegraphic({
            key: this.key,
            browsegraphic: this.browsegraphic
        });
    }

    onRemove() {
        console.log('remove', this.key);
        this.removeBrowsegraphic({
            key: this.key
        });
    }

    // onSelectGeographixExtent(item, model, label, index) {
    //     console.log('select', this.key);
    //     this.XmlConverterService.setValue(this.browsegraphic, 'md', 'extentName', [item.name]);
    //     this.XmlConverterService.setValue(this.browsegraphic, 'md', 'browseGraphicWestBound', [item.west]);
    //     this.XmlConverterService.setValue(this.browsegraphic, 'md', 'browseGraphicEastBound', [item.east]);
    //     this.XmlConverterService.setValue(this.browsegraphic, 'md', 'browseGraphicSouthBound', [item.south]);
    //     this.XmlConverterService.setValue(this.browsegraphic, 'md', 'browseGraphicNorthBound', [item.north]);

    //     // Copy of this.browsegraphic to force change value in $onChanges child function
    //     this.browsegraphic = angular.copy(this.browsegraphic);
    // }
}

export const mdFormBrowsegraphicComponent = {
    bindings: {
        multi: '@',
        key: '@',
        browsegraphic: '<',
        fields: '<',
        extents: '<',
        updateBrowsegraphic: '&',
        removeBrowsegraphic: '&'
    },
    template: template,
    controller: mdFormBrowsegraphicController,
};