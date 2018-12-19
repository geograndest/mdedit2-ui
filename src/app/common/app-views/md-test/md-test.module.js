import uiRouter from '@uirouter/angularjs';
import {
    mdTestComponent
} from './md-test.component';

export const mdTest = angular
    .module('components.mdTest', [
        uiRouter,
    ])
    .component('mdTestComponent', mdTestComponent)
    .config(($stateProvider) => {
        'ngInject';

        const mdTestState = {
            name: 'app.mdTest',
            url: '/md-test',
            resolve: {
                mdEditLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.mdTest.locales[lang]);
                }
            },
            component: 'mdTestComponent'
        };

        $stateProvider.state(mdTestState);
    })
    .name;