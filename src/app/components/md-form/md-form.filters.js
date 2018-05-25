export function nl2br($sce) {
    'ngInject';
    return (data, breakTag) => {
        if (data) {
            breakTag = breakTag || '<br>';
            var data = (data + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
            return $sce.trustAsHtml(data);
        } else {
            return '';
        }
    };
};

export function getCodeValue() {
    return (data, codeList) => {
        if (data) {
            for (var i = 0; i < codeList.length; i++) {
                if (codeList[i].name == data) {
                    return codeList[i].value;
                }
            }
        } else {
            return '';
        }
    };
};

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

export default {nl2br, getCodeValue, removeFirstLetter, isWxs};