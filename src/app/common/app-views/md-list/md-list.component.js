import template from './md-list.html';

const mdListController = class MdListController {
    constructor($state, MdEditApiService) {
        'ngInject';
        this.MdEditApiService = MdEditApiService;
        this.$state = $state;
    }

    $onInit() {}

    deleteDirectory(dir, file) {
        var response = confirm(
            [
                "Voulez-vous vraiment supprimer le fichier '" + file.filename + ".xml' de '" + dir + "' ainsi que le dossier '/" + file.filename + "' associé ?",
                "Fiche: " + file.dataTitle + " (" + file.fileIdentifier + ")"
            ].join('\n')
        );
        if (response == true) {
            var path = file.path.replace(/\\/g, '/');
            this.MdEditApiService.delete(this.appConfig.app.api.directories, {
                    params: {
                        directories: path
                    }
                },
                (response) => {
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
        mdListFiles: '<',
        viewEditor: '<'
    },
    template: template,
    controller: mdListController,
};