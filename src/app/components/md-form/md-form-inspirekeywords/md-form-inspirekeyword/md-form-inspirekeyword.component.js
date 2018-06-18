import template from './md-form-inspirekeyword.html';

const mdFormInspirekeywordController = class MdFormInspirekeywordController {
    constructor(XmlConverterService) {
        'ngInject';
        // console.log('constructor: mdFormContactController controller');
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        // console.log(1, this.fields, this.inspirekeyword);
    }

    $onChanges(changes) {
    }

    onSave(space, field, fieldValue, separator) {
        console.log('save', this.key, fieldValue, field, this.inspirekeyword);
        // Get fileName extension and save
        // if (field == 'fileName') {
        //     var ext = fieldValue[0].split('.').pop();
        // }
        // this.XmlConverterService.setValue(this.inspirekeyword, space, 'fileType', ext, separator);
        this.XmlConverterService.setValue(this.inspirekeyword, space, field, fieldValue, separator);
        this.updateInspirekeyword({
            key: this.key,
            inspirekeyword: this.inspirekeyword
        });
    }

    onRemove() {
        console.log('remove', this.key);
        this.removeInspirekeyword({
            key: this.key
        });
    }

    // onSelectGeographixExtent(item, model, label, index) {
    //     console.log('select', this.key);
    //     this.XmlConverterService.setValue(this.inspirekeyword, 'md', 'extentName', [item.name]);
    //     this.XmlConverterService.setValue(this.inspirekeyword, 'md', 'browseGraphicWestBound', [item.west]);
    //     this.XmlConverterService.setValue(this.inspirekeyword, 'md', 'browseGraphicEastBound', [item.east]);
    //     this.XmlConverterService.setValue(this.inspirekeyword, 'md', 'browseGraphicSouthBound', [item.south]);
    //     this.XmlConverterService.setValue(this.inspirekeyword, 'md', 'browseGraphicNorthBound', [item.north]);

    //     // Copy of this.inspirekeyword to force change value in $onChanges child function
    //     this.inspirekeyword = angular.copy(this.inspirekeyword);
    // }
}

export const mdFormInspirekeywordComponent = {
    bindings: {
        multi: '@',
        key: '@',
        inspirekeyword: '<',
        fields: '<',
        // extents: '<',
        list: '<',
        updateInspirekeyword: '&',
        removeInspirekeyword: '&'
    },
    template: template,
    controller: mdFormInspirekeywordController,
};