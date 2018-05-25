// import template from './csw-catalog-grid.html';
// import template from './csw-catalog-list
import template from './csw-catalog.html';

const cswCatalogController = class CswCatalogController {
    constructor($filter, CswCatalogServices) {
        'ngInject';
        this.CswCatalogServices = CswCatalogServices;
        this.$filter = $filter;
    }

    $onInit() {
        this.getMoreBusy = false;
        this.records = {};
        this.visibleRecords = 0;
        this.matchedRecords = 0;
        // console.log(this.csw);

        this.CswCatalogServices.getCapabilities(this.csw.cswUrl, this.csw.proxy, 'CSW', '2.0.2', (data) => {
            this.capabilities = data;
            this.capabilities.constraintsValues = this.$filter('getValue')(this.capabilities, 'getCapabilities', 'operationsGetRecords.supportedConstraints.constraintsValues');
            this.getCapabilities({
                capabilities: this.capabilities
            });
        }).then(
            this.CswCatalogServices.getDomain('', this.csw.cswUrl, this.csw.proxy, (data) => {
                this.domainName = data;
            })
        ).then(
            this.getMoreRecords(false)
        );
    }

    getMoreRecords(more) {
        if (this.getMoreBusy) {
            return;
        }
        this.getMoreBusy = true;
        if (more) {
            this.csw.startPosition = parseInt(this.csw.startPosition) + parseInt(this.csw.maxRecords);
        }
        this.CswCatalogServices.getRecords(this.csw, (data) => {
            this.visibleRecords = parseInt(this.visibleRecords) + parseInt(this.$filter('getValue')(data, 'getRecords', 'numberOfRecordsReturned'));
            this.matchedRecords = this.$filter('getValue')(data, 'getRecords', 'numberOfRecordsMatched')[0];

            if (more) {
                // TODO: remplacer par appel direct au service set de xmlConverter
                this.records['csw__GetRecordsResponse'][0]['csw__SearchResults'][0]['gmd__MD_Metadata'] = this.records['csw__GetRecordsResponse'][0]['csw__SearchResults'][0]['gmd__MD_Metadata'].concat(this.$filter('getValue')(data, 'getRecords', 'mdList'));
            } else if (data) {
                this.records = data;
            }
            this.records.visibleRecords = this.visibleRecords;
            this.records.matchedRecords = this.matchedRecords;
            this.getRecords({
                records: this.records
            });
            
            if (this.csw.startPosition < this.matchedRecords) {
                this.getMoreBusy = false;
            }
        })
    }

    onViewMd(mdFileIdentifier, mdHierarchyLevel, keywords) {
        this.getRecord({
            mdFileIdentifier: mdFileIdentifier,
            mdHierarchyLevel: mdHierarchyLevel,
            keywords: keywords
        });
    }

}

export const cswCatalogComponent = {
    bindings: {
        tpl: '@',
        csw: '<',
        locales: '<',
        topicCategories: '<',
        themePpal: '<',
        getCapabilities: '&',
        getRecords: '&',
        getRecord: '&'
    },
    template: template,
    controller: cswCatalogController,
};