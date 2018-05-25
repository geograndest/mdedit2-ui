import { appFooterComponent } from './app-footer.component';

export const appFooter = angular
    .module('app.footer', [])
    .component('appFooter', appFooterComponent)
    .name;