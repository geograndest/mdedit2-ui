const getCodeValue = () => {
    // 'ngInject';
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

const nl2br = ($sce) => {
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

module.exports = {
    getCodeValue: getCodeValue,
    nl2br: nl2br
};