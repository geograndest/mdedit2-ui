import template from './md-list.html';

const mdListController = class MdListController {
    constructor($state, UtilsService) {
        'ngInject';
        this.UtilsService = UtilsService;
        this.$state = $state;
    }

    $onInit() {}

    deleteFile(filename) {
        var response = confirm("Voulez-vous vraiment supprimer le fichier " + filename + " ?");
        if (response == true) {
            this.UtilsService.post(this.appConfig.app.api.deleteFile, {
                filename: filename
            }, function(response) {
                this.$state.reload();
            });
        }
    }
}

export const mdListComponent = {
    bindings: {
        appConfig: '<',
        appLocales: '<',
        mdListLocales: '<',
        mdListFiles: '<'
    },
    template: template,
    controller: mdListController,
};