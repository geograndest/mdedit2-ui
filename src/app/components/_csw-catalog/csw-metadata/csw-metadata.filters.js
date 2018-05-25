export function nl2br($sce) {
    'ngInject';
    return function(msg, is_xhtml) {
        is_xhtml = is_xhtml || true;
        var breakTag = (is_xhtml) ? '<br />' : '<br>';
        msg = (msg + '')
            .replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
        return $sce.trustAsHtml(msg);
    };
}

export function removeFirstLetter() {
    return function(str, check) {
        check = check || false;
        if (check) {
            if (str.startsWith(check)) {
                return str.substring(1);
            } else {
                return str;
            }
        }
        return str.substring(1);
    };
}


/**
 * Utilisation:
 *   obs = new obsjs.Abstract();
 *   md.obs = obs.parseAbstract(md.dataAbstract);
 */
var fields_name = {
    retour: 'return',
    participants: 'particpitants',
    statut: 'status',
    calendrier: 'calendar',
    budget: 'budget',
    effectifs: 'effectifs',
    objectifs: 'objectives',
    sources: 'sources',
    donnees: 'data',
    frequence_maj: 'updateFrequency',
    publi_format: 'publicationFormat',
    publi_etudes: 'publicationRessources',
    outils: 'tools',
    divers: 'other',
    contrib_region: 'contrib_region',
    utilisation: 'useLevel',
    partenaires: 'partners',
    obs_directeur: 'director',
    obs_president: 'president'
};
export function getAbstractValue() {
    return function(abstract, field) {
        abstract = abstract || false;
        field = field || false;
        if (abstract) {
            var data = {};
            var abstract_array = abstract.split('----\n');
            for (var i = 0; i < abstract_array.length; i++) {
                var regex = /([A-Z_]*): ?([\S\s]*)/gm;
                var match = regex.exec(abstract_array[i]);
                if (match) {
                    data[fields_name[match[1].toLowerCase()]] = match[2].trim();
                }
            }
            if (field && Object.keys(fields_name).includes(field)) {
                return data[fields_name[field]].trim();
            }
            return data;
        }
        return '';
    };
};

export function isWxs() {
    return function(linkageProtocol, protocol) {
        if (linkageProtocol) {
            protocols = ['wfs', 'wms'];
            if (protocol) {
                return linkageProtocol.toLowerCase().indexOf(protocol) !== -1;
            } else {
                isProtocol = false;
                for (var i = 0; i < protocols.length; i++) {
                    if (linkageProtocol.toLowerCase().indexOf(protocols[i]) !== -1) {
                        isProtocol = true;
                    }
                }
                return isProtocol;
            }
        }
        return false;
    };
};

export default {nl2br, removeFirstLetter, getAbstractValue, isWxs};