import uiRouter from '@uirouter/angularjs';
import {
    mdEditDataComponent
} from './md-edit-data.component';

export const mdEditData = angular
    .module('components.mdEditData', [
        uiRouter,
    ])
    .component('mdEditDataComponent', mdEditDataComponent)
    .config(($stateProvider) => {
        'ngInject';

        const mdEditDataState = {
            name: 'app.mdEditData',
            url: '/md-edit-data',
            resolve: {
                mdEditLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.mdEditData.locales[lang]);
                }
            },
            component: 'mdEditDataComponent'
        };
        
        $stateProvider.state(mdEditDataState);
    })
    .name;