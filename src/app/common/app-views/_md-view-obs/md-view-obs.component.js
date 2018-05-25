import template from './md-view-obs.html';

const mdViewObsController = class MdViewObsController {
    constructor() {}

    $onInit() {
        this.codelists = this.appLocales.codelists;
    }

}

export const mdViewObsComponent = {
    bindings: {
        appLocales: '<',
        md: '@',
        csw: '<',
        mdView: '<'
    },
    template: template,
    controller: mdViewObsController,
};