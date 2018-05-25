import { mdFormElementsComponent } from './md-form-elements.component';
import { mdFormItemComponent } from './md-form-item/md-form-item.component';

export const mdFormElements = angular
    .module('components.mdFormElements', [])
    .component('mdFormElements', mdFormElementsComponent)
    .component('mdFormItem', mdFormItemComponent)
    .name;