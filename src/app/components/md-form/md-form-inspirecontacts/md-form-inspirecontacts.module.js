import { mdFormInspirecontactsComponent } from './md-form-inspirecontacts.component';
import { mdFormInspirecontactComponent } from './md-form-inspirecontact/md-form-inspirecontact.component';

export const mdFormInspirecontacts = angular
    .module('components.mdFormInspirecontacts', [])
    .component('mdFormInspirecontacts', mdFormInspirecontactsComponent)
    .component('mdFormInspirecontact', mdFormInspirecontactComponent)
    .name;