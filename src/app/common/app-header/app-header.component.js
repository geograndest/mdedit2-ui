import template from './app-header.html';

const appHeaderController = class AppHeaderController {
    constructor() {}

    $onInit() {}

}

export const appHeaderComponent = {
    bindings: {
        headerTitle: '@',
        lang: '<',
        changeViewButton: '<',
        xmlLoadButton: '<',
        xmlSaveButton: '<',
        homeButton: '<',
        mdListButton: '<',
        dir: '@',
        url: '@',
        user: '<'
    },
    template: template,
    controller: appHeaderController,
};