import uiRouter from '@uirouter/angularjs';
import {
    mdEditData2Component
} from './md-edit-data2.component';

export const mdEditData2 = angular
    .module('components.mdEditData2', [
        uiRouter,
    ])
    .component('mdEditData2Component', mdEditData2Component)
    .config(($stateProvider) => {
        'ngInject';

        const mdEditData2State = {
            name: 'app.mdEditData2',
            url: '/md-edit-data2',
            resolve: {
                mdEditLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.mdEditData2.locales[lang]);
                }
            },
            component: 'mdEditData2Component'
        };

        $stateProvider.state(mdEditData2State);
    })
    .name;