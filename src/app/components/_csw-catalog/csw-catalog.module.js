// Import JS modules
import infiniteScroll from 'ng-infinite-scroll';
// Import application modules and components
import './csw-catalog.scss';
import {CswCatalogServices} from './csw-catalog.services';
import {nl2br} from './csw-metadata/csw-metadata.filters';
import {removeFirstLetter} from './csw-metadata/csw-metadata.filters';
import {isWxs} from './csw-metadata/csw-metadata.filters';
import {getAbstractValue} from './csw-metadata/csw-metadata.filters';
import {changeCswComponent} from './change-csw/change-csw.component';
import {cswSearchComponent} from './csw-search/csw-search.component';
import {cswCatalogComponent} from './csw-catalog/csw-catalog.component';
import {cswCatalogObsComponent} from './csw-catalog-obs/csw-catalog-obs.component';
import {cswCardComponent} from './csw-card/csw-card.component';
import {cswStatsComponent} from './csw-stats/csw-stats.component';
import {cswInfosComponent} from './csw-infos/csw-infos.component';
import {cswMdDataComponent} from './csw-metadata/csw-md-data/csw-md-data.component';
import {cswMdObsComponent} from './csw-metadata/csw-md-obs/csw-md-obs.component';
import {cswMdServiceComponent} from './csw-metadata/csw-md-service/csw-md-service.component';
import {contactComponent} from './csw-metadata/contact/contact.component';
import {wfsLinkageComponent} from './csw-metadata/wfs-linkage/wfs-linkage.component';


export const cswCatalog = angular
    .module('components.cswCatalog', ['infinite-scroll'])
    .service('CswCatalogServices', CswCatalogServices)
    .filter('nl2br', nl2br)
    .filter('removeFirstLetter', removeFirstLetter)
    .filter('isWxs', isWxs)
    .filter('getAbstractValue', getAbstractValue)
    .component('changeCsw', changeCswComponent)
    .component('cswSearch', cswSearchComponent)
    .component('cswCatalog', cswCatalogComponent)
    .component('cswCatalogObs', cswCatalogObsComponent)
    .component('cswCard', cswCardComponent)
    .component('cswStats', cswStatsComponent)
    .component('cswInfos', cswInfosComponent)
    .component('cswMdData', cswMdDataComponent)
    .component('cswMdObs', cswMdObsComponent)
    .component('cswMdService', cswMdServiceComponent)
    .component('contact', contactComponent)
    .component('wfsLinkage', wfsLinkageComponent)
    .name;