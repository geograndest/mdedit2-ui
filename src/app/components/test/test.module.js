import { testComponent } from './test.component';

export const test = angular
    .module('components.test', [])
    .component('test', testComponent)
    .name;