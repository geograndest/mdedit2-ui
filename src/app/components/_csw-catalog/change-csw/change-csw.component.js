import template from './change-csw.html';

const changeCswController = class ChangeCswController {
    constructor() {}

    $onInit() {}

    changeCsw(cswUrl) {
        this.cswUrl = cswUrl;
        this.onChange({
            cswUrl: this.cswUrl
        });
    }
}

export const changeCswComponent = {
    bindings: {
        button: '<',
        placeholder: '<',
        cswList: '<',
        cswUrl: '<',
        onChange: '&'
    },
    template: template,
    controller: changeCswController,
};