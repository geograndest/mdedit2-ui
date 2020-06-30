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
            params: {},
            resolve: {
                assistantLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.assistant.locales[lang]);
                }
            },
            component: 'assistantComponent'
        };

        $stateProvider.state(assistantState);
    })
    .name;