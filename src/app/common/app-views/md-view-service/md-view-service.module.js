import uiRouter from '@uirouter/angularjs';
import {
    mdViewServiceComponent
} from './md-view-service.component';

export const mdViewService = angular
    .module('components.mdViewService', [
        uiRouter,
    ])
    .component('mdViewServiceComponent', mdViewServiceComponent)
    .config(($stateProvider) => {
        'ngInject';

        const mdViewServiceState = {
            name: 'app.mdViewService',
            url: '/md-view-service',
            resolve: {
                mdViewLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.mdViewService.locales[lang]);
                }
            },
            component: 'mdViewServiceComponent'
        };

        $stateProvider.state(mdViewServiceState);
    })
    .name;