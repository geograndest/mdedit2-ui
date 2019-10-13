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
        console.log(120, dataResourceConstraints)
        var useLimitations = [];
        for (var i = 0; i < dataResourceConstraints.length; i++) {
            console.log(121, dataResourceConstraints[i]);
            if (
                this.XmlConverterService.getValue(
                    dataResourceConstraints[i],
                    this.space,
                    "dataUseLimitations"
                ).length
            ) {
                console.log(888, dataResourceConstraints[i], this.XmlConverterService.getValue(
                    dataResourceConstraints[i],
                    this.space,
                    "dataUseLimitations"
                ))
                useLimitations.push(dataResourceConstraints[i]);
                // useLimitations = this.XmlConverterService.getValue(
                //     dataResourceConstraints[i],
                //     this.space,
                //     "dataUseLimitations"
                // );
            }
        }
        // if (!useLimitations.length) {
        //     useLimitations.push('');
        // }
        console.log(123, this.field, useLimitations)
        return useLimitations[0];
    }

    $onChanges(changes) {
        if (changes.md) {
            this.md = angular.copy(this.md);
            this.useLimitations = this.getValues();
        }
    }

    updateConstraints(space, field, fieldValue) {
        // if (fieldValue.length && key != undefined) {
        //     this.useLimitations[key] = this.XmlConverterService.setValue({}, space, field, [fieldValue[key]]);
        // }
        // var useLimitations = [];
        // for (var i = 0; i < fieldValue.length; i++) {
        //     useLimitations.push(this.XmlConverterService.setValue({}, space, field, [fieldValue[i]]));
        // }
        var useLimitations = this.XmlConverterService.setValue({}, space, field, fieldValue);
        // this.useLimitations = useLimitations;


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