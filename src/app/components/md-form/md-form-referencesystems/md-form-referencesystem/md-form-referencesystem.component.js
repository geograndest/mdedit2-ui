import template from './md-form-referencesystem.html';

const mdFormReferencesystemController = class MdFormReferencesystemController {
    constructor(XmlConverterService) {
        'ngInject';
        // console.log('constructor: mdFormContactController controller');
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        // console.log(1, this.fields, this.referencesystem);
    }

    $onChanges(changes) {
    }

    onSave(space, field, fieldValue, separator) {
        console.log('save', this.key, fieldValue, field, this.referencesystem);
        // Get fileName extension and save
        // if (field == 'fileName') {
        //     var ext = fieldValue[0].split('.').pop();
        // }
        // this.XmlConverterService.setValue(this.referencesystem, space, 'fileType', ext, separator);
        this.XmlConverterService.setValue(this.referencesystem, space, field, fieldValue, separator);
        this.updateReferencesystem({
            key: this.key,
            referencesystem: this.referencesystem
        });
    }

    onRemove() {
        console.log('remove', this.key);
        this.removeReferencesystem({
            key: this.key
        });
    }

    // onSelectGeographixExtent(item, model, label, index) {
    //     console.log('select', this.key);
    //     this.XmlConverterService.setValue(this.referencesystem, 'md', 'extentName', [item.name]);
    //     this.XmlConverterService.setValue(this.referencesystem, 'md', 'browseGraphicWestBound', [item.west]);
    //     this.XmlConverterService.setValue(this.referencesystem, 'md', 'browseGraphicEastBound', [item.east]);
    //     this.XmlConverterService.setValue(this.referencesystem, 'md', 'browseGraphicSouthBound', [item.south]);
    //     this.XmlConverterService.setValue(this.referencesystem, 'md', 'browseGraphicNorthBound', [item.north]);

    //     // Copy of this.referencesystem to force change value in $onChanges child function
    //     this.referencesystem = angular.copy(this.referencesystem);
    // }
}

export const mdFormReferencesystemComponent = {
    bindings: {
        multi: '@',
        key: '@',
        referencesystem: '<',
        fields: '<',
        list: '<',
        updateReferencesystem: '&',
        removeReferencesystem: '&'
    },
    template: template,
    controller: mdFormReferencesystemController,
};