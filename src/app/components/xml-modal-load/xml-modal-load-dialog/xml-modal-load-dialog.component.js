import template from './xml-modal-load-dialog.html';

const xmlModalLoadDialogController = class XmlModalLoadDialogController {
    constructor(XmlModalLoadDialogService) {
        'ngInject';
        this.XmlModalLoadDialogService = XmlModalLoadDialogService;
        // this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        this.title = this.resolve.title;
        this.models = this.resolve.models;
        this.onLoad = this.resolve.onLoad;

        // Manage dynamic loading file on change
        var inputElement = document.getElementById('file');
        inputElement.addEventListener("change", () => {
                this.getFile()
            },
            false);
    }

    loadModel(key_model) {
        this.XmlModalLoadDialogService.getUrl(this.models[key_model].file, (data) => {
            this.onLoad({
                mdjs: data
            });
        });
        this.close();
    }

    getFile(url) {
        // console.log(2);
        if (url) {
            // console.log(url);
            this.XmlModalLoadDialogService.getUrl(url, (data) => {
                this.onLoad({
                    mdjs: data
                });
            });
        } else {
            var file = document.getElementById('file').files[0];
            this.XmlModalLoadDialogService.readFile(file, (data) => {
                this.onLoad({
                    mdjs: data
                });
            });
        }
        this.close();
    }

    cancel() {
        this.close();
    }
}

export const xmlModalLoadDialogComponent = {
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    template: template,
    controller: xmlModalLoadDialogController,
};