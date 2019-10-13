import template from './md-form-browsegraphics.html';

const mdFormBrowsegraphicsController = class MdFormBrowsegraphicsController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    getValues() {
        return this.XmlConverterService.getValue(this.md, this.space, this.field.name);
    }

    $onChanges(changes) {
        if (changes.md) {
            this.md = angular.copy(this.md);
            this.browsegraphics = this.getValues();
            if (this.browsegraphics.length == 0) {
                this.browsegraphics = [{}];
            }
        }
    }

    isValidField(key) {
        return true;
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
        locales: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormBrowsegraphicsController,
};