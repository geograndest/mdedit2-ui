import template from './md-form-keywords.html';

const mdFormKeywordsController = class MdFormKeywordsController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    isValidField(key) {
        return true;
    }

    getValues() {
        this.keywords = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        if (this.keywords.length == 0) {
            this.keywords = [{}];
        }
        this.keywordsList = [];
        this.inspirekeywordsList = [];
        for (var k = 0; k < this.keywords.length; k++) {
            var thesaurusName = this.XmlConverterService.getValue(this.keywords[k], this.space, 'thesaurusName')[0];
            if (!thesaurusName || !thesaurusName.toLowerCase().includes('inspire')) {
                this.keywordsList.push(this.keywords[k]);
            } else {
                this.inspirekeywordsList.push(this.keywords[k]);
            }
        }
        if (!this.keywordsList.length) {
            this.keywordsList.push({});
        }
    }

    // mergeKeywords(keywordsList) {
    //     var keywords = [];
    //     if (keywordsList.length) {
    //         var thesaurusDone = [];
    //         for (var i = 0; i < keywordsList.length; i++) {
    //             var thesaurusName1 = this.XmlConverterService.getValue(
    //                 keywordsList[i],
    //                 this.space,
    //                 "thesaurusName"
    //             )[0];
    //             if (thesaurusName1) {
    //                 thesaurusName1 = thesaurusName1.trim();
    //             }
    //             if (!thesaurusDone.includes(thesaurusName1)) {
    //                 var keywords1 = this.XmlConverterService.getValue(
    //                     keywordsList[i],
    //                     this.space,
    //                     "keyword"
    //                 );
    //                 for (var j = 0; j < keywordsList.length; j++) {
    //                     var thesaurusName2 = this.XmlConverterService.getValue(
    //                         keywordsList[j],
    //                         this.space,
    //                         "thesaurusName"
    //                     )[0];
    //                     if (thesaurusName2) {
    //                         thesaurusName2 = thesaurusName2.trim();
    //                     }
    //                     if (
    //                         i !== j &&
    //                         thesaurusName2 === thesaurusName1
    //                     ) {
    //                         var keywords2 = this.XmlConverterService.getValue(
    //                             keywordsList[j],
    //                             this.space,
    //                             "keyword"
    //                         );
    //                         keywords1 = keywords1.concat(keywords2);
    //                     }
    //                 }
    //                 // Get unique keywords from list
    //                 keywords1.map((val) => val.trim());
    //                 keywords1 = keywords1.filter(
    //                     (v, i) => keywords1.indexOf(v) === i
    //                 );
    //                 keywords.push(
    //                     this.XmlConverterService.setValue(
    //                         keywordsList[i],
    //                         this.space,
    //                         "keyword",
    //                         keywords1
    //                     )
    //                 );
    //                 thesaurusDone.push(thesaurusName1);
    //             }
    //         }
    //         keywordsList = keywords;
    //         // console.log(keywordsList)
    //         // this.updateKeywords();
    //     } else if (!keywordsList.length) {
    //         keywords.push({});
    //     }
    //     return keywords;
    // }

    $onChanges(changes) {
        if (changes.md) {
            this.md = angular.copy(this.md);
            this.getValues();
        }
    }

    onAddKeyword() {
        this.keywordsList.push({});
    }

    onRemoveKeyword(key) {
        if (this.keywordsList.length > 1) {
            this.keywordsList.splice(key, 1);
        } else {
            this.keywordsList[key] = {};
        }
        this.updateKeywords();
    }

    updateKeywords(key, keyword) {
        if (key && keyword) {
            this.getValues();
            this.keywordsList[key] = keyword;
        }
        // var keywords = this.mergeKeywords(this.keywordsList).concat(this.inspirekeywordsList)
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: this.keywordsList.concat(this.inspirekeywordsList)
                // fieldValue: keywords
        });
    }
}

export const mdFormKeywordsComponent = {
    bindings: {
        md: '<',
        field: '<',
        list: '<',
        locales: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormKeywordsController,
};