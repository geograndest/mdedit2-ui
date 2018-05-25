import template from './csw-stats.html';

const cswStatsController = class cswStatsController {
    constructor() {}

    $onInit() {}

}

export const cswStatsComponent = {
    bindings: {
        visibleRecords: '@',
        matchedRecords: '@'
    },
    template: template,
    controller: cswStatsController,
};