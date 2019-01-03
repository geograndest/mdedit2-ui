// import showdown from 'showdown'

export class XmlModalLoadDialogService {
    constructor($http) {
        'ngInject';

        this.$http = $http;
    }

    readFile(file, callback) {
        var reader = new FileReader();
        reader.onloadend = (e) => {
            var data = e.target.result;
            // console.log(data);
            callback(data);
        }
        reader.readAsText(file);
    }

    getUrl(url, callback) {
        return this.$http.get(url).then(
            (response) => {
                callback(response.data);
            },
            () => {
                console.log("Error: can't get " + url + " file.");
            }
        );
    }
}