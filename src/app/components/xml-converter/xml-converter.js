var renameKeys = require('deep-rename-keys');
var jsonPath = require('jsonpath');
import convert from 'xml-js';
import * as lodash from 'lodash';
import {
    mdFields
} from './xml-converter.mdFields';
import {
    getRecordFields
} from './xml-converter.getRecordFields';
import {
    getRecordsFields
} from './xml-converter.getRecordsFields';
import {
    getCapabilitiesFields
} from './xml-converter.getCapabilitiesFields';
import {
    getCapabilitiesWfsFields
} from './xml-converter.getCapabilitiesWfsFields';
import {
    getDomainsFields
} from './xml-converter.getDomainsFields';

export class XmlConverter {
    constructor() {
        'ngInject';
        this.mdjs = {};
        this.mdxml = '';
    }

    xml2js(xml, options) {
        this.mdjs = convert.xml2js(xml, options);
        this.mdjs = renameKeys(this.mdjs, function(key, val) {
            return key.replace(':', '__');
        });
        return this.mdjs;
    }

    js2xml(js, options) {
        js = renameKeys(js, function(key, val) {
            return key.replace('__', ':');
        });
        this.mdxml = convert.js2xml(js, options);
        return this.mdxml;
    }

    getFields(nameSpace) {
        if (nameSpace == 'md') {
            return mdFields;
        } else if (nameSpace == 'getRecord') {
            return getRecordFields;
        } else if (nameSpace == 'getRecords') {
            return getRecordsFields;
        } else if (nameSpace == 'getCapabilities') {
            return getCapabilitiesFields;
        } else if (nameSpace == 'getCapabilitiesWfs') {
            return getCapabilitiesWfsFields;
        } else if (nameSpace == 'getDomains') {
            return getDomainsFields;
        }
    }

    // getValue(obj, space, field) {
    //     var data;
    //     var result = [];
    //     if (obj) {
    //         var fields = this.getFields(space);
    //         var fieldNames = field.split('.');
    //         // var result = angular.copy(obj);
    //         for (var i = 0; i < fieldNames.length; i++) {
    //             var xpath = fields[fieldNames[i]].xpath;
    //             if (Array.isArray(xpath)) {
    //                 xpath = xpath[0];
    //             }
    //             if (Array.isArray(data)) {
    //                 console.log(1, xpath);
    //                 var values = [];
    //                 for (var j = 0; j < data.length; j++) {
    //                     values = values.concat(jsonPath.query(data[j], xpath));
    //                 }
    //                 data = values;
    //             } else {
    //                 console.log(2, xpath);
    //                 // data = [];
    //                 data = jsonPath.query(obj, xpath);
    //                 // data = 'etsttt';
    //             }

    //             if (fields[fieldNames[i]].hasOwnProperty('filter')) {
    //                 data = this.filterArray(data, fields[fieldNames[i]].filter[0], fields[fieldNames[i]].filter[1]);
    //             }
    //             // if (i == data.length) {
    //             //     result.push.apply(result, data);
    //             // }
    //         }
    //         // if (!Array.isArray(data)) {
    //         //     data = [data];
    //         // }
    //     }
    //     // if (!obj.result || !angular.equals(obj.result, result)) {
    //     //     obj.result = result;
    //     //   }
    //     //   return obj.result;
    //     // return result;
    //     return data;
    //     // return data = { data: data};
    // }

    /**
     * Gestion des xpaths venant de mdFields.js
     * 
     * 1. xpath simple "xpaths: ['...']" => xpath = xpaths[0] si xpaths.length == 1 
     * 2. xpath composé "xpaths: ['...']" => xpath = xpaths.join('.')
     * 3. xpath simple avec codelistValue: existance d'un attribut "xpaths_code"
     * 4. xpath composé avec codelistValue: 2. + 3.
     * 
     */
    getXpath(xpaths) {
        var xpath_end = xpaths.value;
        if (xpaths.hasOwnProperty('code') && xpaths.code.length) {
            xpath_end = xpaths.code;
        }
        // console.log(xpaths.paths, xpath_end);
        if (xpaths.hasOwnProperty('paths') && xpaths.paths.length) {
            return xpaths.paths.concat(xpath_end).join('.');
        } else {
            return xpath_end;
        }
    }


