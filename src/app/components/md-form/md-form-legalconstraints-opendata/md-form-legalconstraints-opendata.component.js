import template from "./md-form-legalconstraints-opendata.html";

const mdFormLegalconstraintsOpendataController = class MdFormLegalconstraintsOpendataController {
    constructor(XmlConverterService, LodashService) {
        "ngInject";
        this.XmlConverterService = XmlConverterService;
        this.LodashService = LodashService;
    }

    $onInit() {}

    getValues() {
        var dataResourceConstraints = this.XmlConverterService.getValue(
            this.md,
            this.space,
            "dataResourceConstraints"
        );
        var legalUseLimitations = [];
        var legalUseConstraints = [];
        // var legalAccessConstraints = [];
        // var legalAccessInspireConstraints = [];
        for (var i = 0; i < dataResourceConstraints.length; i++) {
            var dataLegalUseLimitations = this.XmlConverterService.getValue(
                dataResourceConstraints[i],
                this.space,
                "dataLegalUseLimitations"
            );
            var dataLegalUseConstraints = this.XmlConverterService.getValue(
                dataResourceConstraints[i],
                this.space,
                "dataLegalUseConstraints"
            );
            // var dataLegalAccessConstraints = this.XmlConverterService.getValue(
            //     dataResourceConstraints[i],
            //     this.space,
            //     "dataLegalAccessConstraints"
            // );
            // var dataLegalAccessInspireConstraints = this.XmlConverterService.getValue(
            //     dataResourceConstraints[i],
            //     this.space,
            //     "dataLegalAccessInspireConstraints"
            // );
            if (dataLegalUseLimitations.length) {
                legalUseLimitations = dataLegalUseLimitations;
            }
            if (dataLegalUseConstraints.length) {
                legalUseConstraints = dataLegalUseConstraints;
            }
            // if (dataLegalAccessConstraints.length) {
            //     legalAccessConstraints = dataLegalAccessConstraints;
            // }
            // if (dataLegalAccessInspireConstraints.length) {
            //     legalAccessInspireConstraints = dataLegalAccessInspireConstraints;
            // }
        }
        if (!legalUseLimitations.length) {
            legalUseLimitations.push('');
        }
        if (!legalUseConstraints.length) {
            legalUseConstraints.push('');
        }
        // if (!dataLegalAccessConstraints.length) {
        //     legalAccessConstraints.push('');
        // }
        // if (!dataLegalAccessInspireConstraints.length) {
        //     legalAccessInspireConstraints.push('');
        // }

        return {
            dataLegalUseLimitations: this.XmlConverterService.setValue({}, this.space, "dataLegalUseLimitations", legalUseLimitations),
            dataLegalUseConstraints: this.XmlConverterService.setValue({}, this.space, "dataLegalUseConstraints", legalUseConstraints),
            // dataLegalAccessConstraints: this.XmlConverterService.setValue({}, this.space, "dataLegalAccessConstraints", legalAccessConstraints),
            // dataLegalAccessInspireConstraints: this.XmlConverterService.setValue({}, this.space, "dataLegalAccessInspireConstraints", legalAccessInspireConstraints),
        }
    }

    $onChanges(changes) {
        if (changes.md) {
            this.legalConstraints = this.getValues();
        }
    }

    updateConstraints(space, field, fieldValue) {
        // Get and update legalConstraints elements
        var legalConstraints = this.getValues();
        legalConstraints[field] = this.XmlConverterService.setValue({}, space, field, fieldValue);
        // Add "otherRestrictions" in dataLegalAccessConstraints if dataLegalAccessInspireConstraints not empty
        // var dataLegalAccessConstraints = this.XmlConverterService.getValue(
        //     legalConstraints.dataLegalAccessConstraints,
        //     this.space,
        //     "dataLegalAccessConstraints"
        // );
        // var dataLegalAccessInspireConstraints = this.XmlConverterService.getValue(
        //     legalConstraints.dataLegalAccessInspireConstraints,
        //     this.space,
        //     "dataLegalAccessInspireConstraints"
        // );
        // if (!dataLegalAccessConstraints.includes('otherRestrictions') && dataLegalAccessInspireConstraints.length) {
        //     dataLegalAccessConstraints.push('otherRestrictions');
        //     legalConstraints.dataLegalAccessConstraints = this.XmlConverterService.setValue({}, this.space, "dataLegalAccessConstraints", dataLegalAccessConstraints);
        // }
        var legals = this.LodashService.lodash.merge(legalConstraints.dataLegalUseLimitations, legalConstraints.dataLegalUseConstraints, legalConstraints.dataLegalAccessConstraints, legalConstraints.dataLegalAccessInspireConstraints);

        // Get all resourceConstraints except legalconstraints
        var dataResourceConstraints = this.XmlConverterService.getValue(
            this.md,
            this.space,
            "dataResourceConstraints"
        );
        var resourcesConstraints = [];
        for (var i = 0; i < dataResourceConstraints.length; i++) {
            if (!this.XmlConverterService.getValue(
                    dataResourceConstraints[i],
                    this.space,
                    'dataLegalConstraints'
                ).length) {
                resourcesConstraints.push(dataResourceConstraints[i]);
            }
        }
        resourcesConstraints = resourcesConstraints.concat(legals);
        
        this.update({
            space: this.space,
            field: "dataResourceConstraints",
            fieldValue: resourcesConstraints
        });
    }
};

export const mdFormLegalconstraintsOpendataComponent = {
    bindings: {
        md: "<",
        field: "<",
        listRestrictionCode: "<",
        listInspireRestrictionCode: "<",
        locales: "<",
        multi: "@",
        label: "@",
        space: "@",
        update: "&"
    },
    template: template,
    controller: mdFormLegalconstraintsOpendataController
};