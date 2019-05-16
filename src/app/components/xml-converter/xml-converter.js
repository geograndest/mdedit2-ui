var renamekeys = require("deep-rename-keys");
var jsonpath = require("jsonpath");
import convert from "xml-js";
import * as lodash from "lodash";

// TODO: étudier possibilité de charger dynamiquement le fichier en mettant:
// - export default() dans les fichiers source
// - en important avec "import {fields} from './spaces/xml-converter.'+space+'Fields';"
import { mdFields } from "./spaces/xml-converter.mdFields";
import { getRecordFields } from "./spaces/xml-converter.getRecordFields";
import { getRecordsFields } from "./spaces/xml-converter.getRecordsFields";
import { getCapabilitiesFields } from "./spaces/xml-converter.getCapabilitiesFields";
import { getCapabilitiesWfsFields } from "./spaces/xml-converter.getCapabilitiesWfsFields";
import { getDomainsFields } from "./spaces/xml-converter.getDomainsFields";

export class XmlConverter {
    constructor() {
        "ngInject";
        this.mdjs = {};
        this.mdxml = "";
    }

    xml2js(xml, options) {
        this.mdjs = convert.xml2js(xml, options);
        this.mdjs = renamekeys(this.mdjs, function(key, val) {
            if (
                key.indexOf(":") == -1 &&
                !key.startsWith("_") &&
                key != "codeList" &&
                key != "codeListValue" &&
                key != "version" &&
                key != "encoding"
            ) {
                key = "gmd:" + key;
            }
            return key.replace(":", "__");
        });
        return this.mdjs;
    }

    js2xml(js, options) {
        js = renamekeys(js, function(key, val) {
            return key.replace("__", ":");
        });
        this.mdxml = convert.js2xml(js, options);
        return this.mdxml;
    }

    getFields(nameSpace) {
        if (nameSpace == "md") {
            return mdFields;
        } else if (nameSpace == "getRecord") {
            return getRecordFields;
        } else if (nameSpace == "getRecords") {
            return getRecordsFields;
        } else if (nameSpace == "getCapabilities") {
            return getCapabilitiesFields;
        } else if (nameSpace == "getCapabilitiesWfs") {
            return getCapabilitiesWfsFields;
        } else if (nameSpace == "getDomains") {
            return getDomainsFields;
        }
    }

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
        var xpath = xpaths.value;
        if (xpaths.hasOwnProperty("code") && xpaths.code.length) {
            xpath = xpaths.code;
        }
        if (xpaths.hasOwnProperty("paths") && xpaths.paths.length) {
            return xpaths.paths.concat(xpath).join(".");
        } else {
            return xpath;
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
        var values = jsonpath.query(obj, xpath);
        return values;
        // var values = [];
        // var fieldNames = field.split('|');
        // for (var i = 0 ; i < fieldNames.length; i++) {
        //     // var xpath1 = this.getXpath(fields[fieldNames[i]].xpaths);
        //     values = values.concat(jsonpath.query(obj, this.getXpath(fields[fieldNames[i]].xpaths)));
        // }
        // return values;
        // var xpath = this.getXpath(fields[fieldNames[i]].xpaths);
    }

    setValue(obj, space, field, values, separator) {
        var fields = this.getFields(space);
        // var fieldName = field.split('|')[0];
        // console.log(field)
        var paths = fields[field].xpaths.paths;

        // TODO: pb si values = empty...
        if (!paths || paths.length == 0) {
            obj = lodash.set(
                obj,
                fields[field].xpaths.value.replace(/\[[\*|0]\]$/, ""),
                values
            );
            if (fields[field].xpaths.hasOwnProperty("code")) {
                obj = lodash.set(obj, fields[field].xpaths.code, values[0]);
                if (fields[field].xpaths.hasOwnProperty("codelist")) {
                    obj = lodash.set(
                        obj,
                        fields[field].xpaths.codelist,
                        fields[field].values.codelist
                    );
                }
            }
            return obj;
        } else {
            var result = [];
            for (var v = 0; v < values.length; v++) {
                if (v == 0 || values[v]) {
                    var o = lodash.set(
                        {},
                        fields[field].xpaths.value,
                        values[v]
                    );
                    if (fields[field].xpaths.hasOwnProperty("code")) {
                        o = lodash.set(o, fields[field].xpaths.code, values[v]);
                        if (fields[field].xpaths.hasOwnProperty("codelist")) {
                            o = lodash.set(
                                o,
                                fields[field].xpaths.codelist,
                                fields[field].values.codelist
                            );
                        }
                    }
                    result.push(o);
                }
            }
            paths = paths.map(function(val, key) {
                return val.replace("[*]", "[0]");
            });
            return lodash.set(
                obj,
                paths.join(".").replace(/\[0\]$/, ""),
                result
            );
        }
    }
}
