import {
    mdFormConformitiesComponent
} from './md-form-conformities.component';
import {
    mdFormConformityComponent
} from './md-form-conformity/md-form-conformity.component';

export const mdFormConformities = angular
    .module('components.mdFormConformities', [])
    .component('mdFormConformities', mdFormConformitiesComponent)
    .component('mdFormConformity', mdFormConformityComponent)
    .name;