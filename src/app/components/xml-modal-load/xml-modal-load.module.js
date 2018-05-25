import { XmlModalLoadDialogService } from './xml-modal-load-dialog/xml-modal-load-dialog.service';
import { xmlModalLoadButtonComponent } from './xml-modal-load-button/xml-modal-load-button.component';
import { xmlModalLoadDialogComponent } from './xml-modal-load-dialog/xml-modal-load-dialog.component';
// import { XmlConverterService } from '../xml-converter/xml-converter.service';

export const xmlModalLoad = angular
    .module('components.xmlModalLoad', [])
    .service('XmlModalLoadDialogService', XmlModalLoadDialogService)
    // .service('XmlConverterService', XmlConverterService)
    .component('xmlModalLoadButton', xmlModalLoadButtonComponent)
    .component('xmlModalLoadDialog', xmlModalLoadDialogComponent)
    .name;