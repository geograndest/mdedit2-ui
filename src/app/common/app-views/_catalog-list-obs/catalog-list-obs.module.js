import uiRouter from '@uirouter/angularjs';
import {catalogListObsComponent} from './catalog-list-obs.component';

export const catalogListObs = angular
    .module('components.catalogListObs', [
        uiRouter,
    ])
    .component('catalogListObsComponent', catalogListObsComponent)
    .config(($stateProvider) => {
        'ngInject';

        const catalogListObsState = {
            name: 'app.catalogListObs',
            url: '/catalog-list-obs',
            params: {
                name: {
                    value: 'none',
                    squash: true
                }
            },
            resolve: {
                catalogLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.catalogListObs.locales[lang]);
                }
            },
            component: 'catalogListObsComponent'
        };

        $stateProvider.state(catalogListObsState);
    })
    .name;