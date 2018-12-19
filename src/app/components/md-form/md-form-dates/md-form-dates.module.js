import {
    mdFormDatesComponent
} from './md-form-dates.component';

export const mdFormDates = angular
    .module('components.mdFormDates', [])
    .component('mdFormDates', mdFormDatesComponent)
    .name;