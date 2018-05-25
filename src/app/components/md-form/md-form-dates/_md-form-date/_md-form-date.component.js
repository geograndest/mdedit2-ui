import template from './md-form-date.html';

const mdFormDateController = class MdFormDateController {
    constructor(XmlConverterService) {
        'ngInject';
        // console.log('constructor: mdFormContactController controller');
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        // console.log(1, this.fields, this.date);
    }

    $onChanges(changes) {
    }

    onSave(space, field, fieldValue, separator) {
        console.log('save', this.key, fieldValue, field, this.date);
        // Get fileName extension and save
        // if (field == 'fileName') {
        //     var ext = fieldValue[0].split('.').pop();
        // }
        // this.XmlConverterService.setValue(this.date, space, 'fileType', ext, separator);
        this.XmlConverterService.setValue(this.date, space, field, fieldValue, separator);
        this.updateDate({
            key: this.key,
            date: this.date
        });
    }

    onRemove() {
        console.log('remove', this.key);
        this.removeDate({
            key: this.key
        });
    }

    // onSelectGeographixExtent(item, model, label, index) {
    //     console.log('select', this.key);
    //     this.XmlConverterService.setValue(this.date, 'md', 'extentName', [item.name]);
    //     this.XmlConverterService.setValue(this.date, 'md', 'browseGraphicWestBound', [item.west]);
    //     this.XmlConverterService.setValue(this.date, 'md', 'browseGraphicEastBound', [item.east]);
    //     this.XmlConverterService.setValue(this.date, 'md', 'browseGraphicSouthBound', [item.south]);
    //     this.XmlConverterService.setValue(this.date, 'md', 'browseGraphicNorthBound', [item.north]);

    //     // Copy of this.date to force change value in $onChanges child function
    //     this.date = angular.copy(this.date);
    // }
}

export const mdFormDateComponent = {
    bindings: {
        multi: '@',
        key: '@',
        date: '<',
        fields: '<',
        extents: '<',
        updateDate: '&',
        removeDate: '&'
    },
    template: template,
    controller: mdFormDateController,
};