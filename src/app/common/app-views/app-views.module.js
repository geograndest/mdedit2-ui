// import {catalogGrid} from './catalog-grid/catalog-grid.module';
// import {catalogList} from './catalog-list/catalog-list.module';
// import {catalogObs} from './catalog-obs/catalog-obs.module';
// import {catalogListObs} from './catalog-list-obs/catalog-list-obs.module';
import {home} from './home/home.module';
// import {mdViewObs} from './md-view-obs/md-view-obs.module';
import {mdViewMap} from './md-view-map/md-view-map.module';
import {mdViewData} from './md-view-data/md-view-data.module';
import {mdViewService} from './md-view-service/md-view-service.module';
import {mdEditData} from './md-edit-data/md-edit-data.module';

export const appViews = angular
  .module('app.views', [
    // catalogGrid,
    // catalogList,
    // catalogObs,
    // catalogListObs,
    home,
    // mdViewObs,
    mdViewData,
    mdViewService,
    mdViewMap,
    mdEditData
  ])
  .name;
