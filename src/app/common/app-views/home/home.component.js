import template from './home.html';

const homeController = class HomeController {
    constructor(UtilsService) {
        'ngInject';
        this.UtilsService = UtilsService;
    }

    $onInit() {
        // this.cswList = this.appConfig.catalog.csw_list;
    }

}

export const homeComponent = {
    bindings: {
        $transition$: '<',
        appConfig: '<',
        appLocales: '<',
        homeLocales: '<'
    },
    template: template,
    controller: homeController,
};