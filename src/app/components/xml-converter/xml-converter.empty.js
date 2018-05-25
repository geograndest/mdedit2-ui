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

empty.mdHierarchyLevel = {
    "gmd:hierarchyLevel": {
        "gmd:MD_ScopeCode": {
            "_attributes": {
                "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_ScopeCode",
                "codeListValue": ""
            },
            "_text": ""
        }
    }
};

// empty.mdContacts = {
//     "gmd:contact": [{
//         "gmd:CI_ResponsibleParty": {
//             "gmd:individualName": {
//                 "gco:CharacterString": {
//                     "_text": ""
//                 }
//             },
//             "gmd:organisationName": {
//                 "gco:CharacterString": {
//                     "_text": ""
//                 }
//             },
//             "gmd:positionName": {
//                 "gco:CharacterString": {
//                     "_text": ""
//                 }
//             },
//             "gmd:contactInfo": {
//                 "gmd:CI_Contact": {
//                     "gmd:phone": {
//                         "gmd:CI_Telephone": {
//                             "gmd:voice": {
//                                 "gco:CharacterString": {
//                                     "_text": ""
//                                 }
//                             }
//                         }
//                     },
//                     "gmd:address": {
//                         "gmd:CI_Address": {
//                             "gmd:deliveryPoint": {
//                                 "gco:CharacterString": {
//                                     "_text": ""
//                                 }
//                             },
//                             "gmd:city": {
//                                 "gco:CharacterString": {
//                                     "_text": ""
//                                 }
//                             },
//                             "gmd:postalCode": {
//                                 "gco:CharacterString": {
//                                     "_text": ""
//                                 }
//                             },
//                             "gmd:electronicMailAddress": {
//                                 "gco:CharacterString": {
//                                     "_text": ""
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
//                         "codeListValue": ""
//                     },
//                     "_text": ""
//                 }
//             }
//         }
//     }],

empty.mdDateStamp = {
    "gmd:dateStamp": {
        "gco:Date": {
            "_text": ""
        }
    }
};

empty.mdDateStamp = {
    "gmd:metadataStandardName": {
        "gco:CharacterString": {
            "_text": ""
        }
    }
};

empty.mdDateStamp = {
    "gmd:metadataStandardVersion": {
        "gco:CharacterString": {
            "_text": ""
        }
    }
};

// empty.mdDateStamp = {
//     "gmd:referenceSystemInfo": {
//         "gmd:MD_ReferenceSystem": {
//             "gmd:referenceSystemIdentifier": {
//                 "gmd:RS_Identifier": {
//                     "gmd:code": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     }
//                 }
//             }
//         }
//     },
// };

