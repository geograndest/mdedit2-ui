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
        // changeCswButton: '<',
        // cswSearchButton: '<',
        xmlLoadButton: '<',
        xmlSaveButton: '<',
        homeButton: '<'
    },
    template: template,
    controller: appHeaderController,
};