import template from './md-edit-data.html';

const mdEditDataController = class MdEditDataController {
    constructor(StoreService, XmlConverterService) {
        'ngInject';
        this.StoreService = StoreService;
        this.XmlConverterService = XmlConverterService;
        this.mdjs = this.StoreService.getData().mdjs;
    }

    $onInit() {
        this.StoreService.onSetData(() => {
            this.mdjs = this.StoreService.getData().mdjs;
        });
        // console.log(9999999, this.appConfig);
        this.extentsFile = this.appConfig.views.mdEditData.extentsFile;
        // console.log(this.extentsFile);
    }

    update(space, field, fieldValue, separator) {
        // if (field.type == 'date') {
        //     console.log(fieldValue, new Date(fieldValue));
        //     fieldValue = 'test';
        // }
        // console.log('save mdjs', this.mdjs, space, field, fieldValue);
        // console.log(this.XmlConverterService.setValue(this.mdjs, space, field, fieldValue, separator), this.mdjs)
        // console.log(1, space, field, fieldValue, separator);
        // console.log(this.XmlConverterService.setValue(this.mdjs, space, field, fieldValue, separator));
        this.mdjs = this.XmlConverterService.setValue(this.mdjs, space, field, fieldValue, separator);
        this.StoreService.setData({
            mdjs: this.mdjs
        });
    }

    // getValue(space, field) {
    //     return this.XmlConverterService.getValue(this.mdjs, space, field)[0];
    // }

}

export const mdEditDataComponent = {
    bindings: {
        appConfig: '<',
        appLocales: '<',
        mdEditLocales: '<'
    },
    template: template,
    controller: mdEditDataController,
};