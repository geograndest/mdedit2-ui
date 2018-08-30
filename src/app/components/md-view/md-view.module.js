import uiRouter from '@uirouter/angularjs';
import {
    mdViewComponent
} from './md-view.component';
import {
    mdViewContactComponent
} from './md-view-contact/md-view-contact.component';
import {
    nl2br
} from './md-view.filters';
import {
    removeFirstLetter
} from './md-view.filters';
import {
    isWxs
} from './md-view.filters';

export const mdView = angular
    .module('components.mdView', [
        uiRouter,
        // mdViewContactComponent
    ])
    // .component('mdView', mdViewComponent)
    .component('mdViewContact', mdViewContactComponent)
    .filter('nl2br', nl2br)
    .filter('removeFirstLetter', removeFirstLetter)
    .filter('isWxs', isWxs)
    .name;