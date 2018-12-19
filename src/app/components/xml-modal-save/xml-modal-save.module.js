import {
    XmlModalSaveDialogService
} from './xml-modal-save-dialog/xml-modal-save-dialog.service'
import {
    xmlModalSaveButtonComponent
} from './xml-modal-save-button/xml-modal-save-button.component';
import {
    xmlModalSaveDialogComponent
} from './xml-modal-save-dialog/xml-modal-save-dialog.component';

export const xmlModalSave = angular
    .module('components.xmlModalSave', [])
    .service('XmlModalSaveDialogService', XmlModalSaveDialogService)
    .component('xmlModalSaveButton', xmlModalSaveButtonComponent)
    .component('xmlModalSaveDialog', xmlModalSaveDialogComponent)
    .name;