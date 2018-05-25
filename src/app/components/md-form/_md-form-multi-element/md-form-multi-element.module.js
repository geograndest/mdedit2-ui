import { mdFormMultiElementComponent } from '../md-form-multi-element/md-form-multi-element.component';

export const mdFormMultiElement = angular
    .module('components.mdFormMultiElement', [])
    .component('mdFormMultiElement', mdFormMultiElementComponent)
    .name;