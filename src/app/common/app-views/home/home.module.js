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
            url: '/home?name',
            params: {
                name: {
                    value: 'none',
                    squash: false
                }
            },
            resolve: {
                homeLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.home.locales[lang]);
                }
            },
            component: 'homeComponent'
        };

        $stateProvider.state(homeState);
    })
    .name;