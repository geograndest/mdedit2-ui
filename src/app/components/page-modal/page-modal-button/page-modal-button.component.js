import template from './page-modal-button.html';

const pageModalButtonController = class PageModalButtonController {
    constructor($uibModal) {
        'ngInject';
        this.$uibModal = $uibModal;
    }

    $onInit() {}

    open() {
        this.modalInstance = this.$uibModal.open({
            animation: false,
            component: "pageModalDialog",
            size: 'lg',
            resolve: {
                contentUrl: () => {
                    return this.contentUrl;
                },
                title: () => {
                    return this.title;
                }
            }
        });
    }

    close() {
        this.modalInstance.close();
    }
}

export const pageModalButtonComponent = {
    bindings: {
        format: '@',
        icon: '@',
        text: '@',
        title: '@',
        contentUrl: '<'
    },
    template: template,
    controller: pageModalButtonController,
};