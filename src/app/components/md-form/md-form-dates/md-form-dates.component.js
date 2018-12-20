import template from './md-form-dates.html';

/** fonctionnement
 * 1. récupérer la liste des dates
 * 2. générer 3 valeurs et peupler avec les dates correspondante (se baser sur le type de date): this.dateCreation, this.dateEdition, this.datePublication
 * 3. Pour la mise à jour effacer l'ensemble de l'objet this.dates et le recréer à partir des 3 dates précédentes
 */

const mdFormDatesController = class MdFormDatesController {
    constructor(XmlConverterService) {
        'ngInject';
        this.XmlConverterService = XmlConverterService;
    }

    emptyValues() {
        this.datecreation = this.XmlConverterService.setValue({}, 'md', 'date', '');
        this.dateedition = this.XmlConverterService.setValue({}, 'md', 'date', '');
        this.datepublication = this.XmlConverterService.setValue({}, 'md', 'date', '');
    }

    isValidField(key) {
        return true;
    }

    $onInit() {
        this.emptyValues();
    }

    getValues() {
        this.emptyValues();
        var dates = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        for (var i = 0; i < dates.length; i++) {
            var dateType = this.XmlConverterService.getValue(dates[i], this.space, 'dateType');
            if (dateType[0] == 'creation') {
                this.datecreation = dates[i];
            }
            if (dateType[0] == 'edition') {
                this.dateedition = dates[i];
            }
            if (dateType[0] == 'publication') {
                this.datepublication = dates[i];
            }
        }
    }

    $onChanges(changes) {
        if (changes.md) {
            this.getValues();
        }
    }

    updateDate(space, field, fieldValue, dateType) {
        if (dateType == 'creation') {
            this.XmlConverterService.setValue(this.datecreation, space, field, fieldValue);
        }
        if (dateType == 'edition') {
            this.dateedition = this.XmlConverterService.setValue(this.dateedition, space, field, fieldValue);
        }
        if (dateType == 'publication') {
            this.datepublication = this.XmlConverterService.setValue(this.datepublication, space, field, fieldValue);
        }
        var dates = [this.datecreation, this.dateedition, this.datepublication];
        this.update({
            space: this.space,
            field: 'dataDates',
            fieldValue: dates
        });
    }
}

export const mdFormDatesComponent = {
    bindings: {
        md: '<',
        field: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormDatesController,
};