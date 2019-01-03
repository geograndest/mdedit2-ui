import template from './xml-save-button.html';

const xmlSaveButtonController = class XmlSaveButtonController {
    constructor(XmlConverterService, DownloadjsService, LodashService, StoreService) {
        'ngInject';

        this.XmlConverterService = XmlConverterService;
        this.DownloadjsService = DownloadjsService;
        this.LodashService = LodashService;
        // this.StoreService = StoreService;
    }

    $onInit() {}

    save() {
        // Generate XML file
        var mdjs = this.getData()
        // var mdjs = this.StoreService.getData().mdjs;
        var now = this.LodashService.lodash.now()
        var uuid = this.XmlConverterService.getValue(mdjs, 'md', 'mdFileIdentifier')[0];
        if (!uuid) {
            uuid = this.LodashService.lodash.uniqueId(now + '-');
            this.XmlConverterService.setValue(mdjs, 'md', 'mdFileIdentifier', [uuid]);
        }

        // Get dataIdentifiers and check if contents "uuid" value, else add it
        var dataIdentifiersCodes = this.XmlConverterService.getValue(mdjs, 'md', 'dataIdentifiersCodes')
        dataIdentifiersCodes = dataIdentifiersCodes.filter((n) => {
            return n
        })
        if (!dataIdentifiersCodes.includes(uuid)) {
            var dataIdentifiers = this.XmlConverterService.getValue(mdjs, 'md', 'dataIdentifiers');
            var code = this.XmlConverterService.setValue({}, 'md', 'code', [uuid]);
            dataIdentifiers.push(code)
            this.XmlConverterService.setValue(mdjs, 'md', 'dataIdentifiers', dataIdentifiers);
        }

        this.saveData({
            mdjs: mdjs
        })

        var xml = this.XmlConverterService.js2xml(mdjs);
        this.DownloadjsService.downloadjs(unescape(encodeURIComponent(xml)), uuid + '.xml', 'text/xml');
    }

}

export const xmlSaveButtonComponent = {
    bindings: {
        format: '@',
        icon: '@',
        text: '@',
        title: '@',
        getData: '&',
        saveData: '&',
    },
    template: template,
    controller: xmlSaveButtonController,
};