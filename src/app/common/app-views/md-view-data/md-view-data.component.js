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
        this.StoreService.onSetData(() => {
            this.mdjs = this.StoreService.getData().mdjs;
        });
        this.codelists = this.mdViewLocales.codelists;
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
    },
    template: template,
    controller: mdViewDataController,
};