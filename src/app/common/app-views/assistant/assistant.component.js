import template from './assistant.html';
import bsCustomFileInput from 'bs-custom-file-input';

const assistantController = class AssistantController {
    constructor($state, UtilsService) {
        'ngInject';
        this.$state = $state;
        this.UtilsService = UtilsService;
    }

    $onInit() {
        bsCustomFileInput.init();
        var model_file = document.getElementById('model_file');
        model_file.addEventListener("change", () => {
            this.model_file = document.getElementById('model_file').files[0];
        }, false);
    }

    changeView(view, options) {
        this.$state.transitionTo(view, options, {
            reload: true,
            inherit: false,
            notify: false
        });
    }

    close(options) {
        this.$state.transitionTo('app.home', options, {
            reload: true,
            inherit: false,
            notify: false
        });
    }

    loadForm() {
        console.log(this.model_url, this.model_file, this.model_server, this.resource_type, this.response_opendata, this.response_geo, this.response_model)
        var form = 'mdEditMap'
        this.model_server = 'empty'
        if (this.resource_type == 'data') {
            if (this.response_geo == 'geo-yes') {
                form = (this.response_opendata == 'opendata-yes') ? 'mdEditDataGeoOpendata' : 'mdEditDataGeo'
            } else {
                form = (this.response_opendata == 'opendata-yes') ? 'mdEditDataNogeoOpendata' : 'mdEditDataNogeoOpendata'
            }
        }
        if (this.model_url) {
            this.UtilsService.getUrl(this.appConfig.proxy, this.model_url, (data) => {
                console.log(1, data)
                this.loadXml({
                    xml: data
                });
            });
        } else if (this.model_file) {
            this.UtilsService.readFile(this.model_file, (data) => {
                this.loadXml({
                    xml: data
                });
            });
        } else {
            this.UtilsService.getUrl(this.appConfig.proxy, this.appConfig.models[this.model_server].file, (data) => {
                this.loadXml({
                    xml: data
                });
            });
        }
        this.changeView('app.' + form)
    }

}

export const assistantComponent = {
    bindings: {
        $transition$: '<',
        appConfig: '<',
        appLocales: '<',
        assistantLocales: '<',
        loadXml: '&'
    },
    template: template,
    controller: assistantController,
};