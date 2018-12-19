import template from './home.html';

const homeController = class HomeController {
    constructor(UtilsService) {
        'ngInject';
        this.UtilsService = UtilsService;
    }

    $onInit() {}

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