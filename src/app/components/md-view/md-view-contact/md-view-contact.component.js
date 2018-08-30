import template from './md-view-contact.html';

const mdViewContactController = class MdViewContactController {
    constructor() {}

    $onInit() {}

}

export const mdViewContactComponent = {
    bindings: {
        contactType: '@',
        contact: '<',
        locales: '<',
        roleCodes: '<'
    },
    template: template,
    controller: mdViewContactController,
};