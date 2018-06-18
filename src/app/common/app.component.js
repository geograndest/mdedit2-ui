import template from './app.html';

const AppComponentController = class AppComponentController {
    constructor($state, $stateParams, $window, UtilsService, XmlConverterService, StoreService) {
        'ngInject';
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.$window = $window;
        this.UtilsService = UtilsService;
        this.XmlConverterService = XmlConverterService;
        this.StoreService = StoreService;
    }

    getViews(views, type) {
        var viewsList = {};
        for (var v in views) {
            if (views[v].hasOwnProperty('type') && views[v].type == type) {
                viewsList[v] = views[v];
            }
        }
        return viewsList;
    }

    getChangeViews(views, changeViewList) {
        var changeViews = {};
        for (var v = 0; v < changeViewList.length; v++) {
            changeViews[changeViewList[v]] = views[changeViewList[v]];
        }
        return changeViews;
    }

    $onInit() {
        this.mdViews = this.getViews(this.appConfig.views, 'mdView');
        this.mdEditViews = this.getViews(this.appConfig.views, 'mdEdit');
        this.isHome = (this.$state.current.name === 'app.home');
        this.isMdView = (Object.keys(this.mdViews).includes(this.$state.current.name.split('.')[1]));
        this.isMdEditView = (Object.keys(this.mdEditViews).includes(this.$state.current.name.split('.')[1]));

        this.mdjs = this.XmlConverterService.xml2js(this.xml);
        this.StoreService.setData({
            mdjs: this.mdjs
        });
        console.log(this.mdjs);

        this.helpButton = {
            icon: 'glyphicon-info-sign',
            tooltip: this.appLocales.ui.bt_help,
            format: 'button',
            text: this.appLocales.ui.bt_help,
            title: this.appLocales.ui.bt_help,
            contentUrl: this.pages['help']
        };

        this.mentionsButton = {
            tooltip: this.appLocales.ui.bt_mentions,
            format: 'text',
            text: this.appLocales.ui.bt_mentions,
            title: this.appLocales.ui.bt_mentions,
            contentUrl: this.pages['mentions']
        };

        this.copyrights = {
            text: this.appConfig.app.copyrights,
            url: this.appConfig.app.copyrights_url
        };

        this.xmlLoadButton = {
            icon: 'glyphicon-download',
            tooltip: this.appLocales.ui.bt_xml_load,
            format: 'button',
            text: this.appLocales.ui.bt_xml_load,
            title: this.appLocales.ui.bt_xml_load,
            models: this.appConfig.models,
            onLoad: (xml) => {
                this.mdjs = this.XmlConverterService.xml2js(xml);
                this.StoreService.setData({
                    mdjs: this.mdjs
                });
                console.log('onLoad', this.mdjs);
            }
        };

        this.xmlSaveButton = {
            icon: 'glyphicon-upload',
            tooltip: this.appLocales.ui.bt_xml_save,
            format: 'button',
            text: this.appLocales.ui.bt_xml_save,
            title: this.appLocales.ui.bt_xml_save,
            mdjs: this.mdjs,
            onSave: (data) => {
                // console.log('Save file', data);
                return this.UtilsService.saveFile(this.appConfig.app.generate_xml_url, data.fileName, data.fileContent).then((response) => {
                    // console.log(response.url);
                    return this.appConfig.app.download_xml_url + response.url;
                });
            }
        };

        if (!this.appConfig.app.view) {
            this.appConfig.app.view = this.$state.current.name.split('.').pop();
        }
        this.changeViewButton = {
            hide: this.isHome || this.isMdView,
            tooltip: this.appLocales.ui.tooltip_changeview,
            views: this.getChangeViews(this.appConfig.views, this.appConfig.app.changeview.list),
            view: this.appConfig.app.view,
            format: this.appConfig.app.changeview.format,
            icon: this.appConfig.app.changeview.icon,
            onChangeView: (view) => {
                this.$state.transitionTo(this.appConfig.views[view].url, this.$stateParams, {
                    reload: true,
                    inherit: true,
                    notify: true
                });
            }
        };

        this.homeButton = {
            hide: this.isHome,
            tooltip: this.appLocales.ui.tooltip_home,
            views: {
                home: this.appConfig.views['home']
            },
            view: 'home',
            format: 'button',
            onChangeView: (view) => {
                this.$state.transitionTo(this.appConfig.views[view].url, false, {
                    reload: true,
                    inherit: false,
                    notify: false
                });
            }
        };

        this.changeLangButton = {
            tooltip: this.appLocales.ui.tooltip_changelang,
            lang: this.lang,
            locales: this.appConfig.app.locales,
            // TODO: ne fonctionne pas si utilisation d'une fonction en dehors de $onInti(): utiliser une fonction anonyme englobante
            onChangeLang: (lang) => {
                this.lang = lang;
                this.$state.transitionTo(this.$state.current, {
                    lang: this.lang
                }, {
                    reload: true,
                    inherit: true,
                    notify: true
                });
            }
        };
    }
}

export const appComponent = {
    bindings: {
        appConfig: '<',
        lang: '<',
        appLocales: '<',
        pages: '<',
        header: '<',
        footer: '<',
        xml: '<',
        url: '@'
    },
    template: template,
    controller: AppComponentController
};