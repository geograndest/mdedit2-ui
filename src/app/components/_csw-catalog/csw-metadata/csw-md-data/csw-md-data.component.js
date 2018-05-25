// import template from './csw-catalog-grid.html';
// import template from './csw-catalog-list
import template from './csw-md-data.html';

const cswMdDataController = class CswMdDataController {
    constructor($window, CswCatalogServices) {
        'ngInject';
        this.$window = $window;
        this.CswCatalogServices = CswCatalogServices;
    }

    $onInit() {
        this.csw.md = this.md;
        this.CswCatalogServices.getRecord(this.csw, (data) => {
            console.log(data);
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

export const cswMdDataComponent = {
    bindings: {
        tpl: '@',
        csw: '<',
        md: '@',
        locales: '<',
        codelists: '<',
        goBack: '&'
    },
    template: template,
    controller: cswMdDataController,
};