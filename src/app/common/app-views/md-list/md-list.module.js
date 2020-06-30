import uiRouter from '@uirouter/angularjs';
import {
    mdListComponent
} from './md-list.component';

export const mdList = angular
    .module('components.mdList', [
        uiRouter,
    ])
    .component('mdListComponent', mdListComponent)
    .config(($stateProvider) => {
        'ngInject';

        const mdListState = {
            name: 'app.mdList',
            url: '/md-list',
            resolve: {
                mdListLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    var file = appConfig.views.mdList.locales[lang]
                    return UtilsService.getJsonFile(file);
                },
                mdListFiles: (MdEditApiService, appConfig) => {
                    'ngInject';
                    var url = appConfig.app.api.files;
                    return MdEditApiService.get(url);
                },
                viewEditor: (user) => {
                    'ngInject';
                    return user;
                }
            },
            component: 'mdListComponent'
        };

        $stateProvider.state(mdListState);
    })
    .name;