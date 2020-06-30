import uiRouter from '@uirouter/angularjs';
import {
    mdEditDataGeoComponent
} from './md-edit-data-geo.component';

export const mdEditDataGeo = angular
    .module('components.mdEditDataGeo', [
        uiRouter,
    ])
    .component('mdEditDataGeoComponent', mdEditDataGeoComponent)
    .config(($stateProvider) => {
        'ngInject';

        const mdEditDataGeoState = {
            name: 'app.mdEditDataGeo',
            url: '/md-edit-data-geo',
            params: {},
            resolve: {
                viewLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.mdEditDataGeo.locales[lang]);
                }
            },
            component: 'mdEditDataGeoComponent'
        };

        $stateProvider.state(mdEditDataGeoState);
    })
    .name;