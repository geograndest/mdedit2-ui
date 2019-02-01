import template from './home.html';

const homeController = class HomeController {
    constructor($state, UtilsService) {
        'ngInject';
        this.$state = $state;
        this.UtilsService = UtilsService;
    }

    $onInit() {}

    changeView(view, options) {
        this.$state.transitionTo(view, options, {
            reload: true,
            inherit: false,
            notify: false
        });
    }

}

export const homeComponent = {
    bindings: {
        $transition$: '<',
        appConfig: '<',
        appLocales: '<',
        homeLocales: '<',
        homeAuth: '<'
    },
    template: template,
    controller: homeController,
};