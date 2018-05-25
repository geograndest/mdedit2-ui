import template from './csw-card.html';

const cswCardController = class CswCardController {
    constructor() {}

    $onInit() {}

    viewMd(mdFileIdentifier, mdHierarchyLevel, keywords) {
        this.onClickCard({
            mdFileIdentifier: mdFileIdentifier,
            mdHierarchyLevel: mdHierarchyLevel,
            keywords: keywords
        });
    }

    clickLabel(constraintType, constraint) {
        this.onClickLabel({
            constraintType: constraintType,
            constraint: constraint
        });
    }

}

export const cswCardComponent = {
    bindings: {
        tpl: '@',
        md: '<',
        locales: '<',
        topicCategories: '<',
        themePpal: '<',
        onClickCard: '&',
        onClickLabel: '&',
    },
    template: template,
    controller: cswCardController,
};