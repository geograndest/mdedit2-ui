import { mdFormKeywordsComponent } from './md-form-keywords.component';
import { mdFormKeywordComponent } from './md-form-keyword/md-form-keyword.component';

export const mdFormKeywords = angular
    .module('components.mdFormKeywords', [])
    .component('mdFormKeywords', mdFormKeywordsComponent)
    .component('mdFormKeyword', mdFormKeywordComponent)
    .name;