import { mdFormLinkagesComponent } from './md-form-linkages.component';
import { mdFormLinkageComponent } from './md-form-linkage/md-form-linkage.component';

export const mdFormLinkages = angular
    .module('components.mdFormLinkages', [])
    .component('mdFormLinkages', mdFormLinkagesComponent)
    .component('mdFormLinkage', mdFormLinkageComponent)
    .name;