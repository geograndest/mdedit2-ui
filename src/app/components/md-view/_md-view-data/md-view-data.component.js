const mdViewDataController = class MdViewDataController {
    constructor($window) {
        'ngInject';
        this.$window = $window;
    }

    $onInit() {}

    onPrint() {
        this.$window.print();
    }

    onClose() {
        this.goBack();
    }

}

export const mdViewDataComponent = {
    bindings: {
        tpl: '@',
        md: '@',
        locales: '<',
        codelists: '<',
        goBack: '&'
    },
    template: template,
    controller: mdViewDataController,
};