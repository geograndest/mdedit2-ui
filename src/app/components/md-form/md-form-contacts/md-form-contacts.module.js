import { mdFormContactsComponent } from './md-form-contacts.component';
import { mdFormContactComponent } from './md-form-contact/md-form-contact.component';

export const mdFormContacts = angular
    .module('components.mdFormContacts', [])
    .component('mdFormContacts', mdFormContactsComponent)
    .component('mdFormContact', mdFormContactComponent)
    .name;