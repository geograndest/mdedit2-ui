import { mdFormReferencesystemsComponent } from './md-form-referencesystems.component';
import { mdFormReferencesystemComponent } from './md-form-referencesystem/md-form-referencesystem.component';

export const mdFormReferencesystems = angular
    .module('components.mdFormReferencesystems', [])
    .component('mdFormReferencesystems', mdFormReferencesystemsComponent)
    .component('mdFormReferencesystem', mdFormReferencesystemComponent)
    .name;