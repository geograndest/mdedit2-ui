import template from "./md-form-files.html";
import bsCustomFileInput from "bs-custom-file-input";

const mdFormFilesController = class MdFormFilesController {
    constructor($state, $http, MdEditApiService) {
        "ngInject";
        this.$state = $state;
        this.$http = $http;
        this.MdEditApiService = MdEditApiService;
    }

    $onInit() {
        this.MdEditApiService.get(
            this.apiFiles + "&directory=" + this.directory + "&recursive=1"
        ).then(data => {
            if (data) {
                this.files = data.files;
                this.root_url = data.user.root_url;
            }
        });

        bsCustomFileInput.init();
        var input_file = document.getElementById("input_file");
        input_file.addEventListener(
            "change",
            () => {
                this.input_file = document.getElementById(
                    "input_file"
                ).files[0];
            },
            false
        );
    }

    uploadFile() {
        var formdata = new FormData();
        var file = document.getElementById('input_file').files[0];
        formdata.append('file', file);

        this.MdEditApiService.upload(this.apiFiles, formdata, {
            headers: {
                'Content-Type': undefined
            },
            params: {
                upload: 1,
                file: this.directory + this.input_file.name
            }
        }).then((response) => {
            console.log(response);
            this.$state.reload();
        });
    }


    removeFile(file, key) {
        var response = confirm(
            [
                "Voulez-vous vraiment supprimer le fichier '" + file.file + "' ?"
            ].join('\n')
        );
        if (response == true) {
            this.MdEditApiService.delete(this.apiFiles, {
                params: {
                    files: file.file
                }
            }).then(
                (response) => {
                    console.log(response);
                    this.$state.reload();
                });
        }
    }

    copyUrl(data) {
        console.log(data.inputId);
        var input = document.getElementById(data.inputId);
        input.type = "text";
        input.focus();
        input.select();
        input.setSelectionRange(0, 9999);
        document.execCommand("copy");
        input.type = "hidden";
    }

};

export const mdFormFilesComponent = {
    bindings: {
        apiFiles: "@",
        directory: "@",
        locales: "<"
    },
    template: template,
    controller: mdFormFilesController
};