// empty.mdDateStamp = {
//     "gmd:identificationInfo": {
//         "gmd:MD_DataIdentification": {
//             "gmd:citation": {
//                 "gmd:CI_Citation": {
//                     "gmd:title": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     },
//                     "gmd:date": {
//                         "gmd:CI_Date": {
//                             "gmd:date": {
//                                 "gco:Date": {
//                                     "_text": ""
//                                 }
//                             },
//                             "gmd:dateType": {
//                                 "gmd:CI_DateTypeCode": {
//                                     "_attributes": {
//                                         "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_DateTypeCode",
//                                         "codeListValue": ""
//                                     },
//                                     "_text": ""
//                                 }
//                             }
//                         }
//                     },
//                     "gmd:identifier": [{
//                         "gmd:RS_Identifier": {
//                             "gmd:code": {
//                                 "gco:CharacterString": {
//                                     "_text": ""
//                                 }
//                             },
//                             "gmd:codeSpace": {
//                                 "gco:CharacterString": {
//                                     "_text": ""
//                                 }
//                             }
//                         }
//                     }]
//                 }
//             },
//             "gmd:abstract": {
//                 "gco:CharacterString": {
//                     "_text": ""
//                 }
//             },
//             "gmd:pointOfContact": [{
//                 "gmd:CI_ResponsibleParty": {
//                     "gmd:individualName": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     },
//                     "gmd:organisationName": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     },
//                     "gmd:positionName": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     },
//                     "gmd:contactInfo": {
//                         "gmd:CI_Contact": {
//                             "gmd:phone": {
//                                 "gmd:CI_Telephone": {
//                                     "gmd:voice": {
//                                         "gco:CharacterString": {
//                                             "_text": ""
//                                         }
//                                     }
//                                 }
//                             },
//                             "gmd:address": {
//                                 "gmd:CI_Address": {
//                                     "gmd:deliveryPoint": {
//                                         "gco:CharacterString": {
//                                             "_text": ""
//                                         }
//                                     },
//                                     "gmd:city": {
//                                         "gco:CharacterString": {
//                                             "_text": ""
//                                         }
//                                     },
//                                     "gmd:postalCode": {
//                                         "gco:CharacterString": {
//                                             "_text": ""
//                                         }
//                                     },
//                                     "gmd:electronicMailAddress": {
//                                         "gco:CharacterString": {
//                                             "_text": ""
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
//                                 "codeListValue": ""
//                             },
//                             "_text": ""
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
//                                 "codeListValue": ""
//                             },
//                             "_text": ""
//                         }
//                     }
//                 }
//             },
//             "gmd:graphicOverview": {
//                 "gmd:MD_BrowseGraphic": {
//                     "gmd:fileName": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     },
//                     "gmd:fileDescription": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     },
//                     "gmd:fileType": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     }
//                 }
//             },
//             "gmd:descriptiveKeywords": [{
//                 "gmd:MD_Keywords": {
//                     "gmd:keyword": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     },
//                     "gmd:type": {
//                         "gmd:MD_KeywordTypeCode": {
//                             "_attributes": {
//                                 "codeListValue": "theme",
//                                 "codeList": ""
//                             }
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_Keywords": {
//                     "gmd:keyword": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     },
//                     "gmd:thesaurusName": {
//                         "gmd:CI_Citation": {
//                             "gmd:title": {
//                                 "gco:CharacterString": {
//                                     "_text": ""
//                                 }
//                             },
//                             "gmd:date": {
//                                 "gmd:CI_Date": {
//                                     "gmd:date": {
//                                         "gco:Date": {
//                                             "_text": ""
//                                         }
//                                     },
//                                     "gmd:dateType": {
//                                         "gmd:CI_DateTypeCode": {
//                                             "_attributes": {
//                                                 "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_DateTypeCode",
//                                                 "codeListValue": ""
//                                             },
//                                             "_text": ""
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
//                             "_text": ""
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_Constraints": {
//                     "gmd:useLimitation": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_Constraints": {
//                     "gmd:useLimitation": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_LegalConstraints": {
//                     "gmd:accessConstraints": {
//                         "gmd:MD_RestrictionCode": {
//                             "_attributes": {
//                                 "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_RestrictionCode",
//                                 "codeListValue": ""
//                             },
//                             "_text": ""
//                         }
//                     },
//                     "gmd:useConstraints": {
//                         "gmd:MD_RestrictionCode": {
//                             "_attributes": {
//                                 "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_RestrictionCode",
//                                 "codeListValue": ""
//                             },
//                             "_text": ""
//                         }
//                     },
//                     "gmd:otherConstraints": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:MD_SecurityConstraints": {
//                     "gmd:classification": {
//                         "gmd:MD_ClassificationCode": {
//                             "_attributes": {
//                                 "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_ClassificationCode",
//                                 "codeListValue": ""
//                             },
//                             "_text": ""
//                         }
//                     }
//                 }
//             }],
//             "gmd:spatialRepresentationType": {
//                 "gmd:MD_SpatialRepresentationTypeCode": {
//                     "_attributes": {
//                         "codeList": "http://www.isotc211.org/2005/resources/codeList.xml#MD_SpatialRepresentationTypeCode",
//                         "codeListValue": ""
//                     },
//                     "_text": ""
//                 }
//             },
//             "gmd:spatialResolution": {
//                 "gmd:MD_Resolution": {
//                     "gmd:equivalentScale": {
//                         "gmd:MD_RepresentativeFraction": {
//                             "gmd:denominator": {
//                                 "gco:Integer": {
//                                     "_text": ""
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
//                         "codeListValue": ""
//                     },
//                     "_text": ""
//                 }
//             },
//             "gmd:characterSet": {
//                 "gmd:MD_CharacterSetCode": {
//                     "_attributes": {
//                         "codeList": "http://www.isotc211.org/2005/resources/codeList.xml#MD_CharacterSetCode",
//                         "codeListValue": ""
//                     },
//                     "_text": ""
//                 }
//             },
//             "gmd:topicCategory": {
//                 "gmd:MD_TopicCategoryCode": {
//                     "_text": ""
//                 }
//             },
//             "gmd:extent": [{
//                 "gmd:EX_Extent": {
//                     "gmd:description": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     },
//                     "gmd:geographicElement": {
//                         "gmd:EX_GeographicBoundingBox": {
//                             "gmd:westBoundLongitude": {
//                                 "gco:Decimal": {
//                                     "_text": ""
//                                 }
//                             },
//                             "gmd:eastBoundLongitude": {
//                                 "gco:Decimal": {
//                                     "_text": ""
//                                 }
//                             },
//                             "gmd:southBoundLatitude": {
//                                 "gco:Decimal": {
//                                     "_text": ""
//                                 }
//                             },
//                             "gmd:northBoundLatitude": {
//                                 "gco:Decimal": {
//                                     "_text": ""
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }, {
//                 "gmd:EX_Extent": {
//                     "gmd:description": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     },
//                     "gmd:temporalElement": {
//                         "gmd:EX_TemporalExtent": {
//                             "gmd:extent": {
//                                 "gml:TimePeriod": {
//                                     "_attributes": {
//                                         "xsi:type": "gml:TimePeriodType",
//                                         "gml:id": ""
//                                     },
//                                     "gml:beginPosition": {
//                                         "_text": ""
//                                     },
//                                     "gml:endPosition": {
//                                         "_text": ""
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
//                             "_text": ""
//                         }
//                     },
//                     "gmd:temporalElement": {
//                         "gmd:EX_TemporalExtent": {
//                             "gmd:extent": {
//                                 "gml:TimePeriod": {
//                                     "_attributes": {
//                                         "xsi:type": "gml:TimePeriodType",
//                                         "gml:id": ""
//                                     },
//                                     "gml:beginPosition": {
//                                         "_text": ""
//                                     },
//                                     "gml:endPosition": {
//                                         "_text": ""
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
//                             "_text": ""
//                         }
//                     },
//                     "gmd:temporalElement": {
//                         "gmd:EX_TemporalExtent": {
//                             "gmd:extent": {
//                                 "gml:TimePeriod": {
//                                     "_attributes": {
//                                         "xsi:type": "gml:TimePeriodType",
//                                         "gml:id": ""
//                                     },
//                                     "gml:beginPosition": {
//                                         "_text": ""
//                                     },
//                                     "gml:endPosition": {
//                                         "_text": ""
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
//                             "_text": ""
//                         }
//                     },
//                     "gmd:version": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     },
//                     "gmd:specification": {
//                         "gco:CharacterString": {
//                             "_text": ""
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
//                                     "_text": ""
//                                 }
//                             },
// "gmd:protocol": {
//     "gco:CharacterString": {
//         "_text": "OGC:WMC"
//     }
// },
//                             "gmd:name": {
//                                 "gco:CharacterString": {
//                                     "_text": ""
//                                 }
//                             },
//                             "gmd:description": {
//                                 "gco:CharacterString": {
//                                     "_text": ""
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
//                                 "codeListValue": "",
//                                 "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_ScopeCode"
//                             },
//                             "_text": ""
//                         }
//                     }
//                 }
//             },
//             "gmd:lineage": {
//                 "gmd:LI_Lineage": {
//                     "gmd:statement": {
//                         "gco:CharacterString": {
//                             "_text": ""
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// }

// export const empty;
module.exports = {
    empty
};

// {
//     "_declaration": {
//         "_attributes": {
//             "version": "1.0",
//             "encoding": "UTF-8"
//         }
//     },
//     "gmd:MD_Metadata": {
//         "_attributes": {
//             "xmlns:gmd": "http://www.isotc211.org/2005/gmd",
//             "xmlns:gmx": "http://www.isotc211.org/2005/gmx",
//             "xmlns:gco": "http://www.isotc211.org/2005/gco",
//             "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
//             "xmlns:gml": "http://www.opengis.net/gml",
//             "xmlns:xlink": "http://www.w3.org/1999/xlink",
//             "xmlns:geonet": "http://www.fao.org/geonetwork",
//             "xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://schemas.opengis.net/iso/19139/20060504/gmd/gmd.xsd"
//         },
//         "gmd:fileIdentifier": {
//             "gco:CharacterString": {
//                 "_text": "_"
//             }
//         },
//         "gmd:language": {
//             "gmd:LanguageCode": {
//                 "_attributes": {
//                     "codeList": "http://www.loc.gov/standards/iso639-2/",
//                     "codeListValue": ""
//                 }
//             }
//         },
//         "gmd:characterSet": {
//             "gmd:MD_CharacterSetCode": {
//                 "_attributes": {
//                     "codeList": "http://www.isotc211.org/2005/resources/codeList.xml#MD_CharacterSetCode",
//                     "codeListValue": ""
//                 }
//             }
//         },
//         "gmd:hierarchyLevel": {
//             "gmd:MD_ScopeCode": {
//                 "_attributes": {
//                     "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_ScopeCode",
//                     "codeListValue": ""
//                 }
//             }
//         },
//         "gmd:contact": {
//             "gmd:CI_ResponsibleParty": {
//                 "gmd:individualName": {
//                     "gco:CharacterString": {}
//                 },
//                 "gmd:organisationName": {
//                     "gco:CharacterString": {}
//                 },
//                 "gmd:positionName": {
//                     "gco:CharacterString": {}
//                 },
//                 "gmd:contactInfo": {
//                     "gmd:CI_Contact": {
//                         "gmd:phone": {
//                             "gmd:CI_Telephone": {
//                                 "gmd:voice": {
//                                     "gco:CharacterString": {}
//                                 }
//                             }
//                         },
//                         "gmd:address": {
//                             "gmd:CI_Address": {
//                                 "gmd:deliveryPoint": {
//                                     "gco:CharacterString": {
//                                         "_text": "27, rue du carrousel\r\nParc de la Cimaise"
//                                     }
//                                 },
//                                 "gmd:city": {
//                                     "gco:CharacterString": {}
//                                 },
//                                 "gmd:postalCode": {
//                                     "gco:CharacterString": {}
//                                 },
//                                 "gmd:electronicMailAddress": {
//                                     "gco:CharacterString": {}
//                                 }
//                             }
//                         }
//                     }
//                 },
//                 "gmd:role": {
//                     "gmd:CI_RoleCode": {
//                         "_attributes": {
//                             "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_RoleCode",
//                             "codeListValue": ""
//                         }
//                     }
//                 }
//             }
//         },
//         "gmd:dateStamp": {
//             "gco:Date": {}
//         },
//         "gmd:metadataStandardName": {
//             "gco:CharacterString": {}
//         },
//         "gmd:metadataStandardVersion": {
//             "gco:CharacterString": {}
//         },
//         "gmd:referenceSystemInfo": {
//             "gmd:MD_ReferenceSystem": {
//                 "gmd:referenceSystemIdentifier": {
//                     "gmd:RS_Identifier": {
//                         "gmd:code": {
//                             "gco:CharacterString": {}
//                         }
//                     }
//                 }
//             }
//         },
//         "gmd:identificationInfo": {
//             "gmd:MD_DataIdentification": {
//                 "gmd:citation": {
//                     "gmd:CI_Citation": {
//                         "gmd:title": {
//                             "gco:CharacterString": {}
//                         },
//                         "gmd:date": {
//                             "gmd:CI_Date": {
//                                 "gmd:date": {
//                                     "gco:Date": {}
//                                 },
//                                 "gmd:dateType": {
//                                     "gmd:CI_DateTypeCode": {
//                                         "_attributes": {
//                                             "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_DateTypeCode",
//                                             "codeListValue": ""
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         "gmd:identifier": {
//                             "gmd:RS_Identifier": {
//                                 "gmd:code": {
//                                     "gco:CharacterString": {}
//                                 },
//                                 "gmd:codeSpace": {
//                                     "gco:CharacterString": {}
//                                 }
//                             }
//                         }
//                     }
//                 },
//                 "gmd:abstract": {
//                     "gco:CharacterString": {}
//                 },
//                 "gmd:pointOfContact": {
//                     "gmd:CI_ResponsibleParty": {
//                         "gmd:individualName": {
//                             "gco:CharacterString": {}
//                         },
//                         "gmd:organisationName": {
//                             "gco:CharacterString": {}
//                         },
//                         "gmd:positionName": {
//                             "gco:CharacterString": {}
//                         },
//                         "gmd:contactInfo": {
//                             "gmd:CI_Contact": {
//                                 "gmd:phone": {
//                                     "gmd:CI_Telephone": {
//                                         "gmd:voice": {
//                                             "gco:CharacterString": {}
//                                         }
//                                     }
//                                 },
//                                 "gmd:address": {
//                                     "gmd:CI_Address": {
//                                         "gmd:deliveryPoint": {
//                                             "gco:CharacterString": {}
//                                         },
//                                         "gmd:city": {
//                                             "gco:CharacterString": {}
//                                         },
//                                         "gmd:postalCode": {
//                                             "gco:CharacterString": {}
//                                         },
//                                         "gmd:electronicMailAddress": {
//                                             "gco:CharacterString": {}
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         "gmd:role": {
//                             "gmd:CI_RoleCode": {
//                                 "_attributes": {
//                                     "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_RoleCode",
//                                     "codeListValue": ""
//                                 }
//                             }
//                         }
//                     }
//                 },
//                 "gmd:resourceMaintenance": {
//                     "gmd:MD_MaintenanceInformation": {
//                         "gmd:maintenanceAndUpdateFrequency": {
//                             "gmd:MD_MaintenanceFrequencyCode": {
//                                 "_attributes": {
//                                     "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode",
//                                     "codeListValue": ""
//                                 }
//                             }
//                         }
//                     }
//                 },
//                 "gmd:graphicOverview": {
//                     "gmd:MD_BrowseGraphic": {
//                         "gmd:fileName": {
//                             "gco:CharacterString": {}
//                         },
//                         "gmd:fileDescription": {
//                             "gco:CharacterString": {}
//                         },
//                         "gmd:fileType": {
//                             "gco:CharacterString": {}
//                         }
//                     }
//                 },
//                 "gmd:descriptiveKeywords": {
//                     "gmd:MD_Keywords": {
//                         "gmd:keyword": {
//                             "gco:CharacterString": {}
//                         },
//                         "gmd:thesaurusName": {
//                             "gmd:CI_Citation": {
//                                 "gmd:title": {
//                                     "gco:CharacterString": {}
//                                 },
//                                 "gmd:date": {
//                                     "gmd:CI_Date": {
//                                         "gmd:date": {
//                                             "gco:Date": {}
//                                         },
//                                         "gmd:dateType": {
//                                             "gmd:CI_DateTypeCode": {
//                                                 "_attributes": {
//                                                     "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_DateTypeCode",
//                                                     "codeListValue": ""
//                                                 }
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 },
//                 "gmd:resourceConstraints": [{
//                     "gmd:MD_Constraints": {
//                         "gmd:useLimitation": {
//                             "gco:CharacterString": {}
//                         }
//                     }
//                 }, {
//                     "gmd:MD_LegalConstraints": {
//                         "gmd:accessConstraints": {
//                             "gmd:MD_RestrictionCode": {
//                                 "_attributes": {
//                                     "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_RestrictionCode",
//                                     "codeListValue": ""
//                                 }
//                             }
//                         },
//                         "gmd:useConstraints": {
//                             "gmd:MD_RestrictionCode": {
//                                 "_attributes": {
//                                     "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_RestrictionCode",
//                                     "codeListValue": ""
//                                 }
//                             }
//                         },
//                         "gmd:otherConstraints": {
//                             "gco:CharacterString": {}
//                         }
//                     }
//                 }, {
//                     "gmd:MD_SecurityConstraints": {
//                         "gmd:classification": {
//                             "gmd:MD_ClassificationCode": {
//                                 "_attributes": {
//                                     "codeList": "http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_ClassificationCode",
//                                     "codeListValue": ""
//                                 }
//                             }
//                         }
//                     }
//                 }],
//                 "gmd:spatialRepresentationType": {
//                     "gmd:MD_SpatialRepresentationTypeCode": {
//                         "_attributes": {
//                             "codeList": "http://www.isotc211.org/2005/resources/codeList.xml#MD_SpatialRepresentationTypeCode",
//                             "codeListValue": ""
//                         }
//                     }
//                 },
//                 "gmd:spatialResolution": {
//                     "gmd:MD_Resolution": {
//                         "gmd:equivalentScale": {
//                             "gmd:MD_RepresentativeFraction": {
//                                 "gmd:denominator": {
//                                     "gco:Integer": {}
//                                 }
//                             }
//                         }
//                     }
//                 },
//                 "gmd:language": {
//                     "gmd:LanguageCode": {
//                         "_attributes": {
//                             "codeList": "http://www.loc.gov/standards/iso639-2/",
//                             "codeListValue": ""
//                         }
//                     }
//                 },
//                 "gmd:characterSet": {
//                     "gmd:MD_CharacterSetCode": {
//                         "_attributes": {
//                             "codeList": "http://www.isotc211.org/2005/resources/codeList.xml#MD_CharacterSetCode",
//                             "codeListValue": ""
//                         }
//                     }
//                 },
//                 "gmd:topicCategory": {
//                     "gmd:MD_TopicCategoryCode": {}
//                 },
//                 "gmd:extent": [{
//                     "gmd:EX_Extent": {
//                         "gmd:description": {
//                             "gco:CharacterString": {}
//                         },
//                         "gmd:geographicElement": {
//                             "gmd:EX_GeographicBoundingBox": {
//                                 "gmd:westBoundLongitude": {
//                                     "gco:Decimal": {}
//                                 },
//                                 "gmd:eastBoundLongitude": {
//                                     "gco:Decimal": {}
//                                 },
//                                 "gmd:southBoundLatitude": {
//                                     "gco:Decimal": {}
//                                 },
//                                 "gmd:northBoundLatitude": {
//                                     "gco:Decimal": {}
//                                 }
//                             }
//                         }
//                     }
//                 }, {
//                     "gmd:EX_Extent": {
//                         "gmd:description": {
//                             "gco:CharacterString": {}
//                         },
//                         "gmd:temporalElement": {
//                             "gmd:EX_TemporalExtent": {
//                                 "gmd:extent": {
//                                     "gml:TimePeriod": {
//                                         "_attributes": {
//                                             "xsi:type": "gml:TimePeriodType",
//                                             "gml:id": "TemporalId_1"
//                                         },
//                                         "gml:beginPosition": {},
//                                         "gml:endPosition": {}
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }]
//             }
//         },
//         "gmd:distributionInfo": {
//             "gmd:MD_Distribution": {
//                 "gmd:distributionFormat": {
//                     "gmd:MD_Format": {
//                         "gmd:name": {
//                             "gco:CharacterString": {}
//                         },
//                         "gmd:version": {
//                             "gco:CharacterString": {}
//                         },
//                         "gmd:specification": {
//                             "gco:CharacterString": {}
//                         }
//                     }
//                 },
//                 "gmd:transferOptions": {
//                     "gmd:MD_DigitalTransferOptions": {
//                         "gmd:onLine": {
//                             "gmd:CI_OnlineResource": {
//                                 "gmd:linkage": {
//                                     "gmd:URL": {}
//                                 },
//                                 "gmd:name": {
//                                     "gco:CharacterString": {}
//                                 },
//                                 "gmd:description": {
//                                     "gco:CharacterString": {}
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         },
//         "gmd:dataQualityInfo": {
//             "gmd:DQ_DataQuality": {
//                 "gmd:scope": {
//                     "gmd:DQ_Scope": {
//                         "gmd:level": {
//                             "gmd:MD_ScopeCode": {
//                                 "_attributes": {
//                                     "codeListValue": ""
//                                 }
//                             }
//                         }
//                     }
//                 },
//                 "gmd:lineage": {
//                     "gmd:LI_Lineage": {
//                         "gmd:statement": {
//                             "gco:CharacterString": {}
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }