import template from './md-form-browsegraphics.html';

const mdFormBrowsegraphicsController = class MdFormBrowsegraphicsController {
    constructor(XmlConverterService) {
        'ngInject';
        // this.UtilsService = UtilsService;
        this.XmlConverterService = XmlConverterService;
        // console.log('constructor: mdFormContactsController controller');
    }

    $onInit() {
        // this.show = false;
        // this.UtilsService.getJsonFile(this.extentsFile).then((data) => {
        //     this.extents = data;
        //     this.show = true;
        // });
    }

    getValues() {
        // console.log(this.md, this.space, this.field.name);
        return this.XmlConverterService.getValue(this.md, this.space, this.field.name);
    }

    $onChanges(changes) {
        if (changes.md) {
            this.browsegraphics = this.getValues();
            // console.log(this.browsegraphics);
        }
    }

    onAddBrowseGraphic() {
        this.browsegraphics.push({});
    }

    onRemoveBrowseGraphic(key) {
        if (this.browsegraphics.length > 1) {
            this.browsegraphics.splice(key, 1);
        } else {
            this.browsegraphics[key] = {};
        }
    }

    updateBrowseGraphics(key, browsegraphic) {
        this.browsegraphics[key] = browsegraphic;
        this.update({
            space: this.space,
            field: this.field.name,
            fieldValue: this.browsegraphics
        });
    }
}

export const mdFormBrowsegraphicsComponent = {
    bindings: {
        md: '<',
        field: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormBrowsegraphicsController,
};