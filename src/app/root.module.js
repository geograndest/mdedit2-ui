// Import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './root.scss';
// Import JS modules
import angular from 'angular';
import uiBootstrap from "angular-ui-bootstrap";
import uiRouter from '@uirouter/angularjs';
// Import application modules and components
import {
    rootComponent
} from './root.component';
import {
    common
} from './common/common.module';
import {
    components
} from './components/components.module';

export const root = angular
    .module('root', [
        uiBootstrap,
        uiRouter,
        common,
        components,
    ])
    .component('root', rootComponent)
    .config(($locationProvider, $urlRouterProvider) => {
        'ngInject';
        // $locationProvider.html5Mode(true);
    })
    .name;