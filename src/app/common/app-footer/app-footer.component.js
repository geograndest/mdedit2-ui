import template from './app-footer.html';

const appFooterController = class AppFooterController {
    constructor() {}

    $onInit() {}
}

export const appFooterComponent = {
    bindings: {
        login: '@',
        logout: '@',
        copyrights: '<',
        helpButton: '<',
        mentionsButton: '<',
        changeLangButton: '<',
        user: '<'
    },
    template: template,
    controller: appFooterController,
};