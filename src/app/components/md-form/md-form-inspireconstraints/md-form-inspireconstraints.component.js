import template from './md-form-inspireconstraints.html';

/** fonctionnement
 * 1. récupérer la liste des dates
 * 2. générer 3 valeurs et peupler avec les dates correspondante (se baser sur le type de date): this.dateCreation, this.dateEdition, this.datePublication
 * 3. Pour la mise à jour effacer l'ensemble de l'objet this.dates et le recréer à partir des 3 dates précédentes
 */

const mdFormInspireconstraintsController = class MdFormInspireconstraintsController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    // isValidField(key) {
    //     return true;
    // }

    $onInit() {}

    getValues() {
        this.inspireConstraints = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
    }

    $onChanges(changes) {
        if (changes.md) {
            this.getValues();
        }
    }

    updateInspireConstraints(space, field, fieldValue) {
        this.XmlConverterService.setValue(this.inspireConstraints, space, field, fieldValue);
        this.update({
            space: space,
            field: 'dataLegalAccessInspireConstraints',
            fieldValue: this.inspireConstraints
        });
    }
}

export const mdFormInspireconstraintsComponent = {
    bindings: {
        md: '<',
        field: '<',
        locales: '<',
        list: '<',
        type: '@',
        edit: '@',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormInspireconstraintsController,
};