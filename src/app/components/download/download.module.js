import {
    DownloadService
} from './download.service';

export const download = angular.module('download', [])
    .service('DownloadService', DownloadService)
    .name;