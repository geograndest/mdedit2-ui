import template from './catalog-list.html';

const catalogListController = class CatalogListController {
    constructor() {}

    $onInit() {
        this.topicCategories = this.appLocales.codelists.MD_TopicCategoryCode;
    }

}

export const catalogListComponent = {
    bindings: {
        appLocales: '<',
        $transition$: '<',
        catalogLocales: '<',
        csw: '<',
        cswCatalogView: '<'
    },
    template: template,
    controller: catalogListController,
};