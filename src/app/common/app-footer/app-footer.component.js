import template from './app-footer.html';

const appFooterController = class AppFooterController {
    constructor() {}

    $onInit() {}
}

export const appFooterComponent = {
    bindings: {
        copyrights: '<',
        mentionsButton: '<',
        changeLangButton: '<',
        // cswInfos: '<',
        // cswStats: '<'
    },
    template: template,
    controller: appFooterController,
};