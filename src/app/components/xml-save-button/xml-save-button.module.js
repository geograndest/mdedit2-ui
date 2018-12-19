import {
    xmlSaveButtonComponent
} from './xml-save-button.component';

export const xmlSaveButton = angular
    .module('components.xmlSaveButton', [])
    .component('xmlSaveButton', xmlSaveButtonComponent)
    .name;