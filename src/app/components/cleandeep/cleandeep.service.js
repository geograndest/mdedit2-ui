// import cleandeep from 'clean-deep';
const cleanDeep = require('clean-deep');

export class CleandeepService {
    constructor() {
        // this.cleandeep = cleandeep;
    }

    cleandeep(obj) {
        // const converter = new XmlConverter();
        return cleanDeep(obj);
    }
}