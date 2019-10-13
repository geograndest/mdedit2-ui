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

    $onInit() {
        // console.log(this.field);
        // this.getValues();
    }

    getValues() {
        this.inspireConstraints = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        console.log(this.inspireConstraints, this.field.name);
        // for (var i = 0; i < dates.length; i++) {
        //     var dateType = this.XmlConverterService.getValue(dates[i], this.space, 'dateType');
        //     if (dateType[0] == 'creation') {
        //         this.datecreation = dates[i];
        //     }
        //     if (dateType[0] == 'edition') {
        //         this.dateedition = dates[i];
        //     }
        //     if (dateType[0] == 'publication') {
        //         this.datepublication = dates[i];
        //     }
        // }
        // this.datecreation = this.datecreation || {};
        // this.dateedition = this.dateedition || {};
        // this.datepublication = this.datepublication || {};
    }

    $onChanges(changes) {
        if (changes.md) {
            this.md = angular.copy(this.md);
            this.getValues();
        }
    }

    updateInspireConstraints(space, field, fieldValue) {
        console.log(space, field, fieldValue);
        this.XmlConverterService.setValue(this.inspireConstraints, space, field, fieldValue);
        // this.getValues();
        this.update({
            space: space,
            // field: field,
            field: 'dataLegalAccessInspireConstraints',
            fieldValue: this.inspireConstraints
                // fieldValue: inspireConstraints
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