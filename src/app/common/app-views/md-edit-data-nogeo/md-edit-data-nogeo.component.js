import template from './md-edit-data-nogeo.html';

const mdEditDataNogeoController = class MdEditDataNogeoController {
    constructor(StoreService, XmlConverterService) {
        'ngInject';
        this.StoreService = StoreService;
        this.XmlConverterService = XmlConverterService;
        this.mdjs = this.StoreService.getData().mdjs;
    }

    $onInit() {
        this.simpleView = true;
        this.StoreService.onSetData(() => {
            this.mdjs = this.StoreService.getData().mdjs;
        });
        this.extentsFile = this.appConfig.views.mdEditDataNogeo.extentsFile;
        this.active = this.mdEditLocales.defaultActiveTab
        this.tabs = this.mdEditLocales.tabs
        this.apiFiles = this.appConfig.app.api.files;
        //  Just to have current date value and can use it in the view
        this.currentDate = new Date()
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

    showSimpleView(show) {
        this.simpleView = show;
    }
}

export const mdEditDataNogeoComponent = {
    bindings: {
        appConfig: '<',
        appLocales: '<',
        mdEditLocales: '<',
        user: '<',
        directory: '@'
    },
    template: template,
    controller: mdEditDataNogeoController
};