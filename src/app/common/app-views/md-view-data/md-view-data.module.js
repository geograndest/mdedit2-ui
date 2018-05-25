import uiRouter from '@uirouter/angularjs';
import {
    mdViewDataComponent
} from './md-view-data.component';

export const mdViewData = angular
    .module('components.mdViewData', [
        uiRouter,
    ])
    .component('mdViewDataComponent', mdViewDataComponent)
    .config(($stateProvider) => {
        'ngInject';

        const mdViewDataState = {
            name: 'app.mdViewData',
            url: '/md-view-data',
            params: {
                name: {
                    value: 'none',
                    squash: false
                }
            },
            resolve: {
                mdViewLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.mdViewData.locales[lang]);
                }
            },
            component: 'mdViewDataComponent'
        };

        $stateProvider.state(mdViewDataState);
    })
    .name;