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

    $onChanges(changes) {
        if (changes.md) {
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