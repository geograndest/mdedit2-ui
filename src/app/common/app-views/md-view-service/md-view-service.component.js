import template from './md-view-service.html';

const mdViewServiceController = class MdViewServiceController {
    constructor() {}

    $onInit() {
        this.codelists = this.appLocales.codelists;
    }

}

export const mdViewServiceComponent = {
    bindings: {
        appLocales: '<',
        mdViewLocales: '<',
        md: '@',
        csw: '<',
        mdView: '<'
    },
    template: template,
    controller: mdViewServiceController,
};