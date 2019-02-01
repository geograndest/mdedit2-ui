import template from './xml-modal-load-button.html';

const xmlModalLoadButtonController = class XmlModalLoadButtonController {
    constructor($uibModal) {
        'ngInject';
        this.$uibModal = $uibModal;
    }

    $onInit() {}

    open() {
        this.modalInstance = this.$uibModal.open({
            animation: false,
            component: "xmlModalLoadDialog",
            size: 'lg',
            resolve: {
                title: () => {
                    return this.title;
                },
                proxy: () => {
                    return this.proxy;
                },
                models: () => {
                    return this.models;
                },
                onLoad: () => {
                    return this.onLoad;
                }
            }
        });
    }

    close() {
        this.modalInstance.close();
    }
}

export const xmlModalLoadButtonComponent = {
    bindings: {
        format: '@',
        icon: '@',
        text: '@',
        title: '@',
        proxy: '@',
        models: "<",
        onLoad: '&'
    },
    template: template,
    controller: xmlModalLoadButtonController,
};