import template from './app-header.html';

const appHeaderController = class AppHeaderController {
    constructor() {}

    $onInit() {}

}

export const appHeaderComponent = {
    bindings: {
        headerTitle: '@',
        lang: '<',
        helpButton: '<',
        changeViewButton: '<',
        xmlLoadButton: '<',
        xmlSaveButton: '<',
        homeButton: '<',
        mdListButton: '<',
        auth: '<'
    },
    template: template,
    controller: appHeaderController,
};