import template from './change-lang.html';

const changeLangController = class ChangeLangController {
    constructor() {}

    $onInit() {
        if (!Array.isArray(this.locales)) {
            this.locales = Object.keys(this.locales);
        }
        if (typeof this.locales === 'string') {
            this.locales = this.locales.split(',');
        }
    }

    changeLocale(lang) {
        this.lang = lang;
        this.onChange({
            lang: lang
        });
    };

}

export const changeLangComponent = {
    bindings: {
        tooltip: '@',
        lang: '<',
        locales: '<',
        onChange: '&'
    },
    template: template,
    controller: changeLangController,
};