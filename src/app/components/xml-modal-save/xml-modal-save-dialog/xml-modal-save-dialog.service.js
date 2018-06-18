// import showdown from 'showdown'

export class XmlModalSaveDialogService {
    constructor($http) {
        'ngInject';

        this.$http = $http;
    }

    // getXml(url, filename, filecontent) {

    //     var data = {
    //         'filename': filename,
    //         'filecontent': filecontent
    //     };

    //     return this.$http({
    //             method: 'POST',
    //             url: url,
    //             dataType: 'json',
    //             data: data
    //         })
    //         .then(function (response) {
    //             return response.data;
    //         })
    // }
}