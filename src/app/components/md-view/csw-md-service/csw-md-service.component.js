import template from './csw-md-service.html';

const cswMdServiceController = class CswMdServiceController {
    constructor($window, CswCatalogServices) {
        'ngInject';
        this.$window = $window;
        this.CswCatalogServices = CswCatalogServices;
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

export const cswMdServiceComponent = {
    bindings: {
        tpl: '@',
        csw: '<',
        md: '@',
        locales: '<',
        codelists: '<',
        goBack: '&'
    },
    template: template,
    controller: cswMdServiceController,
};