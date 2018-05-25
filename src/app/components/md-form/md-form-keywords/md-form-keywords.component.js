import template from './md-form-keywords.html';

const mdFormKeywordsController = class MdFormKeywordsController {
    constructor(XmlConverterService) {
        'ngInject';
        // this.UtilsService = UtilsService;
        this.XmlConverterService = XmlConverterService;
        // console.log('constructor: mdFormContactsController controller');
    }

    $onInit() {}

    getValues() {
        this.keywords = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        console.log(this.keywords, this.keywords.length);
        this.keywordsList = [];
        for (var k = 0; k < this.keywords.length; k++) {
            var thesaurusName = this.XmlConverterService.getValue(this.keywords[k], this.space, 'thesaurusName')[0];
            console.log(k, thesaurusName);
            if (!thesaurusName || !thesaurusName.toLowerCase().includes('inspire')) {
                // this.keywordsList.push(this.keywords[k]);
                this.keywordsList[k] = this.keywords[k];
                // console.log('NOT INSPIRE:', thesaurusName);
            // } else {
            //     console.log('INSPIRE:', thesaurusName);
            }
        }
    }

    $onChanges(changes) {
        if (changes.md) {
            // this.keywords = this.getValues();
            this.getValues();
            // console.log(this.keywords);
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
    }

    updateKeywords(key, keyword) {
        // var keywords = angular.copy(this.keywords);
        // var codeSpace = this.XmlConverterService.getValue(keyword, this.space, 'codeSpace');
        // if (!codeSpace.length) {
        //     var code = this.XmlConverterService.getValue(keyword, this.space, 'code');
        //     keyword = this.XmlConverterService.setValue({}, this.space, 'mdCode', code);
        // }
        this.keywords[key] = keyword;
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: this.keywords
        });
    }
}

export const mdFormKeywordsComponent = {
    bindings: {
        md: '<',
        field: '<',
        list: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormKeywordsController,
};