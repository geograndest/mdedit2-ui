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

    formatDate(datetime) {
        var dd = datetime.getDate();
        var mm = datetime.getMonth() + 1;
        var yyyy = datetime.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return yyyy + '-' + mm + '-' + dd;
    }

    mergeKeywords(keywordsList) {
        var keywords = [];
        if (keywordsList.length) {
            var thesaurusDone = [];
            for (var i = 0; i < keywordsList.length; i++) {
                // Use concatenation as code for 'block'
                var block1 = this.XmlConverterService.getValue(keywordsList[i], 'md', "thesaurusName")[0] +
                    this.XmlConverterService.getValue(keywordsList[i], 'md', "thesaurusDatePublication")[0] +
                    this.XmlConverterService.getValue(keywordsList[i], 'md', "keywordType")[0];
                if (!thesaurusDone.includes(block1)) {
                    var keywords1 = this.XmlConverterService.getValue(keywordsList[i], 'md', "keyword");
                    for (var j = 0; j < keywordsList.length; j++) {
                        var block2 =
                            this.XmlConverterService.getValue(keywordsList[j], 'md', "thesaurusName")[0] +
                            this.XmlConverterService.getValue(keywordsList[j], 'md', "thesaurusDatePublication")[0] +
                            this.XmlConverterService.getValue(keywordsList[j], 'md', "keywordType")[0];
                        if (
                            i !== j &&
                            this.LodashService.lodash.isEqual(block1, block2)
                        ) {
                            var keywords2 = this.XmlConverterService.getValue(keywordsList[j], 'md', "keyword");
                            keywords1 = keywords1.concat(keywords2);
                        }
                    }
                    // Get unique keywords from list
                    keywords1.map((val) => val.trim());
                    keywords1 = keywords1.filter(
                        (v, i) => keywords1.indexOf(v) === i
                    );
                    keywords.push(
                        this.XmlConverterService.setValue(keywordsList[i], 'md', "keyword", keywords1)
                    );
                    thesaurusDone.push(block1);
                }
            }
        } else if (!keywordsList.length) {
            keywords.push({});
        }
        return keywords;
    }

    checkOtherRestrictions() {
        // TODO:
        // Récupérer les 'dataLegalOtherConstraints' et si 'dataLegalAccessInspireConstraints' existe (non vide ou null) vérifier qu'il y ait une fois et qu'une fois "otherRestrictions".
    }

    updateDateStamp(mdjs, date) {
        this.XmlConverterService.setValue(mdjs, 'md', "mdDateStamp", [date]);
    }

    generateXml() {
        // Generate XML file
        var mdjs = this.getData();
        var now = this.LodashService.lodash.now();
        var dataIdentifiersCodes = this.XmlConverterService.getValue(mdjs, 'md', 'dataIdentifiersCodes')
        var dataId = dataIdentifiersCodes[0];
        var fileId = this.XmlConverterService.getValue(mdjs, 'md', 'mdFileIdentifier')[0];
        if (!fileId) {
            if (!dataId) {
                dataId = this.LodashService.lodash.uniqueId(now + '-');
            } else {
                if (dataId.startsWith('http')) {
                    dataId = dataId.split('?')[0];
                    dataId = dataId.replace(/\/$/, '');
                    dataId = dataId.substr(dataId.lastIndexOf('/') + 1);
                }
                fileId = dataId
            }
            this.XmlConverterService.setValue(mdjs, 'md', 'mdFileIdentifier', [dataId]);
        } else if (!dataId) {
            dataId = fileId
        }

        // Get dataIdentifiers and check if contents "uuid" value, else add it (to empty value if exist)
        if (!dataIdentifiersCodes.includes(dataId)) {
            var newCode = this.XmlConverterService.setValue({}, 'md', 'code', [dataId]);
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

        // Merge keywords by thesaurus and type
        var keywords = this.XmlConverterService.getValue(mdjs, 'md', 'dataKeywords');
        keywords = this.mergeKeywords(keywords);
        this.XmlConverterService.setValue(mdjs, 'md', 'dataKeywords', keywords);
        // Update dateStamp
        this.updateDateStamp(mdjs, this.formatDate(new Date()));

        this.setData({
            mdjs: mdjs
        })

        var xml = this.XmlConverterService.js2xml(this.CleandeepService.cleandeep(mdjs));
        return {
            uuid: dataId,
            xml: xml
        };
    }

    download() {
        var file = this.generateXml();
        this.DownloadjsService.downloadjs(
            unescape(encodeURIComponent(file.xml)),
            file.uuid + '.xml',
            'text/xml'
        );
    }

    save() {
        var file = this.generateXml();
        this.saveData({
            filename: file.uuid,
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