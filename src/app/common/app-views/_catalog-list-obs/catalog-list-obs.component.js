import template from './catalog-list-obs.html';

const catalogListObsController = class CatalogListObsController {
    constructor() {
    }

    $onInit() {
        this.topicCategories = this.appLocales.codelists.MD_TopicCategoryCode;
        this.themePpal = this.appLocales.codelists.THEME_PPAL;
    }

}

export const catalogListObsComponent = {
    bindings: {
        appLocales: '<',
        $transition$: '<',
        catalogLocales: '<',
        csw: '<',
        cswCatalogView: '<'
    },
    template: template,
    controller: catalogListObsController,
};