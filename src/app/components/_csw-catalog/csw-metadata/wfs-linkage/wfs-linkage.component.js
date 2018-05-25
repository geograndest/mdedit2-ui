import template from './wfs-linkage.html';

const wfsLinkageController = class WfsLinkageController {
    constructor($filter, CswCatalogServices) {
        'ngInject';
        this.CswCatalogServices = CswCatalogServices;
        this.$filter = $filter;
    }

    $onInit() {
        console.log(this.url, this.proxy);

        //GetCapabilities sur this.url
        // Check operationName = GetFeature + get protocols list

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

        // TODO: add proxy
        this.CswCatalogServices.getCapabilities(this.url, this.proxy, 'WFS', '2.0.0', (data) => {
            console.log('data:', data);
            this.getFeatureOutputFormats = this.$filter('getValue')(data, 'getCapabilitiesWfs', 'operationsGetFeature.parameterOutputFormat.allowedValues');
            console.log('format:', this.getFeatureOutputFormats);
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
            // console.log(this.capabilities);
        });

        // wfs_urls = [];
        // wfsSrv.getCapabilities(scope.linkage.url, function(data) {
        //     if (data.getFeatureOutputFormats.length) {
        //         for (var format in formats) {
        //             var formatExist = false;
        //             for (var f=0; f<formats[format].length; f++) {
        //                 if (data.getFeatureOutputFormats.indexOf(formats[format][f]) > -1 && !formatExist) {
        //                     var url = scope.linkage.url.split('?')[0] + "?service=WFS&version=2.0.0&request=GetFeature&maxFeatures=50000" + "&typeName=" + scope.linkage.name + "&outputFormat=" + formats[format][f];
        //                     scope.linkage.wfs_url.push({
        //                         format: format,
        //                         url:  url
        //                     });
        //                     formatExist = true;
        //                 }
        //             }
        //         }
        //     }
        // });

    }

}

export const wfsLinkageComponent = {
    bindings: {
        // contactType: '@',
        // description: '@',
        // protocol: '@',
        name: '@',
        url: '@',
        proxy: '@',
        // locales: '<',
        // roleCodes: '<'
    },
    template: template,
    controller: wfsLinkageController,
};