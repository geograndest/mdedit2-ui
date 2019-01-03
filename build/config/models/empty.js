const empty = {};

empty.declaration = {
    "_declaration": {
        "_attributes": {
            "version": "1.0",
            "encoding": "UTF-8"
        }
    }
};

empty.metadata = {
    "gmd:MD_Metadata": {
        "_attributes": {
            "xmlns:gmd": "http://www.isotc211.org/2005/gmd",
            "xmlns:gmx": "http://www.isotc211.org/2005/gmx",
            "xmlns:gco": "http://www.isotc211.org/2005/gco",
            "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
            "xmlns:gml": "http://www.opengis.net/gml",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            "xmlns:geonet": "http://www.fao.org/geonetwork",
            "xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://schemas.opengis.net/iso/19139/20060504/gmd/gmd.xsd"
        }
    }
};

empty.mdFileIdentifier = {
    "gmd:fileIdentifier": {
        "gco:CharacterString": {
            "_text": "FR-236700019-BdOCS2000-2008-20112012-CIGAL-V2"
        }
    }
};



empty.mdLanguage = {
    "gmd:language": {
        "gmd:LanguageCode": {
            "_attributes": {
                "codeList": "http://www.loc.gov/standards/iso639-2/",
                "codeListValue": "fre"
            },
            "_text": "fre"
        }
    }
};

empty.mdCharacterSet = {
    "gmd:characterSet": {
        "gmd:MD_CharacterSetCode": {
            "_attributes": {
                "codeList": "http://www.isotc211.org/2005/resources/codeList.xml#MD_CharacterSetCode",
                "codeListValue": "utf8"
            },
            "_text": "utf8"
        }
    }
};




// empty.mdFileIdentifier = {
//     "gmd:hierarchyLevel": {
//         "gmd:MD_ScopeCode": {
//             "_attributes": {
//                 "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_ScopeCode",
//                 "codeListValue": "dataset"
//             },
//             "_text": "dataset"
//         }
//     }
// };

