import uiRouter from '@uirouter/angularjs';
import {
    mdLiveComponent
} from './md-live.component';

export const mdLive = angular
    .module('components.mdLive', [
        uiRouter,
    ])
    .component('mdLiveComponent', mdLiveComponent)
    .config(($stateProvider) => {
        'ngInject';

        const mdLiveState = {
            name: 'app.mdLive',
            url: '/md-live',
            resolve: {
                mdEditLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.views.mdLive.locales[lang]);
                }
            },
            component: 'mdLiveComponent'
        };

        $stateProvider.state(mdLiveState);
    })
    .name;