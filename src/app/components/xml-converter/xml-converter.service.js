import {
    XmlConverter
} from './xml-converter';
var jsonPath = require('jsonpath');
import {
    mdFields
} from './xml-converter.mdFields';

export class XmlConverterService {
    constructor() {}

    xml2js(xml) {
        const converter = new XmlConverter();
        return converter.xml2js(xml, {
            compact: true,
            spaces: 4,
            alwaysArray: true
        });
    }

    js2xml(js) {
        const converter = new XmlConverter();
        return converter.js2xml(js, {
            compact: true,
            spaces: 4
        });
    }

    getValue(obj, space, field) {
        const converter = new XmlConverter();
        return converter.getValue(obj, space, field);
    }

    // getValue(obj, space, field) {
    //     var result = [];
    //     // var fields = this.getFields(space);
    //     var xpath = mdFields[field].xpath;
    //     var values = jsonPath.query(obj, xpath);
    //     for (var i = 0; i < values.length; i++) {
    //         result.push(values[i][0]);
    //     }
    //     return result;
    // }

    setValue(obj, space, field, value, separator) {
        const converter = new XmlConverter();
        return converter.setValue(obj, space, field, value, separator);
    }
};