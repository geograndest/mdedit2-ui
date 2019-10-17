import template from "./md-form-constraints.html";

const mdFormConstraintsController = class MdFormConstraintsController {
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
        var useLimitations = [];
        for (var i = 0; i < dataResourceConstraints.length; i++) {
            if (
                this.XmlConverterService.getValue(
                    dataResourceConstraints[i],
                    this.space,
                    "dataUseLimitations"
                ).length
            ) {
                useLimitations.push(dataResourceConstraints[i]);
            }
        }
        return useLimitations[0];
    }

    $onChanges(changes) {
        if (changes.md) {
            this.useLimitations = this.getValues();
        }
    }

    updateConstraints(space, field, fieldValue) {
        var useLimitations = this.XmlConverterService.setValue({}, space, field, fieldValue);

        // Get all resourceConstraints except constraints
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
                    "dataUseLimitations"
                ).length) {
                resourcesConstraints.push(dataResourceConstraints[i]);
            }
        }
        resourcesConstraints = resourcesConstraints.concat(useLimitations);

        this.update({
            space: this.space,
            field: "dataResourceConstraints",
            fieldValue: resourcesConstraints
        });
    }
};

export const mdFormConstraintsComponent = {
    bindings: {
        md: "<",
        field: "<",
        locales: "<",
        multi: "@",
        label: "@",
        space: "@",
        update: "&"
    },
    template: template,
    controller: mdFormConstraintsController
};