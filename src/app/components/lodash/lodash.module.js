import { LodashService } from './lodash.service';

export const lodash = angular.module('lodash', [])
    .service('LodashService', LodashService)
    .name;