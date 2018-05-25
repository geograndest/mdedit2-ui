// import template from './md-form.html';

const mdFormController = class MdFormController {
    constructor(StoreService, XmlConverterService) {
        // 'ngInject';
        // console.log('constructor: mdFormComponent controller');
        // this.StoreService = StoreService;
        // this.XmlConverterService = XmlConverterService;
        // this.mdjs = this.StoreService.getData().mdjs;
    }

    // $onInit() {
    //     // console.log('init: mdFormComponent controller', this.mdFormLocales, this.mdjs);
    //     this.StoreService.onSetData(() => {
    //         this.mdjs = this.StoreService.getData().mdjs;
    //     });
    // }

    // update(field, fieldValue, separator) {
    //     this.XmlConverterService.setValue(this.mdjs, field, fieldValue, separator);
    //     this.StoreService.setData({ mdjs: this.mdjs });
    // }

    // getValue(field) {
    //     return this.XmlConverterService.getValue(this.mdjs, field);
    // }
}

export const mdFormComponent = {
    bindings: {
        // mdFormLocales: '<'
    },
    // template: template,
    controller: mdFormController,
};