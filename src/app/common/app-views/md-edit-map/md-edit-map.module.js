import uiRouter from '@uirouter/angularjs';
import {
    mdEditMapComponent
} from './md-edit-map.component';

export const mdEditMap = angular
    .module('components.mdEditMap', [
        uiRouter,
    ])
    .component('mdEditMapComponent', mdEditMapComponent)
    .config(($stateProvider) => {
        'ngInject';

        const mdEditMapState = {
            name: 'app.mdEditMap',
            url: '/md-edit-map',
            resolve: {
                mdEditLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.mdEditMap.locales[lang]);
                }
            },
            component: 'mdEditMapComponent'
        };

        $stateProvider.state(mdEditMapState);
    })
    .name;