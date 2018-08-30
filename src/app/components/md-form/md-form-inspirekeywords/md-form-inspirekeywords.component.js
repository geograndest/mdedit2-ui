import template from './md-form-inspirekeywords.html';

const mdFormInspirekeywordsController = class MdFormInspirekeywordsController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
        // console.log('constructor: mdFormContactsController controller');
    }

    $onInit() {}

    getValues() {
        console.log(this.field);
        var keywords = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        if (keywords.length == 0) {
            keywords = [{}];
        }
        // console.log(this.keywords, this.keywords.length);
        this.keywordsList = [];
        this.inspirekeywordsList = [];
        for (var k = 0; k < keywords.length; k++) {
            var thesaurusName = this.XmlConverterService.getValue(keywords[k], this.space, 'thesaurusName')[0];
            var keyword = this.XmlConverterService.getValue(keywords[k], this.space, 'keyword')[0];
            console.log(k, thesaurusName);
            if (keyword) {
                if (thesaurusName && thesaurusName.toLowerCase().includes('inspire')) {
                    // this.keywords[k] = this.keywords[k];
                    this.inspirekeywordsList.push(keywords[k]);
                    // console.log('NOT INSPIRE:', thesaurusName);
                } else {
                    // this.keywordsList[k] = this.keywords[k];
                    this.keywordsList.push(keywords[k]);
                    // console.log('INSPIRE:', thesaurusName);
                }
            }
        }
        console.log(111, this.inspirekeywordsList, this.inspirekeywordsList.length);
        if (!this.inspirekeywordsList.length) {
            this.inspirekeywordsList.push({});
        }
    }

    $onChanges(changes) {
        if (changes.md) {
            this.getValues();
        }
    }

    onAddInspirekeyword() {
        // console.log(this.inspirekeywordsList, this.inspirekeywordsList[this.inspirekeywordsList.length - 1]);
        if (this.inspirekeywordsList.length) {
            var keyword = this.XmlConverterService.getValue(this.inspirekeywordsList[this.inspirekeywordsList.length - 1], this.space, 'keyword');
            if (keyword[0]) {
                // console.log('u1');
                this.inspirekeywordsList.push({});
            }
        }
    }

    onRemoveInspirekeyword(key) {
        var fieldValue;
        if (this.inspirekeywordsList.length > 1) {
            // console.log('u2');
            this.inspirekeywordsList.splice(key, 1);
            fieldValue = this.keywordsList.concat(this.inspirekeywordsList);
            // console.log(489, this.inspirekeywordsList.length);
        } else {
            // console.log('u3');
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
        // console.log('u4', key, inspirekeyword);
        if (inspirekeyword) {
            var keyword = this.XmlConverterService.getValue(inspirekeyword, this.space, 'keyword');
            if (keyword[0]) {
                // console.log('u5', keyword[0]);
                this.getValues();
                this.inspirekeywordsList[key] = inspirekeyword;
                // if (key && inspirekeyword) {
                // }
                // console.log(124, this.keywordsList.length, this.inspirekeywordsList.length);
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
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormInspirekeywordsController,
};