// empty.mdFileIdentifier = {
//     "gmd:contact": [{
//         "gmd:CI_ResponsibleParty": {
//             "gmd:individualName": {
//                 "gco:CharacterString": {
//                     "_text": "Lionel Méquignon"
//                 }
//             },
//             "gmd:organisationName": {
//                 "gco:CharacterString": {
//                     "_text": "SIRS"
//                 }
//             },
//             "gmd:positionName": {
//                 "gco:CharacterString": {
//                     "_text": "Chef de projets"
//                 }
//             },
//             "gmd:contactInfo": {
//                 "gmd:CI_Contact": {
//                     "gmd:phone": {
//                         "gmd:CI_Telephone": {
//                             "gmd:voice": {
//                                 "gco:CharacterString": {
//                                     "_text": "+33 (0)3 20 72 53 64"
//                                 }
//                             }
//                         }
//                     },
//                     "gmd:address": {
//                         "gmd:CI_Address": {
//                             "gmd:deliveryPoint": {
//                                 "gco:CharacterString": {
//                                     "_text": "27, rue du carrousel\r\nParc de la Cimaise"
//                                 }
//                             },
//                             "gmd:city": {
//                                 "gco:CharacterString": {
//                                     "_text": "VILLENEUVE-D'ASCQ"
//                                 }
//                             },
//                             "gmd:postalCode": {
//                                 "gco:CharacterString": {
//                                     "_text": "59650"
//                                 }
//                             },
//                             "gmd:electronicMailAddress": {
//                                 "gco:CharacterString": {
//                                     "_text": "Lionel.mequignon@sirs-fr,com"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             },
//             "gmd:role": {
//                 "gmd:CI_RoleCode": {
//                     "_attributes": {
//                         "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_RoleCode",
//                         "codeListValue": "author"
//                     },
//                     "_text": "author"
//                 }
//             }
//         }
//     }, {
//         "gmd:CI_ResponsibleParty": {
//             "gmd:individualName": {
//                 "gco:CharacterString": {
//                     "_text": "Guillaume RYCKELYNCK"
//                 }
//             },
//             "gmd:organisationName": {
//                 "gco:CharacterString": {
//                     "_text": "CIGAL"
//                 }
//             },
//             "gmd:positionName": {
//                 "gco:CharacterString": {
//                     "_text": "Chargé de mission CIGAL"
//                 }
//             },
//             "gmd:contactInfo": {
//                 "gmd:CI_Contact": {
//                     "gmd:phone": {
//                         "gmd:CI_Telephone": {
//                             "gmd:voice": {
//                                 "gco:CharacterString": {
//                                     "_text": "03 88 15 65 48"
//                                 }
//                             }
//                         }
//                     },
//                     "gmd:address": {
//                         "gmd:CI_Address": {
//                             "gmd:deliveryPoint": {
//                                 "gco:CharacterString": {
//                                     "_text": "1, place Adrien ZELLER"
//                                 }
//                             },
//                             "gmd:city": {
//                                 "gco:CharacterString": {
//                                     "_text": "STRASBOURG"
//                                 }
//                             },
//                             "gmd:postalCode": {
//                                 "gco:CharacterString": {
//                                     "_text": "67070"
//                                 }
//                             },
//                             "gmd:electronicMailAddress": {
//                                 "gco:CharacterString": {
//                                     "_text": "guillaume.ryckelynck@region-alsace.eu"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             },
//             "gmd:role": {
//                 "gmd:CI_RoleCode": {
//                     "_attributes": {
//                         "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_RoleCode",
//                         "codeListValue": "pointOfContact"
//                     },
//                     "_text": "pointOfContact"
//                 }
//             }
//         }
//     }],
//     "gmd:dateStamp": {
//         "gco:Date": {
//             "_text": "2013-06-04"
//         }
//     },
//     "gmd:metadataStandardName": {
//         "gco:CharacterString": {
//             "_text": "ISO 19115/19139"
//         }
//     },
//     "gmd:metadataStandardVersion": {
//         "gco:CharacterString": {
//             "_text": "Cor 1:2006"
//         }
//     },
//     "gmd:referenceSystemInfo": {
//         "gmd:MD_ReferenceSystem": {
//             "gmd:referenceSystemIdentifier": {
//                 "gmd:RS_Identifier": {
//                     "gmd:code": {
//                         "gco:CharacterString": {
//                             "_text": "RGF93 – Lambert 93 CC48 (EPSG:3948)"
//                         }
//                     }
//                 }
//             }
//         }
//     },
//     "gmd:identificationInfo": {
//         "gmd:MD_DataIdentification": {
//             "gmd:citation": {
//                 "gmd:CI_Citation": {
//                     "gmd:title": {
//                         "gco:CharacterString": {
//                             "_text": "DONNEES - Base de données d'occupation du sol CIGAL 2000, 2008 et 2011/2012 v2 (BdOCS2000-2008-20112012-CIGAL-V2) - Alsace"
//                         }
//                     },
//                     "gmd:date": {
//                         "gmd:CI_Date": {
//                             "gmd:date": {
//                                 "gco:Date": {
//                                     "_text": "2013-05-17"
//                                 }
//                             },
//                             "gmd:dateType": {
//                                 "gmd:CI_DateTypeCode": {
//                                     "_attributes": {
//                                         "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_DateTypeCode",
//                                         "codeListValue": "creation"
//                                     },
//                                     "_text": "creation"
//                                 }
//                             }
//                         }
//                     },
//                     "gmd:identifier": [{
//                         "gmd:RS_Identifier": {
//                             "gmd:code": {
//                                 "gco:CharacterString": {
//                                     "_text": "FR-236700019-BdOCS2000-2008-20112012-CIGAL-V2"
//                                 }
//                             },
//                             "gmd:codeSpace": {
//                                 "gco:CharacterString": {
//                                     "_text": "MD_URI"
//                                 }
//                             }
//                         }
//                     }, {
//                         "gmd:RS_Identifier": {
//                             "gmd:code": {
//                                 "gco:CharacterString": {
//                                     "_text": "FR-236700019-BdOCS2000-2008-20112012-CIGAL-V2"
//                                 }
//                             },
//                             "gmd:codeSpace": {
//                                 "gco:CharacterString": {}
//                             }
//                         }
//                     }]
//                 }
//             },
//             "gmd:abstract": {
//                 "gco:CharacterString": {
//                     "_text": "La BdOCS CIGAL est un ensemble de couches de données constituant un référentiel de l'occupation du sol en Alsace.\r\nElle permet de disposer d’un état des lieux pour 2000 et 2008 et 2011/2012. Elle offre par ailleurs une observation de l’évolution des mutations entre 2000 et 2008, ainsi qu’entre 2008 et 2011/12.\r\nCe projet couvre l’ensemble du territoire alsacien. L’exploitation des bases de données est prévue au 1/10 000ème.\r\nLes couches d’information ont également été généralisées pour une exploitation au 1/50 000ème et au 1/250 000ème."
//                 }
//             },
//             "gmd:pointOfContact": [{
//                 "gmd:CI_ResponsibleParty": {
//                     "gmd:individualName": {
//                         "gco:CharacterString": {
//                             "_text": "Guillaume RYCKELYNCK"
//                         }
//                     },
//                     "gmd:organisationName": {
//                         "gco:CharacterString": {
//                             "_text": "CIGAL"
//                         }
//                     },
//                     "gmd:positionName": {
//                         "gco:CharacterString": {
//                             "_text": "Chargé de mission"
//                         }
//                     },
//                     "gmd:contactInfo": {
//                         "gmd:CI_Contact": {
//                             "gmd:phone": {
//                                 "gmd:CI_Telephone": {
//                                     "gmd:voice": {
//                                         "gco:CharacterString": {
//                                             "_text": "03 88 15 65 48"
//                                         }
//                                     }
//                                 }
//                             },
//                             "gmd:address": {
//                                 "gmd:CI_Address": {
//                                     "gmd:deliveryPoint": {
//                                         "gco:CharacterString": {
//                                             "_text": "1, place Adrien Zeller"
//                                         }
//                                     },
//                                     "gmd:city": {
//                                         "gco:CharacterString": {
//                                             "_text": "Strasbourg"
//                                         }
//                                     },
//                                     "gmd:postalCode": {
//                                         "gco:CharacterString": {
//                                             "_text": "67070"
//                                         }
//                                     },
//                                     "gmd:electronicMailAddress": {
//                                         "gco:CharacterString": {
//                                             "_text": "guillaume.ryckelynck@region-alsace.eu"
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     },
//                     "gmd:role": {
//                         "gmd:CI_RoleCode": {
//                             "_attributes": {
//                                 "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_RoleCode",
//                                 "codeListValue": "pointOfContact"
//                             },
//                             "_text": "pointOfContact"
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:CI_ResponsibleParty": {
//                     "gmd:organisationName": {
//                         "gco:CharacterString": {
//                             "_text": "CIGAL"
//                         }
//                     },
//                     "gmd:contactInfo": {
//                         "gmd:CI_Contact": {
//                             "gmd:phone": {
//                                 "gmd:CI_Telephone": {
//                                     "gmd:voice": {
//                                         "gco:CharacterString": {
//                                             "_text": "03 88 15 68 67"
//                                         }
//                                     }
//                                 }
//                             },
//                             "gmd:address": {
//                                 "gmd:CI_Address": {
//                                     "gmd:deliveryPoint": {
//                                         "gco:CharacterString": {
//                                             "_text": "1, place Adrien Zeller\r\nBP 91006"
//                                         }
//                                     },
//                                     "gmd:city": {
//                                         "gco:CharacterString": {
//                                             "_text": "STRASBOURG Cedex"
//                                         }
//                                     },
//                                     "gmd:postalCode": {
//                                         "gco:CharacterString": {
//                                             "_text": "67070"
//                                         }
//                                     },
//                                     "gmd:electronicMailAddress": {
//                                         "gco:CharacterString": {
//                                             "_text": "contact@cigalsace.org"
//                                         }
//                                     }
//                                 }
//                             },
//                             "gmd:contactInstructions": {
//                                 "gmx:FileName": {
//                                     "_attributes": {
//                                         "src": "https://www.cigalsace.org/metadata/CIGAL/Logo/Logo_CIGAL.jpg"
//                                     },
//                                     "_text": "Logo"
//                                 }
//                             }
//                         }
//                     },
//                     "gmd:role": {
//                         "gmd:CI_RoleCode": {
//                             "_attributes": {
//                                 "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_RoleCode",
//                                 "codeListValue": "owner"
//                             },
//                             "_text": "owner"
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:CI_ResponsibleParty": {
//                     "gmd:individualName": {
//                         "gco:CharacterString": {
//                             "_text": "Lionel Méquignon"
//                         }
//                     },
//                     "gmd:organisationName": {
//                         "gco:CharacterString": {
//                             "_text": "SIRS"
//                         }
//                     },
//                     "gmd:positionName": {
//                         "gco:CharacterString": {
//                             "_text": "Chef de projets"
//                         }
//                     },
//                     "gmd:contactInfo": {
//                         "gmd:CI_Contact": {
//                             "gmd:phone": {
//                                 "gmd:CI_Telephone": {
//                                     "gmd:voice": {
//                                         "gco:CharacterString": {
//                                             "_text": "+33 (0)3 20 72 53 64"
//                                         }
//                                     }
//                                 }
//                             },
//                             "gmd:address": {
//                                 "gmd:CI_Address": {
//                                     "gmd:deliveryPoint": {
//                                         "gco:CharacterString": {
//                                             "_text": "27 rue du carrousel\r\nParc de la Cimaise"
//                                         }
//                                     },
//                                     "gmd:city": {
//                                         "gco:CharacterString": {
//                                             "_text": "Villeneuve d'Ascq"
//                                         }
//                                     },
//                                     "gmd:postalCode": {
//                                         "gco:CharacterString": {
//                                             "_text": "59650"
//                                         }
//                                     },
//                                     "gmd:electronicMailAddress": {
//                                         "gco:CharacterString": {
//                                             "_text": "Lionel.mequignon@sirs-fr.com"
//                                         }
//                                     }
//                                 }
//                             },
//                             "gmd:contactInstructions": {
//                                 "gmx:FileName": {
//                                     "_attributes": {
//                                         "src": "https://www.cigalsace.org/metadata/CIGAL/Logo/Logo_SIRS.jpg"
//                                     },
//                                     "_text": "Logo"
//                                 }
//                             }
//                         }
//                     },
//                     "gmd:role": {
//                         "gmd:CI_RoleCode": {
//                             "_attributes": {
//                                 "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_RoleCode",
//                                 "codeListValue": "author"
//                             },
//                             "_text": "author"
//                         }
//                     }
//                 }
//             }],
//             "gmd:resourceMaintenance": {
//                 "gmd:MD_MaintenanceInformation": {
//                     "gmd:maintenanceAndUpdateFrequency": {
//                         "gmd:MD_MaintenanceFrequencyCode": {
//                             "_attributes": {
//                                 "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode",
//                                 "codeListValue": "unknown"
//                             },
//                             "_text": "unknown"
//                         }
//                     }
//                 }
//             },
//             "gmd:graphicOverview": {
//                 "gmd:MD_BrowseGraphic": {
//                     "gmd:fileName": {
//                         "gco:CharacterString": {
//                             "_text": "https://www.cigalsace.org/metadata/CIGAL/FR-236700019-BdOCS2000-2008-20112012-CIGAL-V2/FR-236700019-BdOCS2000-2008-20112012-CIGAL-V2.jpg"
//                         }
//                     },
//                     "gmd:fileDescription": {
//                         "gco:CharacterString": {
//                             "_text": "BdOCS CIGAL v2"
//                         }
//                     },
//                     "gmd:fileType": {
//                         "gco:CharacterString": {
//                             "_text": ".jpg"
//                         }
//                     }
//                 }
//             },
//             "gmd:descriptiveKeywords": [{
//                 "gmd:MD_Keywords": {
//                     "gmd:keyword": {
//                         "gco:CharacterString": {
//                             "_text": "aménagement du territoire"
//                         }
//                     },
//                     "gmd:type": {
//                         "gmd:MD_KeywordTypeCode": {
//                             "_attributes": {
//                                 "codeListValue": "theme",
//                                 "codeList": "http://www.isotc211.org/2005/resources/codeList.xml#MD_KeywordTypeCode"
//                             }
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_Keywords": {
//                     "gmd:keyword": {
//                         "gco:CharacterString": {
//                             "_text": "occupation du sol"
//                         }
//                     },
//                     "gmd:type": {
//                         "gmd:MD_KeywordTypeCode": {
//                             "_attributes": {
//                                 "codeListValue": "theme",
//                                 "codeList": "http://www.isotc211.org/2005/resources/codeList.xml#MD_KeywordTypeCode"
//                             }
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_Keywords": {
//                     "gmd:keyword": {
//                         "gco:CharacterString": {
//                             "_text": "Alsace"
//                         }
//                     },
//                     "gmd:type": {
//                         "gmd:MD_KeywordTypeCode": {
//                             "_attributes": {
//                                 "codeListValue": "place",
//                                 "codeList": "http://www.isotc211.org/2005/resources/codeList.xml#MD_KeywordTypeCode"
//                             }
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_Keywords": {
//                     "gmd:keyword": {
//                         "gco:CharacterString": {
//                             "_text": "données"
//                         }
//                     },
//                     "gmd:type": {
//                         "gmd:MD_KeywordTypeCode": {
//                             "_attributes": {
//                                 "codeListValue": "theme",
//                                 "codeList": "http://www.isotc211.org/2005/resources/codeList.xml#MD_KeywordTypeCode"
//                             }
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_Keywords": {
//                     "gmd:keyword": {
//                         "gco:CharacterString": {
//                             "_text": "environnement"
//                         }
//                     },
//                     "gmd:type": {
//                         "gmd:MD_KeywordTypeCode": {
//                             "_attributes": {
//                                 "codeListValue": "theme",
//                                 "codeList": "http://www.isotc211.org/2005/resources/codeList.xml#MD_KeywordTypeCode"
//                             }
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_Keywords": {
//                     "gmd:keyword": {
//                         "gco:CharacterString": {
//                             "_text": "données ouvertes"
//                         }
//                     },
//                     "gmd:type": {
//                         "gmd:MD_KeywordTypeCode": {
//                             "_attributes": {
//                                 "codeListValue": "theme",
//                                 "codeList": "http://www.isotc211.org/2005/resources/codeList.xml#MD_KeywordTypeCode"
//                             }
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_Keywords": {
//                     "gmd:keyword": {
//                         "gco:CharacterString": {
//                             "_text": "Géoportail"
//                         }
//                     },
//                     "gmd:type": {
//                         "gmd:MD_KeywordTypeCode": {
//                             "_attributes": {
//                                 "codeListValue": "theme",
//                                 "codeList": "http://www.isotc211.org/2005/resources/codeList.xml#MD_KeywordTypeCode"
//                             }
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_Keywords": {
//                     "gmd:keyword": {
//                         "gco:CharacterString": {
//                             "_text": "Occupation des terres"
//                         }
//                     },
//                     "gmd:thesaurusName": {
//                         "gmd:CI_Citation": {
//                             "gmd:title": {
//                                 "gco:CharacterString": {
//                                     "_text": "GEMET - INSPIRE themes, version 1.0"
//                                 }
//                             },
//                             "gmd:date": {
//                                 "gmd:CI_Date": {
//                                     "gmd:date": {
//                                         "gco:Date": {
//                                             "_text": "2008-06-01"
//                                         }
//                                     },
//                                     "gmd:dateType": {
//                                         "gmd:CI_DateTypeCode": {
//                                             "_attributes": {
//                                                 "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_DateTypeCode",
//                                                 "codeListValue": "publication"
//                                             },
//                                             "_text": "publication"
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }],
//             "gmd:resourceConstraints": [{
//                 "gmd:MD_Constraints": {
//                     "gmd:useLimitation": {
//                         "gco:CharacterString": {
//                             "_text": "Licence ouverte Etalab."
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_Constraints": {
//                     "gmd:useLimitation": {
//                         "gco:CharacterString": {
//                             "_text": "Mentions: \"Source : BdOCS CIGAL v2 (www.cigalsace.org)\"."
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_Constraints": {
//                     "gmd:useLimitation": {
//                         "gco:CharacterString": {
//                             "_text": "Se référer au guide d'utilisation de la base de données pour plus d'information."
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_LegalConstraints": {
//                     "gmd:accessConstraints": {
//                         "gmd:MD_RestrictionCode": {
//                             "_attributes": {
//                                 "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_RestrictionCode",
//                                 "codeListValue": "otherRestrictions"
//                             },
//                             "_text": "otherRestrictions"
//                         }
//                     },
//                     "gmd:useConstraints": {
//                         "gmd:MD_RestrictionCode": {
//                             "_attributes": {
//                                 "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_RestrictionCode",
//                                 "codeListValue": "license"
//                             },
//                             "_text": "license"
//                         }
//                     },
//                     "gmd:otherConstraints": {
//                         "gco:CharacterString": {
//                             "_text": "Pas de restriction d’accès public selon INSPIRE"
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_SecurityConstraints": {
//                     "gmd:classification": {
//                         "gmd:MD_ClassificationCode": {
//                             "_attributes": {
//                                 "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_ClassificationCode",
//                                 "codeListValue": "unclassified"
//                             },
//                             "_text": "unclassified"
//                         }
//                     }
//                 }
//             }],
//             "gmd:spatialRepresentationType": {
//                 "gmd:MD_SpatialRepresentationTypeCode": {
//                     "_attributes": {
//                         "codeList": "http://www.isotc211.org/2005/resources/codeList.xml#MD_SpatialRepresentationTypeCode",
//                         "codeListValue": "vector"
//                     },
//                     "_text": "vector"
//                 }
//             },
//             "gmd:spatialResolution": {
//                 "gmd:MD_Resolution": {
//                     "gmd:equivalentScale": {
//                         "gmd:MD_RepresentativeFraction": {
//                             "gmd:denominator": {
//                                 "gco:Integer": {
//                                     "_text": "10000"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             },
//             "gmd:language": {
//                 "gmd:LanguageCode": {
//                     "_attributes": {
//                         "codeList": "http://www.loc.gov/standards/iso639-2/",
//                         "codeListValue": "fre"
//                     },
//                     "_text": "fre"
//                 }
//             },
//             "gmd:characterSet": {
//                 "gmd:MD_CharacterSetCode": {
//                     "_attributes": {
//                         "codeList": "http://www.isotc211.org/2005/resources/codeList.xml#MD_CharacterSetCode",
//                         "codeListValue": "utf8"
//                     },
//                     "_text": "utf8"
//                 }
//             },
//             "gmd:topicCategory": {
//                 "gmd:MD_TopicCategoryCode": {
//                     "_text": "environment"
//                 }
//             },
//             "gmd:extent": [{
//                 "gmd:EX_Extent": {
//                     "gmd:description": {
//                         "gco:CharacterString": {
//                             "_text": "Alsace"
//                         }
//                     },
//                     "gmd:geographicElement": {
//                         "gmd:EX_GeographicBoundingBox": {
//                             "gmd:westBoundLongitude": {
//                                 "gco:Decimal": {
//                                     "_text": "6.84"
//                                 }
//                             },
//                             "gmd:eastBoundLongitude": {
//                                 "gco:Decimal": {
//                                     "_text": "8.23"
//                                 }
//                             },
//                             "gmd:southBoundLatitude": {
//                                 "gco:Decimal": {
//                                     "_text": "47.42"
//                                 }
//                             },
//                             "gmd:northBoundLatitude": {
//                                 "gco:Decimal": {
//                                     "_text": "49.08"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:EX_Extent": {
//                     "gmd:description": {
//                         "gco:CharacterString": {
//                             "_text": "BdOCS CIGAL 2000 V2"
//                         }
//                     },
//                     "gmd:temporalElement": {
//                         "gmd:EX_TemporalExtent": {
//                             "gmd:extent": {
//                                 "gml:TimePeriod": {
//                                     "_attributes": {
//                                         "xsi:type": "gml:TimePeriodType",
//                                         "gml:id": "TemporalId_1"
//                                     },
//                                     "gml:beginPosition": {
//                                         "_text": "1999-09-01"
//                                     },
//                                     "gml:endPosition": {
//                                         "_text": "2001-01-01"
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:EX_Extent": {
//                     "gmd:description": {
//                         "gco:CharacterString": {
//                             "_text": "BdOCS CIGAL 2008 V2"
//                         }
//                     },
//                     "gmd:temporalElement": {
//                         "gmd:EX_TemporalExtent": {
//                             "gmd:extent": {
//                                 "gml:TimePeriod": {
//                                     "_attributes": {
//                                         "xsi:type": "gml:TimePeriodType",
//                                         "gml:id": "TemporalId_2"
//                                     },
//                                     "gml:beginPosition": {
//                                         "_text": "2007-10-01"
//                                     },
//                                     "gml:endPosition": {
//                                         "_text": "2008-03-01"
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:EX_Extent": {
//                     "gmd:description": {
//                         "gco:CharacterString": {
//                             "_text": "BdOCS CIGAL 2011-12 V2"
//                         }
//                     },
//                     "gmd:temporalElement": {
//                         "gmd:EX_TemporalExtent": {
//                             "gmd:extent": {
//                                 "gml:TimePeriod": {
//                                     "_attributes": {
//                                         "xsi:type": "gml:TimePeriodType",
//                                         "gml:id": "TemporalId_3"
//                                     },
//                                     "gml:beginPosition": {
//                                         "_text": "2011-06-01"
//                                     },
//                                     "gml:endPosition": {
//                                         "_text": "2012-07-01"
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }]
//         }
//     },
//     "gmd:distributionInfo": {
//         "gmd:MD_Distribution": {
//             "gmd:distributionFormat": {
//                 "gmd:MD_Format": {
//                     "gmd:name": {
//                         "gco:CharacterString": {
//                             "_text": "Shapefiles (shp)"
//                         }
//                     },
//                     "gmd:version": {
//                         "gco:CharacterString": {
//                             "_text": "1.0"
//                         }
//                     },
//                     "gmd:specification": {
//                         "gco:CharacterString": {
//                             "_text": "Fichier de formes ESRI"
//                         }
//                     }
//                 }
//             },
//             "gmd:transferOptions": {
//                 "gmd:MD_DigitalTransferOptions": {
//                     "gmd:onLine": [{
//                         "gmd:CI_OnlineResource": {
//                             "gmd:linkage": {
//                                 "gmd:URL": {
//                                     "_text": "https://www.cigalsace.org/metadata/CIGAL/FR-236700019-BdOCS2000-2008-20112012-CIGAL-V2/CIGAL_BdOCSv2_RapportMethodologique_v130614.pdf"
//                                 }
//                             },
//                             "gmd:name": {
//                                 "gco:CharacterString": {
//                                     "_text": "Rapport méthodologique"
//                                 }
//                             },
//                             "gmd:description": {
//                                 "gco:CharacterString": {
//                                     "_text": "Rapport méthodologique de production de la BdOCS CIGAL v2"
//                                 }
//                             }
//                         }
//                     }, {
//                         "gmd:CI_OnlineResource": {
//                             "gmd:linkage": {
//                                 "gmd:URL": {
//                                     "_text": "https://www.cigalsace.org/metadata/CIGAL/FR-236700019-BdOCS2000-2008-20112012-CIGAL-V2/CIGAL_BdOCSv2_GuideUtilisateur_v131122.pdf"
//                                 }
//                             },
//                             "gmd:name": {
//                                 "gco:CharacterString": {
//                                     "_text": "Guide utilisateur"
//                                 }
//                             },
//                             "gmd:description": {
//                                 "gco:CharacterString": {
//                                     "_text": "Guide d'utilisation de la BdOCS CIGAL v2"
//                                 }
//                             }
//                         }
//                     }, {
//                         "gmd:CI_OnlineResource": {
//                             "gmd:linkage": {
//                                 "gmd:URL": {
//                                     "_text": "https://www.cigalsace.org/metadata/CIGAL/FR-236700019-BdOCS2000-2008-20112012-CIGAL-V2/Etalab_Licence-Ouverte-Open-Licence.pdf"
//                                 }
//                             },
//                             "gmd:name": {
//                                 "gco:CharacterString": {
//                                     "_text": "Licence"
//                                 }
//                             },
//                             "gmd:description": {
//                                 "gco:CharacterString": {
//                                     "_text": "Licence ouverte Etalab"
//                                 }
//                             }
//                         }
//                     }, {
//                         "gmd:CI_OnlineResource": {
//                             "gmd:linkage": {
//                                 "gmd:URL": {
//                                     "_text": "https://www.cigalsace.org/mapfishapp/contexts/OccupationDuSol.wmc"
//                                 }
//                             },
//                             "gmd:protocol": {
//                                 "gco:CharacterString": {
//                                     "_text": "OGC:WMC"
//                                 }
//                             },
//                             "gmd:name": {
//                                 "gco:CharacterString": {
//                                     "_text": "BdOCS 2000, 2008, 2011-12 CIGAL v2 (WMC)"
//                                 }
//                             },
//                             "gmd:description": {
//                                 "gco:CharacterString": {
//                                     "_text": "Visualiser les BdOCS 2000, 2008 et 2011-12 CIGAL v2 (WMC)"
//                                 }
//                             }
//                         }
//                     }, {
//                         "gmd:CI_OnlineResource": {
//                             "gmd:linkage": {
//                                 "gmd:URL": {
//                                     "_text": "https://www.cigalsace.org/metadata/CIGAL/FR-236700019-BdOCS2000-2008-20112012-CIGAL-V2/FR-236700019-BdOCS2000-2008-20112012-CIGAL-V2.zip"
//                                 }
//                             },
//                             "gmd:protocol": {
//                                 "gco:CharacterString": {
//                                     "_text": "WWW:DOWNLOAD-1.0-http--download"
//                                 }
//                             },
//                             "gmd:name": {
//                                 "gmx:MimeFileType": {
//                                     "_attributes": {
//                                         "type": "application/zip"
//                                     },
//                                     "_text": "BdOCS 2000, 2008, 2011-12 CIGAL v2 (ZIP)"
//                                 }
//                             },
//                             "gmd:description": {
//                                 "gco:CharacterString": {
//                                     "_text": "Télécharger la BdOCS 2000, 2008, 2011-12 CIGAL v2 (SHP)"
//                                 }
//                             }
//                         }
//                     }]
//                 }
//             }
//         }
//     },
//     "gmd:dataQualityInfo": {
//         "gmd:DQ_DataQuality": {
//             "gmd:scope": {
//                 "gmd:DQ_Scope": {
//                     "gmd:level": {
//                         "gmd:MD_ScopeCode": {
//                             "_attributes": {
//                                 "codeListValue": "dataset",
//                                 "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_ScopeCode"
//                             },
//                             "_text": "dataset"
//                         }
//                     }
//                 }
//             },
//             "gmd:lineage": {
//                 "gmd:LI_Lineage": {
//                     "gmd:statement": {
//                         "gco:CharacterString": {
//                             "_text": "La BdOCS CIGAL V2 a été produite par a été produite par Photo-Interprétation Assistée par Ordinateur (PIAO) au niveau 3 et 4 de nomenclature. L'échelle de numérisation et d’interprétation est le 1:8 500 pour une exploitation recommandée à une échelle inférieure ou égale à 1/10 000.\r\nLa largeur minimale d’interprétation des objets linéaires est de 12 mètres. Les données des différentes dates sont parfaitement compatibles entre elles géométriquement et thématiquement.\r\nLes BdOCS 2000 et BdOCS 2011-12 sont issues de la mise à jour de la BdOCS 2008 V1.\r\nLes différences de codes de nomenclature entre 2 dates correspondent à des évolutions d'occupation du sol. Des contrôles qualité ont été établis pour chacune des années composant la base de donnée, des contrôles qualités en interne (CQI) effectué par SIRS, producteur de la base de données et d’autres en externe (CQE). Des matrices de confusion par département ont été effectuées par le CQE, pour la donnée 2011/2012 en interne. Le taux de fiabilité est qualifié dans l’attribut «Fiabilité» de la donnée SIG. Le taux de fiabilité global est de 85 % sur l’ensemble du territoire.\r\nDes couches d'information annexe ont également été produites concernant les mutations entre 2000 et 2008 d'une part, entre 2008 et 2011-12 d'autre part.\r\nPar ailleurs, la BdOCS au 1:10000 (niveau 3 et 4) a été généralisées pour une exploitation au 1/50000ème (niveau 2) et au 1/250000ème (niveau 1)."
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// }

export empty;