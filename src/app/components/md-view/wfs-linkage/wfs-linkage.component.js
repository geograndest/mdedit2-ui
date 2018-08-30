import template from './wfs-linkage.html';

const wfsLinkageController = class WfsLinkageController {
    constructor($filter, CswCatalogServices) {
        'ngInject';
        this.CswCatalogServices = CswCatalogServices;
        this.$filter = $filter;
    }

    $onInit() {
        var formats = {
            'CSV': ['CSV'],
            'GML 2': ['GML2', 'text/xml; subtype=gml/2.1.2'],
            'GML 3.1': ['GML3', 'text/xml; subtype=gml/3.1.1'],
            'GML 3.2': ['GML32', 'text/xml; subtype=gml/3.2', 'application/gml+xml; version=3.2'],
            'KML': ['KML', 'application/vnd.google-earth.kml xml', 'application/vnd.google-earth.kml+xml'],
            'GeoJson': ['JSON', 'application/json'],
            'SHP': ['SHAPE-ZIP']
        };
        this.urls = [];

        this.CswCatalogServices.getCapabilities(this.url, this.proxy, 'WFS', '2.0.0', (data) => {
            this.getFeatureOutputFormats = this.$filter('getValue')(data, 'getCapabilitiesWfs', 'operationsGetFeature.parameterOutputFormat.allowedValues');
            if (this.getFeatureOutputFormats.length) {
                for (var format in formats) {
                    var formatExists = false;
                    for (var f = 0; f < formats[format].length; f++) {
                        if (this.getFeatureOutputFormats.indexOf(formats[format][f]) > -1 && !formatExists) {
                            var url = this.url.split('?')[0] + "?service=WFS&version=2.0.0&request=GetFeature&maxFeatures=50000" + "&typeName=" + this.name + "&outputFormat=" + formats[format][f];
                            this.urls.push({
                                format: format,
                                url: url
                            });
                            formatExists = true;
                        }
                    }
                }
            }
        });
    }
}

export const wfsLinkageComponent = {
    bindings: {
        name: '@',
        url: '@',
        proxy: '@'
    },
    template: template,
    controller: wfsLinkageController,
};