import uiRouter from '@uirouter/angularjs';
import {
    mdViewMapComponent
} from './md-view-map.component';

export const mdViewMap = angular
    .module('components.mdViewMap', [
        uiRouter,
    ])
    .component('mdViewMapComponent', mdViewMapComponent)
    .config(($stateProvider) => {
        'ngInject';

        const mdViewMapState = {
            name: 'app.mdViewMap',
            url: '/md-view-map',
            params: {
                name: {
                    value: 'none',
                    squash: false
                }
            },
            resolve: {
                mdViewLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.mdViewMap.locales[lang]);
                }
            },
            component: 'mdViewMapComponent'
        };

        $stateProvider.state(mdViewMapState);
    })
    .name;