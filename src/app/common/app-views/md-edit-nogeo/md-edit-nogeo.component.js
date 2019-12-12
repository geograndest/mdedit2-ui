import template from './md-edit-nogeo.html';

const mdEditNogeoController = class MdEditNogeoController {
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
        this.extentsFile = this.appConfig.views.mdEditNogeo.extentsFile;
        this.active = this.mdEditLocales.defaultActiveTab
        this.tabs = this.mdEditLocales.tabs
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
}

export const mdEditNogeoComponent = {
    bindings: {
        appConfig: '<',
        appLocales: '<',
        mdEditLocales: '<'
    },
    template: template,
    controller: mdEditNogeoController,
};