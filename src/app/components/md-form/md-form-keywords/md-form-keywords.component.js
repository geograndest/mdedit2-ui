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
        if (this.keywords.length == 0) {
            this.keywords = [{}];
        }
        console.log(122, this.keywords, this.keywords.length);
        this.keywordsList = [];
        this.inspirekeywordsList = [];
        for (var k = 0; k < this.keywords.length; k++) {
            var thesaurusName = this.XmlConverterService.getValue(this.keywords[k], this.space, 'thesaurusName')[0];
            console.log(k, thesaurusName);
            if (!thesaurusName || !thesaurusName.toLowerCase().includes('inspire')) {
                // this.keywordsList[k] = this.keywords[k];
                this.keywordsList.push(this.keywords[k]);
                // console.log('NOT INSPIRE:', thesaurusName);
            } else {
                // this.inspirekeywordsList[k] = this.keywords[k];
                this.inspirekeywordsList.push(this.keywords[k]);
                // console.log('INSPIRE:', thesaurusName);
            }
        }
        if (!this.keywordsList.length) {
            this.keywordsList.push({});
        }
        console.log(555, this.keywords.length, this.keywordsList.length, this.inspirekeywordsList.length);
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
        this.updateKeywords();
    }

    updateKeywords(key, keyword) {
        if (key && keyword) {
            this.getValues();
            this.keywordsList[key] = keyword;
        }
        console.log(123, this.keywords.length, this.keywordsList.length, this.inspirekeywordsList.length);
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: this.keywordsList.concat(this.inspirekeywordsList)
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