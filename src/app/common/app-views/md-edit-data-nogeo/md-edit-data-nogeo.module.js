import uiRouter from '@uirouter/angularjs';
import {
    mdEditDataNogeoComponent
} from './md-edit-data-nogeo.component';

export const mdEditDataNogeo = angular
    .module('components.mdEditDataNogeo', [
        uiRouter,
    ])
    .component('mdEditDataNogeoComponent', mdEditDataNogeoComponent)
    .config(($stateProvider) => {
        'ngInject';

        const mdEditDataNogeoState = {
            name: 'app.mdEditDataNogeo',
            url: '/md-edit-data-nogeo',
            resolve: {
                mdEditLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.mdEditDataNogeo.locales[lang]);
                }
            },
            component: 'mdEditDataNogeoComponent'
        };

        $stateProvider.state(mdEditDataNogeoState);
    })
    .name;