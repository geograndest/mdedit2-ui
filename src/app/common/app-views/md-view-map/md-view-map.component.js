import template from './md-view-map.html';

const mdViewMapController = class MdViewMapController {
    constructor() {}

    $onInit() {
        this.codelists = this.appLocales.codelists;
    }

}

export const mdViewMapComponent = {
    bindings: {
        appLocales: '<',
        mdViewLocales: '<',
        md: '@',
        csw: '<',
        mdView: '<'
    },
    template: template,
    controller: mdViewMapController,
};