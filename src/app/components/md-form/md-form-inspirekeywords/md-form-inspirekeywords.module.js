import {
    mdFormInspirekeywordsComponent
} from './md-form-inspirekeywords.component';
import {
    mdFormInspirekeywordComponent
} from './md-form-inspirekeyword/md-form-inspirekeyword.component';

export const mdFormInspirekeywords = angular
    .module('components.mdFormInspirekeywords', [])
    .component('mdFormInspirekeywords', mdFormInspirekeywordsComponent)
    .component('mdFormInspirekeyword', mdFormInspirekeywordComponent)
    .name;