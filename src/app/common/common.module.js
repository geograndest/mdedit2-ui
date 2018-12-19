import loader from 'angular-loading-bar';
import {
    app
} from './app.module';

export const common = angular
    .module('common', [
        loader,
        app,
    ])
    .config((cfpLoadingBarProvider) => {
        'ngInject';
        cfpLoadingBarProvider.includeSpinner = false;
    })
    .run(($transitions, cfpLoadingBar) => {
        'ngInject';
        $transitions.onStart({}, cfpLoadingBar.start);
        $transitions.onSuccess({}, cfpLoadingBar.complete);
    })
    .name;