import template from './md-form-conformity.html';

const mdFormConformityController = class MdFormConformityController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    $onChanges(changes) {}

    onSave(space, field, fieldValue, separator) {
        this.XmlConverterService.setValue(this.conformity, space, field, fieldValue, separator);
        this.updateConformity({
            key: this.key,
            conformity: this.conformity
        });
    }

    onRemove() {
        this.removeConformity({
            key: this.key
        });
    }

    // onSelectSpecification(key, value) {
    //     for (let i = 0; i < this.specifications.length; i++) {
    //         if (this.specifications[i].name == value) {
    //             this.XmlConverterService.setValue(this.conformity, 'md', 'specificationDate', [this.specifications[i].date]);
    //             this.XmlConverterService.setValue(this.conformity, 'md', 'specificationDateType', ['publication']);
    //         }
    //     }
    // }
}

export const mdFormConformityComponent = {
    bindings: {
        multi: '@',
        key: '@',
        conformity: '<',
        fields: '<',
        pass: '<',
        updateConformity: '&',
        removeConformity: '&'
    },
    template: template,
    controller: mdFormConformityController,
};