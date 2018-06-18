import template from './xml-modal-save-dialog.html';

const xmlModalSaveDialogController = class XmlModalSaveDialogController {
    constructor(XmlModalSaveDialogService, XmlConverterService) {
        'ngInject';

        this.XmlModalSaveDialogService = XmlModalSaveDialogService;
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        this.xmlUrl = this.resolve.xmlUrl;
        this.mdjs = this.resolve.mdjs;
        this.title = this.resolve.title;
        this.onSave = this.resolve.onSave;
        this.mdxml = this.XmlConverterService.js2xml(this.mdjs);

        // Generate XML file on server
        this.uuid = this.XmlConverterService.getValue(
            this.mdjs,
            // this.space,
            'md',
            'mdFileIdentifier'
        )[0];
        this.onSave({
            data: {
                fileName: this.uuid,
                fileContent: this.mdxml
            }
        }).then((data) => {
            this.xmlUrl = data;
        });
    }

    cancel() {
        this.close();
    }

}

export const xmlModalSaveDialogComponent = {
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    template: template,
    controller: xmlModalSaveDialogController,
};