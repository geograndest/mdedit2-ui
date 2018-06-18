import template from './md-form-inspirekeywords.html';

const mdFormInspirekeywordsController = class MdFormInspirekeywordsController {
    constructor(XmlConverterService) {
        'ngInject';
        // this.UtilsService = UtilsService;
        this.XmlConverterService = XmlConverterService;
        // console.log('constructor: mdFormContactsController controller');
    }

    $onInit() {}

    getValues() {
        this.inspirekeywords = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        console.log(this.inspirekeywords, this.inspirekeywords.length);
        this.inspirekeywordsList = [];
        for (var k = 0; k < this.inspirekeywords.length; k++) {
            var thesaurusName = this.XmlConverterService.getValue(this.inspirekeywords[k], this.space, 'thesaurusName')[0];
            console.log(k, thesaurusName);
            if (!thesaurusName || !thesaurusName.toLowerCase().includes('inspire')) {
                // this.inspirekeywordsList.push(this.inspirekeywords[k]);
                this.inspirekeywordsList[k] = this.inspirekeywords[k];
                // console.log('NOT INSPIRE:', thesaurusName);
            // } else {
            //     console.log('INSPIRE:', thesaurusName);
            }
        }
    }

    $onChanges(changes) {
        if (changes.md) {
            // this.inspirekeywords = this.getValues();
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
    }

    updateInspirekeywords(key, inspirekeyword) {
        // var inspirekeywords = angular.copy(this.inspirekeywords);
        // var codeSpace = this.XmlConverterService.getValue(inspirekeyword, this.space, 'codeSpace');
        // if (!codeSpace.length) {
        //     var code = this.XmlConverterService.getValue(inspirekeyword, this.space, 'code');
        //     inspirekeyword = this.XmlConverterService.setValue({}, this.space, 'mdCode', code);
        // }
        this.inspirekeywords[key] = inspirekeyword;
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: this.inspirekeywords
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