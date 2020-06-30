// import showdown from 'showdown'

export class XmlModalLoadDialogService {
    constructor($http, UtilsService) {
        'ngInject';

        // this.$http = $http;
        this.UtilsService = UtilsService;
    }

    // readFile(file, callback) {
    //     var reader = new FileReader();
    //     reader.onloadend = (e) => {
    //         var data = e.target.result;
    //         callback(data);
    //     }
    //     reader.readAsText(file);
    // }

    // getUrl(proxy, url, callback) {
    //     if (proxy) {
    //         url = this.UtilsService.getProxyUrl(url, proxy)
    //     }
    //     return this.UtilsService.get(url, callback);
    // }
}