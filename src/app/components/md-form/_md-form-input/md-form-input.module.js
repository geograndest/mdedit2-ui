import { mdFormInputComponent } from './md-form-input.component';
// import { blankFilter } from './md-form-input.filters';

export const mdFormInput = angular
    .module('components.mdFormInput', [])
    // .filter('blankFilter', blankFilter)
    .component('mdFormInput', mdFormInputComponent)
    .name;