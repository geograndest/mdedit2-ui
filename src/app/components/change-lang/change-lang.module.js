import { changeLangComponent } from './change-lang.component';

export const changeLang = angular
    .module('components.changeLang', [])
    .component('changeLang', changeLangComponent)
    .name;