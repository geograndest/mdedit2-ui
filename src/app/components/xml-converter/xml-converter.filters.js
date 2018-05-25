var jsonPath = require('jsonpath/jsonpath');
import {
    mdFields
} from './xml-converter.mdFields';

export function getValue($cacheFactory, StoreService, XmlConverterService) {
    'ngInject';
    var cache = {};
    var cache2 = $cacheFactory('cache'); 
    return (data, space, fieldPath) => {
        // var result = XmlConverterService.getValue(data, space, fieldPath);
        var xpath = mdFields[fieldPath].xpath;
        var result = jsonPath.query(data, xpath);

        cache2.put('data', result);
        return cache2.get('data');

        
        // if (!data.result || !angular.equals(data.result, result)) {
        //     data.result = result;
        // }
        // return data.result;

        // if (!cache['fieldPath'] || !angular.equals(cache[fieldPath], result)) {
        //     cache[fieldPath] = result;
        // }
        // if (Array.isArray(cache[fieldPath][0])) {
        //     console.log(fieldPath, 1);
        //     return cache[fieldPath][0];
        // } else {
        //     console.log(fieldPath, 0);
        //     return cache[fieldPath];
        // }
        // return cache[fieldPath];
    };
};

export function truncate() {
    return (data, n, useWordBoundary) => {
        data = data || '';
        n = n || 100;
        useWordBoundary = useWordBoundary || false;
        if (data.length <= n) {
            return data;
        }
        var subString = data.substr(0, n - 1);
        if (useWordBoundary) {
            return subString.substr(0, subString.lastIndexOf(' ')) + "...";
        } else {
            return subString + "...";
        }
    }
};

export function toString() {
    return (data, sep) => {
        data = data || [];
        sep = sep || ', '
        if (typeof data === 'string' || data instanceof String) {
            return data;
        }
        // if (sep == 'date') {
        //     return data[0];
        // }
        return data.join(sep);
    }
};

export function toArray() {
    return (data, sep) => {
        data = data || '';
        sep = sep || '|'
        if (typeof data === 'array' || data instanceof Array) {
            return data;
        }
        // if (sep == 'date') {
        //     return data[0];
        // }
        return data.split(sep);
    }
};

export function toDate() {
    var result;
    return (data, sep) => {
        // // data = data || [];
        // sep = sep || ', '
        // // if (typeof data === 'string' || data instanceof String) {
        // //     return new Date(data);
        // // }
        // // return data.map((val, id, arr) => { return new Date(val); }).join(sep);
        // console.log(data, Date.parse(data));
        // result = new Date(data).getTime();
        // return result;
    }
};

export function translate() {
    return (data, listName) => {
        if (!Array.isArray(data)) {
            data = [data];
        }
        if (data[0] && listName) {
            for (var i = 0; i < data.length; i++) {
                for (var option in listName) {
                    if (data[i].toLowerCase() == listName[option].id.toLowerCase()) {
                        data[i] = listName[option].value;
                    }
                }
            }
        }
        return data;
    }
};

export function arrayContains() {
    return (data, word, operator) => {
        operator = operator || 'contains';
        if (!Array.isArray(data)) {
            data = [data];
        }
        if (data[0] && word) {
            for (var i = 0; i < data.length; i++) {
                if (data[i]) {
                    if (operator == 'contains' && data[i].toLowerCase().includes(word.toLowerCase())) {
                        return true;
                    } else if (data[i].toLowerCase() == word.toLowerCase()) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
};

export default {
    getValue,
    truncate,
    toString,
    toArray,
    toDate,
    translate,
    arrayContains
};