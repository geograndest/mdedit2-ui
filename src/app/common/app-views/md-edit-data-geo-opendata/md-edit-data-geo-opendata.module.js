import uiRouter from '@uirouter/angularjs';
import {
    mdEditDataGeoOpendataComponent
} from './md-edit-data-geo-opendata.component';

export const mdEditDataGeoOpendata = angular
    .module('components.mdEditDataGeoOpendata', [
        uiRouter,
    ])
    .component('mdEditDataGeoOpendataComponent', mdEditDataGeoOpendataComponent)
    .config(($stateProvider) => {
        'ngInject';

        const mdEditDataGeoOpendataState = {
            name: 'app.mdEditDataGeoOpendata',
            url: '/md-edit-data-geo-opendata',
            resolve: {
                mdEditLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.mdEditDataGeoOpendata.locales[lang]);
                }
            },
            component: 'mdEditDataGeoOpendataComponent'
        };

        $stateProvider.state(mdEditDataGeoOpendataState);
    })
    .name;