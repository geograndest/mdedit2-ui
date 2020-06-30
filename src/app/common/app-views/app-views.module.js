import {
    assistant
} from './assistant/assistant.module';
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
    mdEditDataGeo
} from './md-edit-data-geo/md-edit-data-geo.module';
import {
    mdEditDataGeoOpendata
} from './md-edit-data-geo-opendata/md-edit-data-geo-opendata.module';
import {
    mdEditDataNogeo
} from './md-edit-data-nogeo/md-edit-data-nogeo.module';
import {
    mdEditDataNogeoOpendata
} from './md-edit-data-nogeo-opendata/md-edit-data-nogeo-opendata.module';
import {
    mdEditMap
} from './md-edit-map/md-edit-map.module';
import {
    mdTest
} from './md-test/md-test.module';
import {
    mdList
} from './md-list/md-list.module';
import {
    mdLive
} from './md-live/md-live.module';

export const appViews = angular
    .module('app.views', [
        assistant,
        home,
        mdViewData,
        mdViewService,
        mdViewMap,
        mdEditData,
        mdEditDataGeo,
        mdEditDataGeoOpendata,
        mdEditDataNogeo,
        mdEditDataNogeoOpendata,
        mdEditMap,
        mdTest,
        mdList,
        mdLive
    ])
    .name;