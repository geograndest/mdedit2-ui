import {
    mdFormConstraintsComponent
}
from './md-form-constraints.component';

export const mdFormConstraints = angular
    .module('components.mdFormConstraints', [])
    .component('mdFormConstraints', mdFormConstraintsComponent)
    .name;