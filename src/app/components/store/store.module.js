import { StoreService } from './store.service';

export const store = angular.module("store", [])
    .service('StoreService', StoreService)
    .name;