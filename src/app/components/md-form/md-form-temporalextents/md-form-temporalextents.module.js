import { mdFormTemporalextentsComponent } from './md-form-temporalextents.component';
import { mdFormTemporalextentComponent } from './md-form-temporalextent/md-form-temporalextent.component';

export const mdFormTemporalextents = angular
    .module('components.mdFormTemporalextents', [])
    .component('mdFormTemporalextents', mdFormTemporalextentsComponent)
    .component('mdFormTemporalextent', mdFormTemporalextentComponent)
    .name;