import template from './catalog-obs.html';

const catalogObsController = class CatalogObsController {
    constructor() {}

    $onInit() {
        this.topicCategories = this.appLocales.codelists.MD_TopicCategoryCode;
        this.themePpal = this.appLocales.codelists.THEME_PPAL;
    }

}

export const catalogObsComponent = {
    bindings: {
        appLocales: '<',
        $transition$: '<',
        catalogLocales: '<',
        csw: '<',
        cswCatalogView: '<'
    },
    template: template,
    controller: catalogObsController,
};