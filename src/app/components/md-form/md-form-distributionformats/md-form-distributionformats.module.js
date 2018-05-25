import { mdFormDistributionformatsComponent } from './md-form-distributionformats.component';
import { mdFormDistributionformatComponent } from './md-form-distributionformat/md-form-distributionformat.component';

export const mdFormDistributionformats = angular
    .module('components.mdFormDistributionformats', [])
    .component('mdFormDistributionformats', mdFormDistributionformatsComponent)
    .component('mdFormDistributionformat', mdFormDistributionformatComponent)
    .name;