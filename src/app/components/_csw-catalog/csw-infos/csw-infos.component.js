import template from './csw-infos.html';

const cswInfosController = class cswInfosController {
    constructor() {}

    $onInit() {}

}

export const cswInfosComponent = {
    bindings: {
        capabilities: '<',
        cswUrl: '@'
    },
    template: template,
    controller: cswInfosController,
};