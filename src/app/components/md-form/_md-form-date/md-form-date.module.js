import {
    mdFormDateComponent
} from './md-form-date.component';

export const mdFormDate = angular
    .module('components.mdFormDate', [])
    .component('mdFormDate', mdFormDateComponent)
    .name;