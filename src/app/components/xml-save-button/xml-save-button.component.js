import template from './xml-save-button.html';

const xmlSaveButtonController = class XmlSaveButtonController {
    constructor(XmlConverterService, DownloadjsService, LodashService) {
        'ngInject';

        this.XmlConverterService = XmlConverterService;
        this.DownloadjsService = DownloadjsService;
        this.LodashService = LodashService;
    }

    $onInit() {}

    save() {
        // Generate XML file
        var now = this.LodashService.lodash.now()
        this.mdxml = this.XmlConverterService.js2xml(this.mdjs);
        this.uuid = this.XmlConverterService.getValue(
            this.mdjs,
            'md',
            'mdFileIdentifier'
        )[0] || this.LodashService.lodash.uniqueId(now + '-');
        this.XmlConverterService.setValue(
            this.mdjs,
            'md',
            'mdFileIdentifier', this.uuid
        );
        this.DownloadjsService.downloadjs(this.mdxml, this.uuid + '.xml', 'text/xml');
    }

}

export const xmlSaveButtonComponent = {
    bindings: {
        format: '@',
        icon: '@',
        text: '@',
        title: '@',
        mdjs: '<',
    },
    template: template,
    controller: xmlSaveButtonController,
};