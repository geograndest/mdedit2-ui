import uiRouter from '@uirouter/angularjs';
import {
    homeComponent
} from './home.component';

export const home = angular
    .module('components.home', [
        uiRouter,
    ])
    .component('homeComponent', homeComponent)
    .config(($stateProvider) => {
        'ngInject';

        const homeState = {
            name: 'app.home',
            url: '/home',
            params: {},
            resolve: {
                homeLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.home.locales[lang]);
                },
                homeAuth: (user) => {
                    'ngInject';
                    return user;
                }
            },
            component: 'homeComponent'
        };

        $stateProvider.state(homeState);
    })
    .name;