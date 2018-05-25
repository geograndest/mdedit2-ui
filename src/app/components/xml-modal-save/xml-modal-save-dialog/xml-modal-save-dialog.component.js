import template from './xml-modal-save-dialog.html';

const xmlModalSaveDialogController = class XmlModalSaveDialogController {
    constructor(XmlModalSaveDialogService, XmlConverterService) {
        'ngInject';

       // console.log('constructor: xmlModalSaveDialogController controller');
        this.XmlModalSaveDialogService = XmlModalSaveDialogService;
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {
        this.mdjs = this.resolve.mdjs;
        this.title = this.resolve.title;
        this.onSave = this.resolve.onSave;

       // console.log(555555, this.mdjs);

        this.mdxml = this.XmlConverterService.js2xml(this.mdjs);
       // console.log(this.mdxml);

        // this.XmlModalSaveDialogService.getDoc(this.contentUrl)
        //     .then((data) => {
        //         this.content = data;
        //     });
    }

    saveXml() {
        this.onSave(this.mdxml);
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