import {
    XmlConverter
} from './xml-converter';
// var jsonpath = require('jsonpath');
// import {
//     mdFields
// } from './xml-converter.mdFields';

export class XmlConverterService {
    constructor() {}

    xml2js(xml) {
        const converter = new XmlConverter();
        return converter.xml2js(xml, {
            compact: true,
            spaces: 4,
            alwaysArray: true,
            trim: true
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

    setValue(obj, space, field, value, separator) {
        const converter = new XmlConverter();
        return converter.setValue(obj, space, field, value, separator);
    }
};