import template from './md-form-keyword.html';

const mdFormKeywordController = class MdFormKeywordController {
    constructor(XmlConverterService) {
        'ngInject';
        // console.log('constructor: mdFormContactController controller');
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        // console.log(1, this.fields, this.keyword);
    }

    $onChanges(changes) {}

    onSave(space, field, fieldValue, separator) {
        console.log('save 5', this.key, fieldValue, field, this.keyword);
        // Get fileName extension and save
        // if (field == 'fileName') {
        //     var ext = fieldValue[0].split('.').pop();
        // }
        // this.XmlConverterService.setValue(this.keyword, space, 'fileType', ext, separator);
        this.XmlConverterService.setValue(this.keyword, space, field, fieldValue, separator);
        this.updateKeyword({
            key: this.key,
            keyword: this.keyword
        });
    }

    onRemove() {
        console.log('remove', this.key);
        this.removeKeyword({
            key: this.key
        });
    }

    // onSelectGeographixExtent(item, model, label, index) {
    //     console.log('select', this.key);
    //     this.XmlConverterService.setValue(this.keyword, 'md', 'extentName', [item.name]);
    //     this.XmlConverterService.setValue(this.keyword, 'md', 'browseGraphicWestBound', [item.west]);
    //     this.XmlConverterService.setValue(this.keyword, 'md', 'browseGraphicEastBound', [item.east]);
    //     this.XmlConverterService.setValue(this.keyword, 'md', 'browseGraphicSouthBound', [item.south]);
    //     this.XmlConverterService.setValue(this.keyword, 'md', 'browseGraphicNorthBound', [item.north]);

    //     // Copy of this.keyword to force change value in $onChanges child function
    //     this.keyword = angular.copy(this.keyword);
    // }
}

export const mdFormKeywordComponent = {
    bindings: {
        multi: '@',
        key: '@',
        keyword: '<',
        fields: '<',
        // extents: '<',
        list: '<',
        updateKeyword: '&',
        removeKeyword: '&'
    },
    template: template,
    controller: mdFormKeywordController,
};