import {
    utils
} from './utils/utils.module';
import {
    pageModal
} from './page-modal/page-modal.module';
import {
    changeView
} from './change-view/change-view.module';
import {
    changeLang
} from './change-lang/change-lang.module';
import {
    xmlConverter
} from './xml-converter/xml-converter.module';
import {
    store
} from './store/store.module';
import {
    lodash
} from './lodash/lodash.module';
import {
    xmlModalLoad
} from './xml-modal-load/xml-modal-load.module';
import {
    xmlModalSave
} from './xml-modal-save/xml-modal-save.module';
import {
    mdForm
} from './md-form/md-form.module';
import {
    mdView
} from './md-view/md-view.module';
import {
    test
} from './test/test.module';


export const components = angular
    .module('components', [
        utils,
        lodash,
        xmlConverter,
        store,
        pageModal,
        changeView,
        changeLang,
        xmlModalLoad,
        xmlModalSave,
        mdForm,
        mdView,
        test,
        // cswCatalog
    ])
    .name;