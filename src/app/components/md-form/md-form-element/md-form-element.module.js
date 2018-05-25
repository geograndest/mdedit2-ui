import { mdFormElementComponent } from './md-form-element.component';

export const mdFormElement = angular
    .module('components.mdFormElement', [])
    .component('mdFormElement', mdFormElementComponent)
    .name;