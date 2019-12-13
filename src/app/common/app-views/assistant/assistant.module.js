import uiRouter from '@uirouter/angularjs';
import {
    assistantComponent
} from './assistant.component';

export const assistant = angular
    .module('components.assistant', [
        uiRouter,
    ])
    .component('assistantComponent', assistantComponent)
    .config(($stateProvider) => {
        'ngInject';

        const assistantState = {
            name: 'app.assistant',
            url: '/assistant',
            params: {
                // url: {
                //     value: 'none',
                //     squash: false
                // }
            },
            resolve: {
                assistantLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.assistant.locales[lang]);
                },
                assistantAuth: (auth) => {
                    'ngInject';
                    return auth;
                }
            },
            component: 'assistantComponent'
        };

        $stateProvider.state(assistantState);
    })
    .name;