import { mdFormDatesComponent } from './md-form-dates.component';
// import { mdFormDateComponent } from './md-form-date/md-form-date.component';

export const mdFormDates = angular
    .module('components.mdFormDates', [])
    .component('mdFormDates', mdFormDatesComponent)
    // .component('mdFormDate', mdFormDateComponent)
    .name;