    /**
     * getValue function
     * 
     * @param {any} obj 
     * @param {any} space 
     * @param {any} field 
     * @returns 
     * @memberof XmlConverter
     */
    getValue(obj, space, field) {
        var fields = this.getFields(space);
        var xpath = this.getXpath(fields[field].xpaths);
        var values = jsonPath.query(obj, xpath);
        // console.log(124, field, fields, fields[field], values);
        return values;
    }

    filterArray(arr, path, filter) {
        var result = [];
        filter = filter || '';
        var fieldNames = path.split('.');
        for (var a = 0; a < arr.length; a++) {
            var item = arr[a];
            for (var f = 0; f < fieldNames.length; f++) {
                item = item[fieldNames[f]];
                if (f == fieldNames.length - 1 && item == filter) {
                    result.push(arr[a]);
                }
            }
        }
        return result;
    }

    setValue(obj, space, field, values, separator) {
        // console.log(obj, space, field, values, separator);
        var fields = this.getFields(space);
        var paths = fields[field].xpaths.paths;

        // TODO: pb si values = empty...
        // if ((!paths || paths.length == 0) && values[0]) {
        if (!paths || paths.length == 0) {
            // console.log(1, fields[field].name);
            // console.log(fields[field].xpaths.value);
            obj = lodash.set(obj, fields[field].xpaths.value.replace(/\[[\*|0]\]$/, ''), values);
            if (fields[field].xpaths.hasOwnProperty('code')) {
                obj = lodash.set(obj, fields[field].xpaths.code, values[0]);
            }
            return obj;
        } else {
            // console.log(2, fields[field].name);
            var result = [];
            for (var v = 0; v < values.length; v++) {
                // var xpath = xpaths.pop();
                // var xpath = xpaths[xpaths.length - 1];
                if (values[v]) {
                    var o = lodash.set({}, fields[field].xpaths.value, values[v]);
                    if (fields[field].xpaths.hasOwnProperty('code')) {
                        o = lodash.set(o, fields[field].xpaths.code, values[v]);
                    }
                    result.push(o);
                }
            }
            // console.log(fields[field].name, obj, result);
            // paths.push(fields[field].xpaths.value);
            paths = paths.map(function(val, key) {
                // var value = val.replace('[*]', '[0]');
                return val.replace('[*]', '[0]');
                // return val.replace(/\[[\*|0]\]$/, '');
            });
            // console.log(paths, paths.join('.').replace(/\[0\]$/, ''), result);
            // var results = 
            return lodash.set(obj, paths.join('.').replace(/\[0\]$/, ''), result);
        }

        // var xpath = xpaths.pop();
        // var isFirst = false;
        // while (xpaths.length) {
        //     isFirst = true;
        //     var xpath = xpaths.pop();
        //     if (isFirst) {
        //         var result = [];
        //         for (var v = 0; v < values.length; v++) {
        //             var value = values[v];
        //             // var results_array = [];
        //             console.log(fields[field].name, xpath, value);
        //             // value = jsonPath.value(o, xpath, value);
        //             result.push(lodash.set({}, xpath, value));
        //         }
        //     }
        //     if (!xpaths.length) {
        //         o = obj;
        //     }
        //     lodash.set(o, xpath, result);
        // }

        // console.log(fields[field].name, obj, value);


        // var xpath = this.getXpath(fields[field].xpaths);
        // var result = obj;
        // if (Array.isArray(fields[field].xpath)) {
        //     for (var i = 0; i < fields[field].xpath.length; i++) {
        //         result = lodash.set(obj, fields[field].xpath[i], value);
        //     }
        // } else {
        //     if (fields[field].hasOwnProperty('children')) {
        //         var values = value.split(separator)
        //         var children = [];
        //         for (var i = 0; i < values.length; i++) {
        //             children.push(lodash.set({}, fields[field].children[0].xpath, values[i]));
        //         }
        //         result = lodash.set(obj, fields[field].xpath, children);
        //         result = lodash.set(obj, this.getXpath(fields[field].xpath), children);
        //     } else {
        //         result = lodash.set(obj, fields[field].xpath, value);
        //     }
        // }
        // return result;

        // TODO: use xpath of codelist to set code
        // return jsonPath.value(obj, fields[field].xpaths, value);
        // return obj;
    }

};