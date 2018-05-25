import { mdFormIdentifiersComponent } from './md-form-identifiers.component';
import { mdFormIdentifierComponent } from './md-form-identifier/md-form-identifier.component';

export const mdFormIdentifiers = angular
    .module('components.mdFormIdentifiers', [])
    .component('mdFormIdentifiers', mdFormIdentifiersComponent)
    .component('mdFormIdentifier', mdFormIdentifierComponent)
    .name;