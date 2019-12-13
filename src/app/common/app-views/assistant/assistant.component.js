import template from './assistant.html';

const assistantController = class AssistantController {
    constructor($state, UtilsService) {
        'ngInject';
        this.$state = $state;
        this.UtilsService = UtilsService;
    }

    $onInit() {}

    changeView(view, options) {
        console.log(1)
        this.$state.transitionTo(view, options, {
            reload: true,
            inherit: false,
            notify: false
        });
    }

    loadForm() {
        console.log(this.url, this.file, this.model, this.resource_type)
    }

}

export const assistantComponent = {
    bindings: {
        $transition$: '<',
        appConfig: '<',
        appLocales: '<',
        assistantLocales: '<',
        assistantAuth: '<'
    },
    template: template,
    controller: assistantController,
};