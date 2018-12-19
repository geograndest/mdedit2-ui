import {
    XmlModalLoadDialogService
} from './xml-modal-load-dialog/xml-modal-load-dialog.service';
import {
    xmlModalLoadButtonComponent
} from './xml-modal-load-button/xml-modal-load-button.component';
import {
    xmlModalLoadDialogComponent
} from './xml-modal-load-dialog/xml-modal-load-dialog.component';

export const xmlModalLoad = angular
    .module('components.xmlModalLoad', [])
    .service('XmlModalLoadDialogService', XmlModalLoadDialogService)
    .component('xmlModalLoadButton', xmlModalLoadButtonComponent)
    .component('xmlModalLoadDialog', xmlModalLoadDialogComponent)
    .name;