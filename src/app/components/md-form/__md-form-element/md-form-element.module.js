import { mdFormElementComponent } from './md-form-element.component';
// import { blankFilter } from './md-form-input.filters';

export const mdFormElement = angular
    .module('components.mdFormElement', [])
    // .filter('blankFilter', blankFilter)
    .component('mdFormElement', mdFormElementComponent)
    .name;