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

    isValid() {
        var datecreation = this.XmlConverterService.getValue(this.datecreation, this.space, this.field.dates.dateCreation.name).filter((el) => {
            return el;
        });
        var dateedition = this.XmlConverterService.getValue(this.dateedition, this.space, this.field.dates.dateEdition.name).filter((el) => {
            return el;
        });
        var datepublication = this.XmlConverterService.getValue(this.datepublication, this.space, this.field.dates.datePublication.name).filter((el) => {
            return el;
        });
        return (datecreation.length || dateedition.length || datepublication.length);
    }

    $onInit() {
    }

    getValues() {
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
        this.datecreation = this.datecreation || {};
        this.dateedition = this.dateedition || {};
        this.datepublication = this.datepublication || {};
    }

    $onChanges(changes) {
        if (changes.md) {
            this.getValues();
        }
    }

    updateDate(space, field, fieldValue, dateType) {
        if (dateType == 'creation') {
            this.datecreation = this.XmlConverterService.setValue(this.datecreation, space, field, fieldValue);
            this.XmlConverterService.setValue(this.datecreation, space, 'dateType', [dateType]);
        }
        if (dateType == 'edition') {
            this.dateedition = this.XmlConverterService.setValue(this.dateedition, space, field, fieldValue);
            this.XmlConverterService.setValue(this.dateedition, space, 'dateType', [dateType]);
        }
        if (dateType == 'publication') {
            this.datepublication = this.XmlConverterService.setValue(this.datepublication, space, field, fieldValue);
            this.XmlConverterService.setValue(this.datepublication, space, 'dateType', [dateType]);
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
        locales: '<',
        multi: '@',
        label: '@',
        space: '@',
        update: '&'
    },
    template: template,
    controller: mdFormDatesController,
};