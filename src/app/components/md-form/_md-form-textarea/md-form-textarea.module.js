import { mdFormTextareaComponent } from './md-form-textarea.component';
// import { nl2br } from './md-form-textarea.filters';

export const mdFormTextarea = angular
    .module('components.mdFormTextarea', [])
    .component('mdFormTextarea', mdFormTextareaComponent)
    // .filter('nl2br', nl2br)    
    .name;