// import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
// import loader from 'angular-loading-bar';
import {
    appComponent
} from './app.component';
import {
    appFooter
} from './app-footer/app-footer.module';
import {
    appHeader
} from './app-header/app-header.module';
import {
    appViews
} from './app-views/app-views.module';

export const app = angular
    .module('app', [
        uiRouter,
        appFooter,
        appHeader,
        appViews
    ])
    .component('app', appComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';

        const appState = {
            name: 'app',
            redirectTo: 'app.home',
            url: '/app?config&lang&header&footer&url&template',
            params: {
                config: {
                    value: 'config/config.json',
                    squash: true,
                    inherit: true
                },
                lang: {
                    value: null,
                    squash: true,
                    inherit: true
                },
                header: {
                    value: '1',
                    squash: true,
                    inherit: true
                },
                footer: {
                    value: '1',
                    squash: true,
                    inherit: true
                },
                url: {
                    value: null,
                    squash: true,
                    inherit: true
                },
                template: {
                    value: null,
                    squash: true,
                    inherit: true
                }
            },
            resolve: {
                appConfig: ($transition$, UtilsService) => {
                    'ngInject';
                    var configDefault = 'config/config.json';
                    var config = $transition$.params().config;
                    if (!config) {
                        config = configDefault;
                    }
                    return UtilsService.getJsonFile(config);
                },
                lang: ($transition$) => {
                    'ngInject';
                    var lang = $transition$.params().lang;
                    if (!lang) {
                        if (navigator.language) {
                            lang = navigator.language.substring(0, 2);
                        } else {
                            lang = appConfig.app.lang;
                        }
                    }
                    return lang;
                },
                appLocales: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.app.locales[lang].locale);
                },
                pages: (UtilsService, appConfig, lang) => {
                    'ngInject';
                    return UtilsService.getJsonFile(appConfig.app.locales[lang].pages);
                },
                header: ($transition$) => {
                    'ngInject';
                    return $transition$.params().header;
                },
                footer: ($transition$) => {
                    'ngInject';
                    return $transition$.params().footer;
                },
                url: ($transition$, appConfig) => {
                    'ngInject';
                    return $transition$.params().url;
                },
                xml: ($transition$, UtilsService, appConfig) => {
                    'ngInject';
                    var template = $transition$.params().template || appConfig.app.template;
                    return UtilsService.getFile(appConfig.models[template].file);
                },
                // mdjs: ($transition$, XmlConverterService, mdxml) => {
                //     'ngInject';
                //     return XmlConverterService.xml2js(mdxml);
                // },
            },
            component: 'app',
        };

        $stateProvider.state(appState);
        $urlRouterProvider.otherwise('/app');
    })
    .name;