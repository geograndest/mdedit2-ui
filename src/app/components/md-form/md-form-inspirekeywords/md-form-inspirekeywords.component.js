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
        this.keywords = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        // console.log(this.keywords, this.keywords.length);
        this.keywordsList = [];
        this.inspirekeywordsList = [];
        for (var k = 0; k < this.keywords.length; k++) {
            var thesaurusName = this.XmlConverterService.getValue(this.keywords[k], this.space, 'thesaurusName')[0];
            console.log(k, thesaurusName);
            if (thesaurusName && thesaurusName.toLowerCase().includes('inspire')) {
                // this.keywords[k] = this.keywords[k];
                this.inspirekeywordsList.push(this.keywords[k]);
                // console.log('NOT INSPIRE:', thesaurusName);
            } else {
                // this.keywordsList[k] = this.keywords[k];
                this.keywordsList.push(this.keywords[k]);
                // console.log('INSPIRE:', thesaurusName);
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
            // console.log(this.inspirekeywords);
        }
    }

    onAddInspirekeyword() {
        this.inspirekeywordsList.push({});
    }

    onRemoveInspirekeyword(key) {
        if (this.inspirekeywordsList.length > 1) {
            this.inspirekeywordsList.splice(key, 1);
        } else {
            this.inspirekeywordsList[key] = {};
        }
        this.updateInspirekeywords();
    }

    updateInspirekeywords(key, inspirekeyword) {
        if (key && inspirekeyword) {
            this.getValues();
            this.inspirekeywordsList[key] = inspirekeyword;
        }
        console.log(124, this.keywords.length, this.keywordsList.length, this.inspirekeywordsList.length);
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: this.keywordsList.concat(this.inspirekeywordsList)
        });
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