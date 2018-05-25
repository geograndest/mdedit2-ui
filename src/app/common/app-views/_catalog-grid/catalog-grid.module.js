import uiRouter from '@uirouter/angularjs';
import {catalogGridComponent} from './catalog-grid.component';

export const catalogGrid = angular
    .module('components.catalogGrid', [
        uiRouter,
    ])
    .component('catalogGridComponent', catalogGridComponent)
    .config(($stateProvider) => {
        'ngInject';

        const catalogGridState = {
            name: 'app.catalogGrid',
            url: '/catalog-grid',
            resolve: {
                catalogLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.catalogGrid.locales[lang]);
                }
            },
            component: 'catalogGridComponent'
        };

        $stateProvider.state(catalogGridState);
    })
    .name;