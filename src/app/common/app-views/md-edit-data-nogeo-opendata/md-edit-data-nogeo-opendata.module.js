import uiRouter from '@uirouter/angularjs';
import {
    mdEditDataNogeoOpendataComponent
} from './md-edit-data-nogeo-opendata.component';

export const mdEditDataNogeoOpendata = angular
    .module('components.mdEditDataNogeoOpendata', [
        uiRouter,
    ])
    .component('mdEditDataNogeoOpendataComponent', mdEditDataNogeoOpendataComponent)
    .config(($stateProvider) => {
        'ngInject';

        const mdEditDataNogeoOpendataState = {
            name: 'app.mdEditDataNogeoOpendata',
            url: '/md-edit-data-nogeo-opendata',
            resolve: {
                mdEditLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.mdEditDataNogeoOpendata.locales[lang]);
                }
            },
            component: 'mdEditDataNogeoOpendataComponent'
        };

        $stateProvider.state(mdEditDataNogeoOpendataState);
    })
    .name;