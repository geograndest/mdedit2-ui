import {
    mdFormInspireconformitiesComponent
} from './md-form-inspireconformities.component';
import {
    mdFormInspireconformityComponent
}
from './md-form-inspireconformity/md-form-inspireconformity.component';

export const mdFormInspireconformities = angular
    .module('components.mdFormInspireconformities', [])
    .component('mdFormInspireconformities', mdFormInspireconformitiesComponent)
    .component('mdFormInspireconformity', mdFormInspireconformityComponent)
    .name;