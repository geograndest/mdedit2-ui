import template from './md-edit-data2.html';

const mdEditData2Controller = class MdEditData2Controller {
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
        this.extentsFile = this.appConfig.views.mdEditData2.extentsFile;
        this.active = this.mdEditLocales.defaultActiveTab
        this.tabs = this.mdEditLocales.tabs
        //  Just to have current date value and can use it in the view
        this.currentDate = Date.now()
    }

    update(space, field, fieldValue, separator) {
        this.mdjs = this.XmlConverterService.setValue(this.mdjs, space, field, fieldValue, separator);
        this.StoreService.setData({
            mdjs: this.mdjs
        });
    }

    changeTab(index) {
        this.active = index
        for (var i = 0; i < this.tabs.length; i++) {
            this.tabs[i].active = false
        }
        this.tabs[index].active = true
    }
}

export const mdEditData2Component = {
    bindings: {
        appConfig: '<',
        appLocales: '<',
        mdEditLocales: '<'
    },
    template: template,
    controller: mdEditData2Controller,
};