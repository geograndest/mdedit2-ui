export class CswCatalogServices {
    constructor($http, UtilsService, XmlConverterService) {
        'ngInject';

        this.$http = $http;
        this.UtilsService = UtilsService;
        this.XmlConverterService = XmlConverterService;
        this.promises = [];
        this.data = {
            capabilities: {},
            domains: {},
            stats: {},
            records: {}
        };
    }

    getCapabilities(cswUrl, proxy, service, version, callback) {
        proxy = proxy || '';
        service = service.toUpperCase() || 'WCS';
        version = version || '2.0.2';
        var params = 'REQUEST=GetCapabilities&SERVICE=' + service + '&VERSION=' + version + '';
        var getCapabilitiesUrl = this.UtilsService.getBaseUrl(cswUrl) + '?' + params;
        var url = this.UtilsService.getProxyUrl(getCapabilitiesUrl, '');
        return this.$http.get(url)
            .then((response) => {
                var data = this.XmlConverterService.xml2js(response.data);
                data.url = getCapabilitiesUrl;
                callback(data);
            })
            .catch((reason, response) => {
                console.log("CswCatalogService.getCapabilities: can't get " + url + " URL.", reason, response);
            });
    }

    getDomain(domain, cswUrl, proxy, callback) {
        proxy = proxy || '';
        var getDomainUrl = this.UtilsService.getBaseUrl(cswUrl) + '?REQUEST=GetDomain&SERVICE=CSW&VERSION=2.0.2&PROPERTYNAME=' + domain;
        var url = this.UtilsService.getProxyUrl(getDomainUrl, proxy);
        return this.$http.get(url)
            .then((response) => {
                var data = this.XmlConverterService.xml2js(response.data);
                data.url = getDomainUrl;
                callback(data);
            })
            .catch((reason, data) => {
                console.log("CswCatalogService.getDomain: can't get " + url + " URL.");
            });
    }

    getRecords(csw, callback) {
        var url_params = [
            'elementsetname=full',
            'version=2.0.2',
            'service=CSW',
            'request=GetRecords',
            'constraintlanguage=CQL_TEXT',
            'postencoding=XML',
            'resulttype=results',
            'outputschema=http://www.isotc211.org/2005/gmd',
            'typenames=gmd:MD_Metadata',
            'constraint_language_version=1.0.0',
            'maxrecords=' + csw.maxRecords,
            'startposition=' + csw.startPosition
        ];
        // contraint
        if (csw.constraint) {
            var constraint = csw.constraintType + "+LIKE+'" + encodeURIComponent('*' + csw.constraint + '*') + "'";
            url_params.push('constraint=' + constraint);
        }
        var params = url_params.join('&');
        var getRecordsUrl = this.UtilsService.getBaseUrl(csw.cswUrl) + '?' + params;
        var url = this.UtilsService.getProxyUrl(getRecordsUrl, csw.proxy);
        console.log(getRecordsUrl, url);
        return this.$http.get(url)
            .then((response) => {
                var data = this.XmlConverterService.xml2js(response.data);
                data.url = getRecordsUrl;
                callback(data);
            })
            .catch((reason, data) => {
                console.log("CswCatalogService.getRecords: can't get " + getRecordsUrl + " URL.");
            });
    }

    getRecord(csw, callback) {
        var url_params = [
            'request=GetRecordById',
            'service=CSW',
            'version=2.0.2',
            'elementsetname=full',
            'postencoding=XML',
            'resulttype=results',
            'outputschema=http://www.isotc211.org/2005/gmd',
            'typenames=gmd:MD_Metadata',
            'id=' + csw.md
        ];
        var params = url_params.join('&');
        var getRecordUrl = this.UtilsService.getBaseUrl(csw.cswUrl) + '?' + params;
        var url = this.UtilsService.getProxyUrl(getRecordUrl, csw.proxy);
        console.log(getRecordUrl, url);
        return this.$http.get(url)
            .then((response) => {
                var data = this.XmlConverterService.xml2js(response.data);
                data.url = getRecordUrl;
                callback(data);
            })
            .catch((reason, data) => {
                console.log("CswCatalogService.getRecords: can't get " + getRecordUrl + " URL.", url, reason, data);
            });
    }
}