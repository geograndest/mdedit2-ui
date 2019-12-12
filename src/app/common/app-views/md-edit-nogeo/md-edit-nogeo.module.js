import uiRouter from '@uirouter/angularjs';
import {
    mdEditNogeoComponent
} from './md-edit-nogeo.component';

export const mdEditNogeo = angular
    .module('components.mdEditNogeo', [
        uiRouter,
    ])
    .component('mdEditNogeoComponent', mdEditNogeoComponent)
    .config(($stateProvider) => {
        'ngInject';

        const mdEditNogeoState = {
            name: 'app.mdEditNogeo',
            url: '/md-edit-nogeo',
            resolve: {
                mdEditLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.mdEditNogeo.locales[lang]);
                }
            },
            component: 'mdEditNogeoComponent'
        };

        $stateProvider.state(mdEditNogeoState);
    })
    .name;