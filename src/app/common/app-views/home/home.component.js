import template from './home.html';

const homeController = class HomeController {
    constructor($state, $sce, UtilsService) {
        'ngInject';
        this.$state = $state;
        this.$sce = $sce;
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

    safeHtml(html) {
        return this.$sce.trustAsHtml(html);
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