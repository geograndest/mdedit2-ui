import {
    home
} from './home/home.module';
import {
    mdViewMap
} from './md-view-map/md-view-map.module';
import {
    mdViewData
} from './md-view-data/md-view-data.module';
import {
    mdViewService
} from './md-view-service/md-view-service.module';
import {
    mdEditData
} from './md-edit-data/md-edit-data.module';
import {
    mdTest
} from './md-test/md-test.module';
import {
    mdLive
} from './md-live/md-live.module';

export const appViews = angular
    .module('app.views', [
        home,
        mdViewData,
        mdViewService,
        mdViewMap,
        mdEditData,
        mdTest,
        mdLive
    ])
    .name;