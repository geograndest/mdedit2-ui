import uiRouter from '@uirouter/angularjs';
import {
    mdFormComponent
} from './md-form.component';
import {
    mdFormElement
} from './md-form-element/md-form-element.module';
import {
    mdFormImage
} from './md-form-image/md-form-image.module';
import {
    mdFormContacts
} from './md-form-contacts/md-form-contacts.module';
import {
    mdFormInspirecontacts
} from './md-form-inspirecontacts/md-form-inspirecontacts.module';
import {
    mdFormGeographicextents
} from './md-form-geographicextents/md-form-geographicextents.module';
import {
    mdFormTemporalextents
} from './md-form-temporalextents/md-form-temporalextents.module';
import {
    mdFormDistributionformats
} from './md-form-distributionformats/md-form-distributionformats.module';
import {
    mdFormBrowsegraphics
} from './md-form-browsegraphics/md-form-browsegraphics.module';
import {
    mdFormIdentifiers
} from './md-form-identifiers/md-form-identifiers.module';
import {
    mdFormKeywords
} from './md-form-keywords/md-form-keywords.module';
import {
    mdFormInspirekeywords
} from './md-form-inspirekeywords/md-form-inspirekeywords.module';
import {
    mdFormInspireconstraints
}
from './md-form-inspireconstraints/md-form-inspireconstraints.module';
import {
    mdFormReferencesystems
} from './md-form-referencesystems/md-form-referencesystems.module';
import {
    mdFormLinkages
} from './md-form-linkages/md-form-linkages.module';
import {
    mdFormConformities
} from './md-form-conformities/md-form-conformities.module';
import {
    mdFormInspireconformities
} from './md-form-inspireconformities/md-form-inspireconformities.module';
import {
    mdFormDates
} from './md-form-dates/md-form-dates.module';
import {
    mdFormSpatialresolution
} from './md-form-spatialresolution/md-form-spatialresolution.module';
import {
    mdFormSecurityconstraints
} from './md-form-securityconstraints/md-form-securityconstraints.module';
import {
    mdFormConstraints
} from './md-form-constraints/md-form-constraints.module';
import {
    mdFormLegalconstraints
} from './md-form-legalconstraints/md-form-legalconstraints.module';
import {
    nl2br
} from './md-form.filters';
import {
    getCodeValue
} from './md-form.filters';


export const mdForm = angular
    .module('components.mdForm', [
        uiRouter,
        mdFormElement,
        mdFormImage,
        mdFormContacts,
        mdFormInspirecontacts,
        mdFormGeographicextents,
        mdFormTemporalextents,
        mdFormBrowsegraphics,
        mdFormIdentifiers,
        mdFormKeywords,
        mdFormInspirekeywords,
        mdFormInspireconstraints,
        mdFormDistributionformats,
        mdFormReferencesystems,
        mdFormLinkages,
        mdFormConformities,
        mdFormInspireconformities,
        mdFormDates,
        mdFormSpatialresolution,
        mdFormSecurityconstraints,
        mdFormConstraints,
        mdFormLegalconstraints
    ])
    .component('mdFormComponent', mdFormComponent)
    .filter('nl2br', nl2br)
    .filter('getCodeValue', getCodeValue)
    .name;
