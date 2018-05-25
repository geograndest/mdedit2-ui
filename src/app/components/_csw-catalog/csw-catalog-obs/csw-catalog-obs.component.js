// import template from './csw-catalog-grid.html';
// import template from './csw-catalog-list
import template from './csw-catalog-obs.html';

const cswCatalogObsController = class CswCatalogObsController {
    constructor(CswCatalogServices) {
        'ngInject';
        this.CswCatalogServices = CswCatalogServices;
    }

    $onInit() {
        this.CswCatalogServices.getCapabilities(this.csw.cswUrl, this.csw.proxy, 'CSW', '2.0.2', (data) => {
            this.capabilities = data;
            this.getCapabilities({
                capabilities: this.capabilities
            });
        }).then(
            this.CswCatalogServices.getDomain('', this.csw.cswUrl, this.csw.proxy, (data) => {
                this.domainName = data;
            })
        ).then(
            this.CswCatalogServices.getRecords(this.csw, (data) => {
                this.data = data;
                this.getRecords({
                    records: this.data
                });
            })
        );
    }

    onViewMd(mdFileIdentifier, keywords) {
        this.getRecord({
            mdFileIdentifier: mdFileIdentifier,
            keywords: keywords
        });
    }
    
    onCswSearch(constraintType, constraint) {
        this.cswSearch({constraintType: constraintType, constraint: constraint});
    }

}

export const cswCatalogObsComponent = {
    bindings: {
        tpl: '@',
        csw: '<',
        locales: '<',
        topicCategories: '<',
        themePpal: '<',
        getCapabilities: '&',
        getRecords: '&',
        getRecord: '&',
        cswSearch: '&'
    },
    template: template,
    controller: cswCatalogObsController,
};