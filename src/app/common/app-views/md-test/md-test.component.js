import template from './md-test.html';

const mdTestController = class MdTestController {
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
        this.extentsFile = this.appConfig.views.mdTest.extentsFile;
        //  Just to have current date value and can use it in the view
        this.currentDate = new Date();
    }

    update(space, field, fieldValue, separator) {
        this.mdjs = this.XmlConverterService.setValue(this.mdjs, space, field, fieldValue, separator);
        this.StoreService.setData({
            mdjs: this.mdjs
        });
    }
}

export const mdTestComponent = {
    bindings: {
        appConfig: '<',
        appLocales: '<',
        mdTestLocales: '<'
    },
    template: template,
    controller: mdTestController,
};