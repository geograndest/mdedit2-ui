import template from './xml-save-button.html';

const xmlSaveButtonController = class XmlSaveButtonController {
    constructor($http, XmlConverterService, DownloadjsService, LodashService, CleandeepService) {
        'ngInject';

        this.XmlConverterService = XmlConverterService;
        this.DownloadjsService = DownloadjsService;
        this.LodashService = LodashService;
        this.CleandeepService = CleandeepService;
        this.$http = $http;
    }

    $onInit() {}

    generateXml() {
        // Generate XML file
        var mdjs = this.getData();
        var now = this.LodashService.lodash.now();
        var uuid = this.XmlConverterService.getValue(mdjs, 'md', 'mdFileIdentifier')[0];
        if (!uuid) {
            uuid = this.LodashService.lodash.uniqueId(now + '-');
            this.XmlConverterService.setValue(mdjs, 'md', 'mdFileIdentifier', [uuid]);
        }

        // Get dataIdentifiers and check if contents "uuid" value, else add it (to empty value if exist)
        var dataIdentifiersCodes = this.XmlConverterService.getValue(mdjs, 'md', 'dataIdentifiersCodes')
        if (!dataIdentifiersCodes.includes(uuid)) {
            var newCode = this.XmlConverterService.setValue({}, 'md', 'code', [uuid]);
            var dataIdentifiers = this.XmlConverterService.getValue(mdjs, 'md', 'dataIdentifiers')
            if (dataIdentifiersCodes.includes('')) {
                for (var i = 0; i < dataIdentifiers.length; i++) {
                    var code = this.XmlConverterService.getValue(dataIdentifiers[i], 'md', 'code')
                    if (code == '') {
                        dataIdentifiers[i] = newCode;
                    }
                }
            } else {
                dataIdentifiers.push(newCode);
            }
            this.XmlConverterService.setValue(mdjs, 'md', 'dataIdentifiers', dataIdentifiers);
        }

        this.setData({
            mdjs: mdjs
        })

        var xml = this.XmlConverterService.js2xml(this.CleandeepService.cleandeep(mdjs));
        return {
            uuid: uuid,
            xml: xml
        };
    }

    download() {
        var file = this.generateXml();
        this.DownloadjsService.downloadjs(unescape(encodeURIComponent(file.xml)), file.uuid + '.xml', 'text/xml');
    }

    save() {
        var file = this.generateXml();
        this.saveData({
            filename: file.uuid + '.xml',
            content: file.xml
        });
    }

}

export const xmlSaveButtonComponent = {
    bindings: {
        format: '@',
        icon: '<',
        text: '<',
        title: '@',
        getData: '&',
        setData: '&',
        saveData: '&',
        auth: '<'
    },
    template: template,
    controller: xmlSaveButtonController,
};