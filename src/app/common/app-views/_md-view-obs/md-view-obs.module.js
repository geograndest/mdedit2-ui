import uiRouter from '@uirouter/angularjs';
import {
    mdViewObsComponent
} from './md-view-obs.component';

export const mdViewObs = angular
    .module('components.mdViewObs', [
        uiRouter,
    ])
    .component('mdViewObsComponent', mdViewObsComponent)
    .config(($stateProvider) => {
        'ngInject';

        const mdViewObsState = {
            name: 'app.mdViewObs',
            url: '/md-view-obs',
            params: {
                name: {
                    value: 'none',
                    squash: false
                }
            },
            resolve: {
                mdViewLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.mdViewObs.locales[lang]);
                }
            },
            component: 'mdViewObsComponent'
        };

        $stateProvider.state(mdViewObsState);
    })
    .name;