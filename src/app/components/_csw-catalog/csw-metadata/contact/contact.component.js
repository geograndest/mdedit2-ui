import template from './contact.html';

const contactController = class ContactController {
    constructor() {}

    $onInit() {}

}

export const contactComponent = {
    bindings: {
        contactType: '@',
        contact: '<',
        locales: '<',
        roleCodes: '<'
    },
    template: template,
    controller: contactController,
};