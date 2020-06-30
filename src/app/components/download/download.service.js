import downloadjs from 'downloadjs';

export class DownloadService {
    constructor(XmlConverterService, LodashService, CleandeepService) {
        'ngInject';
        this.downloadjs = downloadjs;
        this.XmlConverterService = XmlConverterService;
        this.LodashService = LodashService;
        this.CleandeepService = CleandeepService;
    }

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

    generateXml(mdjs) {
        // Generate XML file
        var now = this.LodashService.lodash.now();
        var dataIdentifiersCodes = this.XmlConverterService.getValue(mdjs, 'md', 'dataIdentifiersCodes').filter(el => el);
        var dataId = dataIdentifiersCodes[0];
        var fileId = this.XmlConverterService.getValue(mdjs, 'md', 'mdFileIdentifier')[0];
        if (dataId) {
            fileId = dataId;
            if (dataId.startsWith('http')) {
                fileId = fileId.split('?')[0];
                fileId = fileId.replace(/\/$/, '');
                fileId = fileId.substr(fileId.lastIndexOf('/') + 1);
            }
        } else {
            if (fileId) {
                dataId = fileId
            } else {
                dataId = this.LodashService.lodash.uniqueId(now + '-');
                fileId = dataId;
            }
        }
        this.XmlConverterService.setValue(mdjs, 'md', 'mdFileIdentifier', [fileId]);

        // Get dataIdentifiers and check if contents "uuid" value, else add it (to empty value if exist)
        if (!dataIdentifiersCodes.includes(dataId)) {
            var newCode = this.XmlConverterService.setValue({}, 'md', 'mdCode', [dataId]);
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

        // this.setData({
        //     mdjs: mdjs
        // })

        var xml = this.XmlConverterService.js2xml(this.CleandeepService.cleandeep(mdjs));
        return {
            mdjs: mdjs,
            uuid: dataId,
            xml: xml
        };
    }

}