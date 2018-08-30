import template from './md-view-data.html';

const mdViewDataController = class MdViewDataController {
    constructor($window, StoreService, XmlConverterService) {
        'ngInject';
        this.window = window;
        this.StoreService = StoreService;
        this.XmlConverterService = XmlConverterService;
        this.mdjs = this.StoreService.getData().mdjs;
    }

    $onInit() {
        // this.codelists = this.appLocales.codelists;
        this.StoreService.onSetData(() => {
            this.mdjs = this.StoreService.getData().mdjs;
        });
        // this.extentsFile = this.appConfig.views.mdEditData.extentsFile;
        this.codelists = this.appLocales.codelists;
    }

    onClose() {
        this.window.history.back();
    }

}

export const mdViewDataComponent = {
    bindings: {
        appConfig: '<',
        appLocales: '<',
        mdViewLocales: '<'
        // appLocales: '<',
        // mdViewLocales: '<',
        // md: '@',
        // csw: '<',
        // mdView: '<'
    },
    template: template,
    controller: mdViewDataController,
};