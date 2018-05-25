import template from './page-modal-dialog.html';

const pageModalDialogController = class PageModalDialogController {
    constructor(PageModalDialogServices) {
        'ngInject';
        this.PageModalDialogServices = PageModalDialogServices;
    }

    $onInit() {
        this.contentUrl = this.resolve.contentUrl;
        this.title = this.resolve.title;

        this.PageModalDialogServices.getDoc(this.contentUrl)
            .then((data) => {
                this.content = data;
            });
    }

    close() {
        this.close("close");
    }

    dismiss() {
        this.dismiss("cancel");
    }

}

export const pageModalDialogComponent = {
    bindings: {
        resolve: '<',
        close: '&'
    },
    template: template,
    controller: pageModalDialogController,
};