import { mdFormSelectComponent } from './md-form-select.component';
// import { getCodeValue } from './md-form-select.filters';

export const mdFormSelect = angular
    .module('components.mdFormSelect', [])
    .component('mdFormSelect', mdFormSelectComponent)
    // .filter('getCodeValue', getCodeValue)
    .name;