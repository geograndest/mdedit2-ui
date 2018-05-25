import template from './md-form-dates.html';

/** fonctionnement
 * 1. récupérer la liste des dates
 * 2. générer 3 valeurs et peupler avec les dates correspondante (se baser sur le type de date): this.dateCreation, this.dateEdition, this.datePublication
 * 3. Pour la mise à jour effecer tout de temps l'ensemble de l'objet this.dates et le recréer à partir des 3 dates précédentes
 */

const mdFormDatesController = class MdFormDatesController {
    constructor(XmlConverterService) {
        'ngInject';
        // this.UtilsService = UtilsService;
        this.XmlConverterService = XmlConverterService;
        // console.log('constructor: mdFormContactsController controller');
    }

    $onInit() {}

    getValues() {
        var dates = this.XmlConverterService.getValue(this.md, this.space, this.field.name);
        // console.log(this.md, this.space, this.field.name, dates);
        this.datesList = {
            creation: {},
            edition: {},
            publication: {}
        };
        for (var i = 0; i < dates.length; i++) {
            var dateType = this.XmlConverterService.getValue(dates[i], this.space, 'dateType');
            if (['creation', 'publication', 'edition'].includes(dateType[0])) {
                this.datesList[dateType[0]] = dates[i];
            }
        }
        // console.log(this.dates);
        return this.datesList;
    }

    $onChanges(changes) {
        if (changes.md) {
            // console.log('change');
            this.getValues();
            // this.dates = this.getValues();
        }
    }

    onAddDate() {
        // this.datesList.push({});
    }

    onRemoveDate(key) {
        // if (this.datesList.length > 1) {
        //     this.datesList.splice(key, 1);
        // }
    }

    // updateDate(key, date) {
    updateDate(space, field, fieldValue, dateType) {
        var dates = [];
        this.datesList[dateType] = this.XmlConverterService.setValue({}, space, field, fieldValue);
        // console.log(this.datesList);
        for (var dt in this.datesList) {
            dates.push(this.datesList[dt]);
        }
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