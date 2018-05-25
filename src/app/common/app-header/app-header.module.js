import { appHeaderComponent } from './app-header.component';

export const appHeader = angular
    .module('app.header', [])
    .component('appHeader', appHeaderComponent)
    .name;