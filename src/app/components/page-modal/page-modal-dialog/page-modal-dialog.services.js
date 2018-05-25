import showdown from 'showdown'

export class PageModalDialogServices {
    constructor($http, $sce) {
        'ngInject';

        this.$http = $http;
        this.$sce = $sce;
    }

    getDoc(url) {
        return this.$http.get(url)
            .then((response) => {
                var extension = url.substr(url.lastIndexOf(".") + 1);
                if (['md', 'markdown', 'mkd'].indexOf(extension.toLowerCase()) !== -1) {
                    showdown.setFlavor('github');
                    var converter = new showdown.Converter({
                        tables: true
                    });
                    var html = converter.makeHtml(response.data);
                    return this.$sce.trustAsHtml(html);
                } else {
                    return response.data;
                }
            });
    }
}