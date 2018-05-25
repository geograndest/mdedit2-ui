import template from './md-form-identifier.html';

const mdFormIdentifierController = class MdFormIdentifierController {
    constructor(XmlConverterService) {
        'ngInject';
        // console.log('constructor: mdFormContactController controller');
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        // console.log(1, this.fields, this.identifier);
    }

    $onChanges(changes) {
    }

    onSave(space, field, fieldValue, separator) {
        console.log('save', this.key, fieldValue, field, this.identifier);
        // Get fileName extension and save
        // if (field == 'fileName') {
        //     var ext = fieldValue[0].split('.').pop();
        // }
        // this.XmlConverterService.setValue(this.identifier, space, 'fileType', ext, separator);
        this.XmlConverterService.setValue(this.identifier, space, field, fieldValue, separator);
        this.updateIdentifier({
            key: this.key,
            identifier: this.identifier
        });
    }

    onRemove() {
        console.log('remove', this.key);
        this.removeIdentifier({
            key: this.key
        });
    }

    // onSelectGeographixExtent(item, model, label, index) {
    //     console.log('select', this.key);
    //     this.XmlConverterService.setValue(this.identifier, 'md', 'extentName', [item.name]);
    //     this.XmlConverterService.setValue(this.identifier, 'md', 'browseGraphicWestBound', [item.west]);
    //     this.XmlConverterService.setValue(this.identifier, 'md', 'browseGraphicEastBound', [item.east]);
    //     this.XmlConverterService.setValue(this.identifier, 'md', 'browseGraphicSouthBound', [item.south]);
    //     this.XmlConverterService.setValue(this.identifier, 'md', 'browseGraphicNorthBound', [item.north]);

    //     // Copy of this.identifier to force change value in $onChanges child function
    //     this.identifier = angular.copy(this.identifier);
    // }
}

export const mdFormIdentifierComponent = {
    bindings: {
        multi: '@',
        key: '@',
        identifier: '<',
        fields: '<',
        extents: '<',
        updateIdentifier: '&',
        removeIdentifier: '&'
    },
    template: template,
    controller: mdFormIdentifierController,
};