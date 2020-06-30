import { MdEditApiService } from './mdedit-api.service';

export const mdEditApi = angular.module("mdedit-api", [])
    .service('MdEditApiService', MdEditApiService)
    .name;