import {
    DownloadjsService
} from './downloadjs.service';

export const downloadjs = angular.module('downloadjs', [])
    .service('DownloadjsService', DownloadjsService)
    .name;