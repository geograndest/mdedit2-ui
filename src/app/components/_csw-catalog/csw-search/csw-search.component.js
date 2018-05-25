import template from './csw-search.html';

const cswSearchController = class CswSearchController {
    constructor() {}

    $onInit() {}

    onSearch(constraintType, constraint) {
        this.constraintType = constraintType;
        this.constraint = constraint;
        this.onCswSearch({
            constraintType: this.constraintType,
            constraintSearch: this.constraint
        });
    }

    clearSearch() {
        this.constraintType = 'AnyText';
        this.constraint = '';
        var data = {
            constraintType: this.constraintType,
            constraintSearch: this.constraint
        };
        this.onCswSearch(data);
    }

}

export const cswSearchComponent = {
    bindings: {
        constraintsCapabilitiesValues: '<',
        constraintsValues: '<',
        placeholderSearch: '<',
        constraintType: '<',
        constraint: '<',
        onCswSearch: '&'
    },
    template: template,
    controller: cswSearchController
};