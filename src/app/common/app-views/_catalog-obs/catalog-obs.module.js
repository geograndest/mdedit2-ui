import uiRouter from '@uirouter/angularjs';
import {catalogObsComponent} from './catalog-obs.component';

export const catalogObs = angular
    .module('components.catalogObs', [
        uiRouter,
    ])
    .component('catalogObsComponent', catalogObsComponent)
    .config(($stateProvider) => {
        'ngInject';

        const catalogObsState = {
            name: 'app.catalogObs',
            url: '/catalog-obs',
            params: {
                name: {
                    value: 'none',
                    squash: false
                }
            },
            resolve: {
                catalogLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.catalogObs.locales[lang]);
                }
            },
            component: 'catalogObsComponent'
        };

        $stateProvider.state(catalogObsState);
    })
    .name;