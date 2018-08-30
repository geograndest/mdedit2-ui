const mdViewController = class MdViewController {
    constructor() {
        console.log(111)
    }

    $onInit() {}

}

export const mdViewComponent = {
    bindings: {
        // mdFormLocales: '<'
    },
    // template: template,
    controller: mdViewController,
};