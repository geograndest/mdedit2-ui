import { PageModalDialogServices } from './page-modal-dialog/page-modal-dialog.services'
import { pageModalButtonComponent } from './page-modal-button/page-modal-button.component';
import { pageModalDialogComponent } from './page-modal-dialog/page-modal-dialog.component';

export const pageModal = angular
    .module('components.pageModal', [])
    .service('PageModalDialogServices', PageModalDialogServices)
    .component('pageModalButton', pageModalButtonComponent)
    .component('pageModalDialog', pageModalDialogComponent)
    .name;