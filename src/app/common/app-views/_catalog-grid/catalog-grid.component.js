import template from './catalog-grid.html';

const catalogGridController = class CatalogGridController {
    constructor() {}

    $onInit() {
        this.topicCategories = this.appLocales.codelists.MD_TopicCategoryCode;
    }

}

export const catalogGridComponent = {
    bindings: {
        appLocales: '<',
        $transition$: '<',
        catalogLocales: '<',
        csw: '<',
        cswCatalogView: '<'
    },
    template: template,
    controller: catalogGridController,
};