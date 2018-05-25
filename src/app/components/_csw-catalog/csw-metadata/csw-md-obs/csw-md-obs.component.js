// import template from './csw-catalog-grid.html';
// import template from './csw-catalog-list
import template from './csw-md-obs.html';

const cswMdObsController = class CswMdObsController {
    constructor($window, CswCatalogServices) {
        'ngInject';
        this.CswCatalogServices = CswCatalogServices;
        this.$window = $window;
    }

    $onInit() {
        this.csw.md = this.md;
        this.CswCatalogServices.getRecord(this.csw, (data) => {
            this.record = data;
        });
    }

    onPrint() {
        this.$window.print();
    }

    onClose() {
        this.goBack();
    }

}

export const cswMdObsComponent = {
    bindings: {
        tpl: '@',
        csw: '<',
        md: '@',
        locales: '<',
        codelists: '<',
        goBack: '&'
    },
    template: template,
    controller: cswMdObsController,
};