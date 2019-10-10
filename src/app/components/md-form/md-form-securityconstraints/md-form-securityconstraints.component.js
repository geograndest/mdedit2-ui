import template from "./md-form-securityconstraints.html";

const mdFormSecurityconstraintsController = class MdFormSecurityconstraintsController {
    constructor(XmlConverterService) {
        "ngInject";
        this.XmlConverterService = XmlConverterService;
    }

    $onInit() {}

    getValues() {
        var dataResourceConstraints = this.XmlConverterService.getValue(
            this.md,
            this.space,
            "dataResourceConstraints"
        );
        var classification;
        for (var i = 0; i < dataResourceConstraints.length; i++) {
            if (
                this.XmlConverterService.getValue(
                    dataResourceConstraints[i],
                    this.space,
                    "dataSecurityClassification"
                ).length
            ) {
                classification = dataResourceConstraints[i];
            }
        }
        return classification;
    }

    $onChanges(changes) {
        if (changes.md) {
            this.classification = this.getValues();
        }
    }

    updateConstraints(space, field, fieldValue) {
        this.XmlConverterService.setValue(
            this.classification,
            space,
            field,
            fieldValue
        );

        // Get all resourceConstraints except securityConstraints
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
                    "dataSecurityClassification"
                ).length) {
                resourcesConstraints.push(dataResourceConstraints[i]);
            }
        }
        resourcesConstraints = resourcesConstraints.concat(this.classification);

        this.update({
            space: this.space,
            // field: field,
            field: 'dataResourceConstraints',
            fieldValue: resourcesConstraints
        });
    }

};

export const mdFormSecurityconstraintsComponent = {
    bindings: {
        md: "<",
        field: "<",
        list: "<",
        locales: "<",
        multi: "@",
        label: "@",
        space: "@",
        update: "&"
    },
    template: template,
    controller: mdFormSecurityconstraintsController
};