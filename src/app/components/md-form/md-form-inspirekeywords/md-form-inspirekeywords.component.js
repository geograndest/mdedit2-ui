import template from './md-form-inspirekeywords.html';

const mdFormInspirekeywordsController = class MdFormInspirekeywordsController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    isValidField() {
        for (var i = 0; i < this.inspirekeywordsList.length; i++) {
            if (this.XmlConverterService.getValue(this.inspirekeywordsList[i], this.space, 'keyword').length && this.XmlConverterService.getValue(this.inspirekeywordsList[i], this.space, 'keyword')[0]) {
                return true;
            }
        }
        return false;
    }

    getValues() {
        var keywords = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        if (keywords.length == 0) {
            keywords = [{}];
        }
        this.keywordsList = [];
        this.inspirekeywordsList = [];
        for (var k = 0; k < keywords.length; k++) {
            var thesaurusName = this.XmlConverterService.getValue(keywords[k], this.space, 'thesaurusName')[0];
            var keyword = this.XmlConverterService.getValue(keywords[k], this.space, 'keyword')[0];
            if (keyword) {
                if (thesaurusName && thesaurusName.toLowerCase().includes('inspire')) {
                    this.inspirekeywordsList.push(keywords[k]);
                } else {
                    this.keywordsList.push(keywords[k]);
                }
            }
        }
        if (!this.inspirekeywordsList.length) {
            this.inspirekeywordsList.push({});
        }
    }

    $onChanges(changes) {
        if (changes.md) {
            this.md = angular.copy(this.md);
            this.getValues();
        }
    }

    onAddInspirekeyword() {
        this.inspirekeywordsList.push({});
        // if (this.inspirekeywordsList.length) {
        //     var keyword = this.XmlConverterService.getValue(this.inspirekeywordsList[this.inspirekeywordsList.length - 1], this.space, 'keyword');
        //     if (keyword[0]) {
        //         this.inspirekeywordsList.push({});
        //     }
        // }
    }

    onRemoveInspirekeyword(key) {
        var fieldValue;
        if (this.inspirekeywordsList.length > 1) {
            this.inspirekeywordsList.splice(key, 1);
            fieldValue = this.keywordsList.concat(this.inspirekeywordsList);
        } else {
            this.inspirekeywordsList[key] = {};
            fieldValue = this.keywordsList;
        }
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: fieldValue
        });
    }

    updateInspirekeywords(key, inspirekeyword) {
        if (inspirekeyword) {
            var keyword = this.XmlConverterService.getValue(inspirekeyword, this.space, 'keyword');
            if (keyword[0]) {
                this.getValues();
                this.inspirekeywordsList[key] = inspirekeyword;
                this.update({
                    space: this.space,
                    field: this.field.name,
                    fieldValue: this.keywordsList.concat(this.inspirekeywordsList)
                });
            }
        }
    }
}

export const mdFormInspirekeywordsComponent = {
    bindings: {
        md: '<',
        field: '<',
        list: '<',
        locales: '<',
        hideTitle: '@',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormInspirekeywordsController,
};