import { UtilsService } from './utils.service';

export const utils = angular.module("utils", [])
    .service('UtilsService', UtilsService)
    .name;