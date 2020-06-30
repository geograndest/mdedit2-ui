export class MdEditApiService {
    constructor($http) {
        'ngInject';

        this.$http = $http;
    }

    get(url, callback) {
        return this.$http.get(url)
            .then((response) => {
                if (callback) {
                    callback(response.data);
                }
                return response.data;
            })
            .catch((reason) => {
                console.log("Error: can't get " + url + " URL.", reason);
            });
    }

    post(url, data, callback) {
        return this.$http.post(url, data)
            .then((response) => {
                if (callback) {
                    callback(response.data);
                }
            })
            .catch((reason) => {
                console.log("Error: can't post " + url + " URL.", reason);
            });
    }

    upload(url, data, config, callback) {
        return this.$http.post(url, data, config)
            .then((response) => {
                if (callback) {
                    callback(response.data);
                }
            })
            .catch((reason) => {
                console.log("Error: can't upload file " + url + " URL.", reason);
            });
    }

    put(url, data, callback) {
        return this.$http.put(url, data)
            .then((response) => {
                if (callback) {
                    callback(response.data);
                }
            })
            .catch((reason) => {
                console.log("Error: can't put " + url + " URL.", reason);
            });
    }

    delete(url, data, callback) {
        return this.$http.delete(url, data)
            .then((response) => {
                if (callback) {
                    callback(response.data);
                }
                console.log(data)
            })
            .catch((reason) => {
                console.log("Error: can't delete " + url + " URL.", reason);
            });
    }
}