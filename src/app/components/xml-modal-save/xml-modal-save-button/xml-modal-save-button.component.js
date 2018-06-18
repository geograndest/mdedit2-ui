import template from './xml-modal-save-button.html';

const xmlModalSaveButtonController = class XmlModalSaveButtonController {
    constructor($uibModal) {
        'ngInject';

        this.$uibModal = $uibModal;
    }

    $onInit() {}

    open() {
        this.modalInstance = this.$uibModal.open({
            animation: false,
            component: "xmlModalSaveDialog",
            size: 'lg',
            resolve: {
                mdjs: () => {
                    return this.mdjs;
                },
                title: () => {
                    return this.title;
                },
                onSave: () => {
                    return this.onSave;
                }
            }
        });
    }

    close() {
        this.modalInstance.close();
    }
}

export const xmlModalSaveButtonComponent = {
    bindings: {
        format: '@',
        icon: '@',
        text: '@',
        title: '@',
        mdjs: '<',
        onSave: '&'
    },
    template: template,
    controller: xmlModalSaveButtonController,
};