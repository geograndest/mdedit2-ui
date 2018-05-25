import { mdFormElementComponent } from './md-form-element.component';
import { getCodeValue } from './md-form-element.filters';
import { nl2br } from './md-form-element.filters';

export const mdFormElement = angular
    .module('components.mdFormElement', [])
    .filter('getCodeValue', getCodeValue)
    .filter('nl2br', nl2br)
    .component('mdFormElement', mdFormElementComponent)
    .name;