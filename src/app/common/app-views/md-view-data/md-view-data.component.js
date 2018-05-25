import template from './md-view-data.html';

const mdViewDataController = class MdViewDataController {
    constructor() {}

    $onInit() {
        this.codelists = this.appLocales.codelists;
    }

}

export const mdViewDataComponent = {
    bindings: {
        appLocales: '<',
        mdViewLocales: '<',
        md: '@',
        csw: '<',
        mdView: '<'
    },
    template: template,
    controller: mdViewDataController,
};