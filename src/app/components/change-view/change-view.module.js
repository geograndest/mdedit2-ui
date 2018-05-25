import { changeViewComponent } from './change-view.component';

export const changeView = angular
    .module('components.changeView', [])
    .component('changeView', changeViewComponent)
    .name;