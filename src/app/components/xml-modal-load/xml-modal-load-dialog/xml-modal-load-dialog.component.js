import template from './xml-modal-load-dialog.html';

const xmlModalLoadDialogController = class XmlModalLoadDialogController {
    constructor(XmlModalLoadDialogService) {
        'ngInject';
        this.XmlModalLoadDialogService = XmlModalLoadDialogService;
    }

    $onInit() {
        this.title = this.resolve.title;
        this.proxy = this.resolve.proxy;
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
        this.XmlModalLoadDialogService.getUrl(this.proxy, this.models[key_model].file, (data) => {
            this.onLoad({
                xml: data
            });
        });
        this.close();
    }

    getFile(url) {
        if (url) {
            this.XmlModalLoadDialogService.getUrl(this.proxy, url, (data) => {
                this.onLoad({
                    xml: data
                });
            });
        } else {
            var file = document.getElementById('file').files[0];
            this.XmlModalLoadDialogService.readFile(file, (data) => {
                this.onLoad({
                    xml: data
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