import template from './app.html';

const AppComponentController = class AppComponentController {
    constructor($state, $stateParams, $window, XmlConverterService, StoreService) {
        'ngInject';
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.$window = $window;
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

    // getValidViews(views) {
    //     var validViews = {};
    //     for (var v in views) {
    //         if (!v.startsWith('_')) {
    //             validViews[v] = views[v];
    //         }
    //     }
    //     return validViews;
    // }
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
        this.StoreService.setData({ mdjs: this.mdjs });
        console.log(this.mdjs);

        // this.csw.proxy = this.appConfig.app.proxy;
        // this.capabilities = {};

        // console.log(this.back);

        // this.cswCatalogView = {
        //     cswSearch: (constraintType, constraint) => {
        //         this.csw.constraintType = constraintType,
        //             this.csw.constraint = constraint,
        //             this.$state.transitionTo(this.$state.current, {
        //                 constraint: this.csw.constraint,
        //                 constraintType: this.csw.constraintType
        //             }, {
        //                 reload: true,
        //                 inherit: true,
        //                 notify: true
        //             });
        //     },
        //     getCapabilities: (capabilities) => {
        //         this.capabilities = capabilities;
        //         this.cswSearchButton.constraintsValues = this.capabilities.constraintsValues;
        //         this.cswInfos.capabilities = this.capabilities;
        //     },
        //     getRecords: (records) => {
        //         this.records = records;
        //         this.cswStats.visibleRecords = records.visibleRecords;
        //         this.cswStats.matchedRecords = records.matchedRecords;
        //     },
        //     getRecord: (mdFileIdentifier, mdHierarchyLevel, keywords) => {
        //         var view_default_url;
        //         var view_url;
        //         var count = 0;
        //         for (var v in this.mdViews) {
        //             var checkHierarchyLevel = false;
        //             var checkKeyword = false;
        //             var viewCount = 0;
        //             if (this.appConfig.views[v].hasOwnProperty('default') && this.appConfig.views[v].default) {
        //                 view_default_url = this.appConfig.views[v].url;
        //             }
        //             if (this.appConfig.views[v].hasOwnProperty('hierarchyLevels') && this.appConfig.views[v].hierarchyLevels.includes(mdHierarchyLevel)) {
        //                 checkHierarchyLevel = true;
        //                 viewCount = 2;
        //             }
        //             var viewKeywords = [];
        //             if (this.appConfig.views[v].hasOwnProperty('keywords') && this.appConfig.views[v].keywords[this.lang].length) {
        //                 var viewKeywords = this.appConfig.views[v].keywords[this.lang];
        //             }
        //             if (checkHierarchyLevel && viewKeywords.length) {
        //                 for (var kw = 0; kw < keywords.length; kw++) {
        //                     checkKeyword = viewKeywords.findIndex((item, key) => keywords[kw].toLowerCase() === item.toLowerCase()) > -1;
        //                     if (checkKeyword) {
        //                         viewCount += 1;
        //                     }
        //                 }
        //             }
        //             if (viewCount > count) {
        //                 count = viewCount;
        //                 view_url = this.appConfig.views[v].url;
        //             }
        //         }
        //         if (!view_url) {
        //             view_url = view_default_url;
        //         }
        //         this.$state.transitionTo(view_url, {
        //             md: mdFileIdentifier,
        //             back: this.$state.current.name
        //         }, {
        //             reload: true,
        //             inherit: true,
        //             notify: true
        //         });
        //     }
        // };

        // this.mdView = {
        //     goBack: () => {
        //         console.log('back', this.back);
        //         if (this.back) {
        //             this.$state.transitionTo(this.back, {
        //                 md: null,
        //                 back: null
        //             }, {
        //                 reload: true,
        //                 inherit: true,
        //                 notify: true
        //             });
        //         } else {
        //             this.$window.history.back();
        //         }
        //     }
        // };

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
            // TODO: remplacer mdjs par xml?
            onLoad: (xml) => {
                // var m = this.LodashService.lodash.cloneDeep(mdjs);
                // this.mdjs = this.LodashService.lodash.assign({}, this._mdjs, m);
                this.mdjs = this.XmlConverterService.xml2js(xml);
                this.StoreService.setData({ mdjs: this.mdjs });
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
            onSave: (xml) => {
               console.log('Save XML file:', xml, this.StoreService.getData().mdjs);
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

        // this.changeCswButton = {
        //     hide: this.isHome || this.isMdView || !this.displayCswBtn,
        //     tooltip: this.appLocales.ui.changecsw_tooltip,
        //     icon: this.appConfig.catalog.icon,
        //     text: this.appLocales.ui.changecsw_text,
        //     placeholder: this.appLocales.ui.changecsw_placeholder,
        //     cswList: this.appConfig.catalog.csw_list,
        //     cswUrl: this.csw.cswUrl,
        //     onChangeCsw: (cswUrl) => {
        //         this.csw.cswUrl = cswUrl;
        //         this.$state.transitionTo(this.$state.current, {
        //             cswUrl: this.csw.cswUrl
        //         }, {
        //             reload: true,
        //             inherit: true,
        //             notify: true
        //         });
        //     }
        // };

        // this.cswInfos = {
        //     hide: this.isHome || this.isMdView,
        //     tooltip: this.appLocales.ui.cswinfos_tooltip,
        //     cswUrl: this.csw.cswUrl,
        //     capabilities: this.capabilities,
        // };

        // this.cswStats = {
        //     hide: this.isHome || this.isMdView,
        //     tooltip: this.appLocales.ui.cswstats_tooltip,
        //     visibleRecords: this.visibleRecords,
        //     matchedRecords: this.matchedRecords,
        // };

        // this.cswSearchButton = {
        //     hide: this.isHome || this.isMdView,
        //     tooltip: this.appLocales.ui.tooltip_search,
        //     search: this.search,
        //     constraintsValues: this.capabilities.constraintsValues,
        //     constraintType: this.csw.constraintType,
        //     constraint: this.csw.constraint,
        //     constraintsType: this.appLocales.constraints_type,
        //     onCswSearch: (constraintType, constraintSearch) => {
        //         this.csw.constraint = constraintSearch;
        //         this.csw.constraintType = constraintType;
        //         this.$state.transitionTo(this.$state.current, {
        //             constraint: this.csw.constraint,
        //             constraintType: this.csw.constraintType
        //         }, {
        //             reload: true,
        //             inherit: true,
        //             notify: true
        //         });
        //     }
        // };

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