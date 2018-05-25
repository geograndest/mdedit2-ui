export function getCodeValue() {
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
