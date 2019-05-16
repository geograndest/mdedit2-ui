import template from './app.html';

const AppComponentController = class AppComponentController {
    constructor($state, $stateParams, UtilsService, XmlConverterService, StoreService, LodashService) {
        'ngInject';
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.UtilsService = UtilsService;
        this.XmlConverterService = XmlConverterService;
        this.StoreService = StoreService;
        this.LodashService = LodashService;
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

    loadMdjs(xml) {
        // this.mdjs = this.XmlConverterService.xml2js(this.xml);
        this.xml = xml;
        this.mdjs = this.LodashService.lodash.merge(
            this.XmlConverterService.xml2js(this.defaultXml),
            this.XmlConverterService.xml2js(this.xml)
        );
        this.StoreService.setData({
            mdjs: this.mdjs
        });
    }

    $onInit() {
        this.auth = this.auth || {};
        this.mdViews = this.getViews(this.appConfig.views, 'mdView');
        this.mdEditViews = this.getViews(this.appConfig.views, 'mdEdit');
        this.isHome = (this.$state.current.name === 'app.home');
        this.isMdView = (Object.keys(this.mdViews).includes(this.$state.current.name.split('.')[1]));
        this.isMdEditView = (Object.keys(this.mdEditViews).includes(this.$state.current.name.split('.')[1]));
        this.isMdListView = (this.$state.current.name === 'app.mdList');

        this.mdjs = this.StoreService.getData().mdjs;
        if (this.mdjs == undefined || this.url || this.template) {
            this.loadMdjs(this.xml);
        }

        this.helpButton = {
            icon: 'fa-info-circle',
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
            hide: this.isHome || this.isMdListView,
            icon: 'fa-file-download',
            tooltip: this.appLocales.ui.bt_xml_load,
            format: 'button',
            text: this.appLocales.ui.bt_xml_load,
            title: this.appLocales.ui.bt_xml_load,
            models: this.appConfig.models,
            proxy: this.appConfig.app.proxy,
            onLoad: (xml) => {
                this.loadMdjs(xml);
            }
        };

        this.xmlSaveButton = {
            hide: this.isHome || this.isMdListView,
            icon: {
                download: 'fa-file-upload',
                save: 'fa-save'
            },
            tooltip: this.appLocales.ui.bt_xml_save,
            format: 'button',
            text: {
                save: this.appLocales.ui.bt_xml_save,
                download: this.appLocales.ui.bt_xml_download
            },
            title: this.appLocales.ui.bt_xml_save,
            getData: () => {
                return this.StoreService.getData().mdjs;
            },
            setData: (mdjs) => {
                this.StoreService.setData({
                    mdjs: angular.copy(mdjs)
                });
            },
            saveData: (filename, content) => {
                this.UtilsService.post(this.appConfig.app.api.saveFile, {
                    filename: filename,
                    content: content
                });
            }
        };

        if (!this.appConfig.app.view) {
            this.appConfig.app.view = this.$state.current.name.split('.').pop();
        }
        this.changeViewButton = {
            hide: this.isHome || this.isMdListView,
            tooltip: this.appLocales.ui.tooltip_changeview,
            views: this.getChangeViews(this.appConfig.views, this.appConfig.app.changeview.list),
            view: this.appConfig.app.view,
            format: this.appConfig.app.changeview.format,
            icon: this.appConfig.app.changeview.icon,
            onChangeView: (view) => {
                this.$state.transitionTo(this.appConfig.views[view].url, false, {
                    reload: false,
                    inherit: false,
                    notify: false
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
                this.loadMdjs(this.xml);
                this.$state.transitionTo(this.appConfig.views[view].url, false, {
                    reload: true,
                    inherit: false,
                    notify: false
                });
            }
        };

        this.mdListButton = {
            hide: this.isMdListView || this.isHome || !this.auth.sec_editor,
            tooltip: this.appLocales.ui.tooltip_mdlist,
            views: {
                mdList: this.appConfig.views['mdList']
            },
            view: 'mdList',
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
        defaultXml: '<',
        template: '@',
        url: '@',
        auth: '<'
    },
    template: template,
    controller: AppComponentController
};