import { mdFormGeographicextentsComponent } from './md-form-geographicextents.component';
import { mdFormGeographicextentComponent } from './md-form-geographicextent/md-form-geographicextent.component';

export const mdFormGeographicextents = angular
    .module('components.mdFormGeographicextents', [])
    .component('mdFormGeographicextents', mdFormGeographicextentsComponent)
    .component('mdFormGeographicextent', mdFormGeographicextentComponent)
    .name;