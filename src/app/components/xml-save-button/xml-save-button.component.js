import template from './xml-save-button.html';

const xmlSaveButtonController = class XmlSaveButtonController {
    constructor(DownloadService, XmlConverterService) {
        'ngInject';
        this.DownloadService = DownloadService;
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    downloadFile() {
        var mdjs = this.getData();
        var file = this.DownloadService.generateXml(mdjs);
        this.setData({
            mdjs: file.mdjs
        })
        this.DownloadService.downloadjs(
            unescape(encodeURIComponent(file.xml)),
            file.uuid + '.xml',
            'text/xml'
        );
    }

    saveFile() {
        var mdjs = this.getData();
        var dataTitle = this.XmlConverterService.getValue(mdjs, 'md', 'dataTitle')[0];
        var dataAbstract = this.XmlConverterService.getValue(mdjs, 'md', 'dataAbstract')[0];
        var dataIdentifiers = this.XmlConverterService.getValue(mdjs, 'md', 'dataIdentifiersCodes').filter(el => el);
        var dataId = dataIdentifiers[0] || false;
        if (!dataTitle || !dataAbstract || !dataId) {
            var response = alert(
                [
                    "Le titre, le résumé et l'identifiant de la donnée sont des éléments obligatoires afin de pouvoir enregistrer la fiche.",
                    "Merci de les compléter et de vous référer à l'aide en ligne au besoin."
                ].join('\n')
            );
        } else {
            var file = this.DownloadService.generateXml(mdjs);
            this.setData({
                mdjs: file.mdjs
            })

            var path = '';
            if (this.url) {
                var url = new URL(this.url);
                path = url.searchParams.get("file")
                path = path.replace(/\\/g, '/');
            } else {
                path = this.dir + '/' + file.uuid + '/' + file.uuid + '.xml'
            }

            this.saveData({
                file: path,
                content: file.xml
            });
        }

    }
}

export const xmlSaveButtonComponent = {
    bindings: {
        format: '@',
        icon: '<',
        text: '<',
        dir: '@',
        url: '@',
        title: '@',
        getData: '&',
        setData: '&',
        saveData: '&',
        user: '<'
    },
    template: template,
    controller: xmlSaveButtonController,
};