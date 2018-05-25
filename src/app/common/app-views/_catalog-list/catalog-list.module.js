import uiRouter from '@uirouter/angularjs';
import {catalogListComponent} from './catalog-list.component';

export const catalogList = angular
    .module('components.catalogList', [
        uiRouter,
    ])
    .component('catalogListComponent', catalogListComponent)
    .config(($stateProvider) => {
        'ngInject';

        const catalogState = {
            name: 'app.catalogList',
            url: '/catalog-list',
            resolve: {
                catalogLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.catalogList.locales[lang]);
                }
            },
            component: 'catalogListComponent'
        };

        $stateProvider.state(catalogState);
    })
    .name;