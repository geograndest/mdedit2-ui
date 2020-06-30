import {
    mdFormFilesComponent
} from './md-form-files.component';

export const mdFormFiles = angular
    .module('components.mdFormFiles', [])
    .component('mdFormFiles', mdFormFilesComponent)
    .name;