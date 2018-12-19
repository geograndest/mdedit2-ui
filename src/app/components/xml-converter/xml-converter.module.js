import {
    XmlConverterService
} from './xml-converter.service';
import {
    getValue
} from './xml-converter.filters';
import {
    truncate
} from './xml-converter.filters';
import {
    translate
} from './xml-converter.filters';
import {
    toString
} from './xml-converter.filters';
import {
    toDate
} from './xml-converter.filters';
import {
    arrayContains
} from './xml-converter.filters';
import {
    toArray
} from './xml-converter.filters';

export const xmlConverter = angular.module('xmlConverter', [])
    .service('XmlConverterService', XmlConverterService)
    .filter('getValue', getValue)
    .filter('truncate', truncate)
    .filter('translate', translate)
    .filter('toString', toString)
    .filter('toDate', toDate)
    .filter('toArray', toArray)
    .filter('arrayContains', arrayContains)
    .name;