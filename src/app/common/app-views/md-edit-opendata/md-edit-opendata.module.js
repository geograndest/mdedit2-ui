import uiRouter from '@uirouter/angularjs';
import {
    mdEditOpendataComponent
} from './md-edit-opendata.component';

export const mdEditOpendata = angular
    .module('components.mdEditOpendata', [
        uiRouter,
    ])
    .component('mdEditOpendataComponent', mdEditOpendataComponent)
    .config(($stateProvider) => {
        'ngInject';

        const mdEditOpendataState = {
            name: 'app.mdEditOpendata',
            url: '/md-edit-opendata',
            resolve: {
                mdEditLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.mdEditOpendata.locales[lang]);
                }
            },
            component: 'mdEditOpendataComponent'
        };

        $stateProvider.state(mdEditOpendataState);
    })
    .name;