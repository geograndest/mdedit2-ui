// import template from './md-view-details-data.html';

const mdViewDataController = class MdViewDataController {
    constructor($window) {
        'ngInject';
        this.$window = $window;
    }

    $onInit() {
        // this.csw.md = this.md;
        // this.CswCatalogServices.getRecord(this.csw, (data) => {
        //     this.record = data;
        // });
    }

    onPrint() {
        this.$window.print();
    }

    onClose() {
        this.goBack();
    }

}

export const mdViewDataComponent = {
    bindings: {
        tpl: '@',
        // csw: '<',
        md: '@',
        locales: '<',
        codelists: '<',
        goBack: '&'
    },
    template: template,
    controller: mdViewDataController,
};