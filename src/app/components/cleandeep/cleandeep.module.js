import {
    CleandeepService
} from './cleandeep.service';

export const cleandeep = angular.module('cleandeep', [])
    .service('CleandeepService', CleandeepService)
    .name;