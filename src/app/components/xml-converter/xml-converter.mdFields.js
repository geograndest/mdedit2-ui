export const mdFields = {
    mdFileIdentifier: {
        name: 'mdFileIdentifier',
        // xpaths: { value: 'gmd__MD_Metadata[0].gmd__fileIdentifier[0].gco__CharacterString[0]._text[0]'},
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__fileIdentifier[0].gco__CharacterString[0]._text[0]'
        }
    },
    mdLanguage: {
        name: 'mdLanguage',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__language[0].gmd__LanguageCode[0]._text[0]',
            code: 'gmd__MD_Metadata[0].gmd__language[0].gmd__LanguageCode[0]._attributes.codeListValue'
                // paths: [
                //     'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__language[*]'
                // ],
                // value: 'gmd__LanguageCode[0]._attributes.codeListValue'
        }

    },
    mdCharacterSet: {
        name: 'mdCharacterSet',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__characterSet[0].gmd__MD_CharacterSetCode[0]._text[0]',
            code: 'gmd__MD_Metadata[0].gmd__characterSet[0].gmd__MD_CharacterSetCode[0]._attributes.codeListValue'
        }
    },
    mdHierarchyLevel: {
        name: 'mdHierarchyLevel',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__hierarchyLevel[0].gmd__MD_ScopeCode[0]._text[0]',
            code: 'gmd__MD_Metadata[0].gmd__hierarchyLevel[0].gmd__MD_ScopeCode[0]._attributes.codeListValue'
        }
    },
    // individualName: {
    //     name: 'individualName',
    //     xpaths: { value: 'gmd__CI_ResponsibleParty[0].gmd__individualName[0].gco__CharacterString[0]._text[0]'},
    //     
    // },
    mdContacts: {
        name: 'mdContacts',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__contact[*]'
        }
    },

    ////////////////////////////////////////////////
    // CONTACT - start
    individualName: {
        name: 'individualName',
        xpaths: {
            value: 'gmd__CI_ResponsibleParty[0].gmd__individualName[0].gco__CharacterString[0]._text[0]'
        }
    },
    positionName: {
        name: 'positionName',
        xpaths: {
            value: 'gmd__CI_ResponsibleParty[0].gmd__positionName[0].gco__CharacterString[0]._text[0]'
        }
    },
    organisationName: {
        name: 'organisationName',
        xpaths: {
            value: 'gmd__CI_ResponsibleParty[0].gmd__organisationName[0].gco__CharacterString[0]._text[0]'
        }
    },
    phoneVoices: {
        name: 'phoneVoices',
        xpaths: {
            paths: ['gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__phone[0].gmd__CI_Telephone[0].gmd__voice[*]'],
            value: 'gco__CharacterString[0]._text[0]'
        }
    },
    // _phoneVoice: {
    //     name: 'phoneVoice',
    //     xpaths: {
    //         value: 'gco__CharacterString[0]._text[0]'
    //     },
    // },
    emails: {
        name: 'emails',
        xpaths: {
            paths: ['gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__address[0].gmd__CI_Address[0].gmd__electronicMailAddress[*]'],
            value: 'gco__CharacterString[0]._text[0]'
        }
    },
    // _email: {
    //     name: 'email',
    //     xpaths: {
    //         value: 'gco__CharacterString[0]._text[0]'
    //     },
    // },
    deliveryPoints: {
        name: 'deliveryPoints',
        xpaths: {
            paths: [
                'gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__address[0].gmd__CI_Address[0].gmd__deliveryPoint[*]'
            ],
            value: 'gco__CharacterString[0]._text[0]'
        }
    },
    deliveryPoint: {
        name: 'deliveryPoint',
        xpaths: {
            value: 'gco__CharacterString[0]._text[0]'
        },
    },
    postalCode: {
        name: 'postalCode',
        xpaths: {
            value: 'gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__address[0].gmd__CI_Address[0].gmd__postalCode[0].gco__CharacterString[0]._text[0]'
        }
    },
    city: {
        name: 'city',
        xpaths: {
            value: 'gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__address[0].gmd__CI_Address[0].gmd__city[0].gco__CharacterString[0]._text[0]'
        }
    },
    country: {
        name: 'country',
        xpaths: {
            value: 'gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__address[0].gmd__CI_Address[0].gmd__country[0].gco__CharacterString[0]._text[0]'
        }
    },
    logo: {
        name: 'md_contact_logo',
        xpaths: {
            value: 'gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__contactInstructions[0].gmx__FileName[0]._attributes.src'
        }
    },
    logoUrl: {
        name: 'logoUrl',
        xpaths: {
            value: 'gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__contactInstructions[0].gmx__FileName[0]._attributes.src'
        }
    },
    logoDescription: {
        name: 'logoDescription',
        xpaths: {
            value: 'gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__contactInstructions[0].gmx__FileName[0]._text[0]'
        }
    },
    role: {
        name: 'role',
        xpaths: {
            value: 'gmd__CI_ResponsibleParty[0].gmd__role[0].gmd__CI_RoleCode[0]._text[0]',
            code: 'gmd__CI_ResponsibleParty[0].gmd__role[0].gmd__CI_RoleCode[0]._attributes.codeListValue'
        }
    },
    // CONTACT - end

    mdDateStamp: {
        name: 'mdDateStamp',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__dateStamp[0].gco__Date[0]._text[0]'
        }
    },
    mdStandardName: {
        name: 'mdStandardName',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__metadataStandardName[0].gco__CharacterString[0]._text[0]'
        }
    },
    mdStandardVersion: {
        name: 'mdStandardVersion',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__metadataStandardVersion[0].gco__CharacterString[0]._text[0]'
        }
    },
    dataTitle: {
        name: 'dataTitle',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__citation[0].gmd__CI_Citation[0].gmd__title[0].gco__CharacterString[0]._text[0]'
        }
    },
    dataDates: {
        name: 'dataDates',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__citation[0].gmd__CI_Citation[0].gmd__date[*]'
        },
    },
    dateType: {
        name: 'type',
        xpaths: {
            value: 'gmd__CI_Date[0].gmd__dateType[0].gmd__CI_DateTypeCode[0]._attributes.codeListValue'
        }
    },
    dateTime: {
        name: 'time',
        xpaths: {
            value: 'gmd__CI_Date[0].gmd__date[0].gco__DateTime[0]._text[0]'
        }
    },
    date: {
        name: 'date',
        xpaths: {
            value: 'gmd__CI_Date[0].gmd__date[0].gco__Date[0]._text[0]'
        }
    },
    _dateCreation: {
        name: 'dateCreation',
        xpaths: {
            value: 'gmd__CI_Date[0].gmd__date[0].gco__Date[0]._text[0]'
        }
    },
    _dataDateRevision: {
        name: 'dataDateRevision',
        xpaths: {
            value: ''
        }
    },
    _dataDatePublication: {
        name: 'dataDatePublication',
        xpaths: {
            value: ''
        }
    },
    _data_dates: {
        name: 'md_dates',
        xpaths: {
            value: 'gmd__CI_Date[0].gmd__date[0].gco__Date[0]._text[0]'
        },
        children: {
            type: {
                name: 'type',
                xpaths: {
                    value: 'gmd__CI_Date[0].gmd__dateType[0].gmd__CI_DateTypeCode[0]._attributes.codeListValue'
                }
            },
            time: {
                name: 'time',
                xpaths: {
                    value: 'gmd__CI_Date[0].gmd__date[0].gco__DateTime[0]._text[0]'
                }
            },
            date: {
                name: 'date',
                xpaths: {
                    value: 'gmd__CI_Date[0].gmd__date[0].gco__Date[0]._text[0]'
                }
            }
        }
    },
    dataIdentifiers: {
        name: 'dataIdentifiers',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__citation[0].gmd__CI_Citation[0].gmd__identifier[*]'
        }
    },
    code: {
        name: 'code',
        xpaths: {
            value: 'gmd__RS_Identifier[0].gmd__code[0].gco__CharacterString[0]._text[0]'
        }
    },
    codeSpace: {
        name: 'codeSpace',
        xpaths: {
            value: 'gmd__RS_Identifier[0].gmd__codeSpace[0].gco__CharacterString[0]._text[0]'
        }
    },
    mdCode: {
        name: 'code',
        xpaths: {
            value: 'gmd__MD_Identifier[0].gmd__code[0].gco__CharacterString[0]._text[0]'
        }
    },
    dataAbstract: {
        name: 'dataAbstract',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__abstract[0].gco__CharacterString[0]._text[0]'
        }
    },
    dataBrowseGraphics: {
        name: 'dataBrowseGraphics',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__graphicOverview[*]'
        }
    },
    fileName: {
        name: 'fileName',
        xpaths: {
            value: 'gmd__MD_BrowseGraphic[0].gmd__fileName[0].gco__CharacterString[0]._text[0]'
        }
    },
    fileDescription: {
        name: 'fileDescription',
        xpaths: {
            value: 'gmd__MD_BrowseGraphic[0].gmd__fileDescription[0].gco__CharacterString[0]._text[0]'
        }
    },
    fileType: {
        name: 'fileType',
        xpaths: {
            value: 'gmd__MD_BrowseGraphic[0].gmd__fileType[0].gco__CharacterString[0]._text[0]'
        }
    },
    // image: {
    //     name: 'image',
    //     xpaths: {
    //         value: ''
    //     }
    // },
    dataMaintenanceFrequency: {
        name: 'dataMaintenanceFrequency',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__resourceMaintenance[0].gmd__MD_MaintenanceInformation[0].gmd__maintenanceAndUpdateFrequency[0].gmd__MD_MaintenanceFrequencyCode[0]._attributes.codeListValue'
        }
    },
    dataLanguages: {
        name: 'dataLanguages',
        xpaths: {
            paths: [
                'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__language[*]'
            ],
            value: 'gmd__LanguageCode[0]._attributes.codeListValue'
        }
    },
    dataTopicCategories: {
        name: 'dataTopicCategories',
        xpaths: {
            paths: [
                'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__topicCategory[*]'
            ],
            value: 'gmd__MD_TopicCategoryCode[0]._text[0]'
        }
    },
    // dataTopicCategories: {
    //     name: 'dataTopicCategories',
    //     xpaths: { value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__topicCategory[*].gmd__MD_TopicCategoryCode[0]._text[0]'}
    // },
    // topicCategory: {
    //     name: 'topicCategory',
    //     xpaths: { value: 'gmd__MD_TopicCategoryCode[0]._text'}
    // },
    dataInspireKeywords: {
        name: 'dataInspireKeywords',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__descriptiveKeywords[*]'
        }
    },
    dataKeywordsList: {
        name: 'dataKeywordsList',
        xpaths: {
            value: ''
        }
    },
    dataKeywords: {
        name: 'dataKeywords',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__descriptiveKeywords[*]'
        }
    },
    keyword: {
        name: 'keyword',
        xpaths: {
            // value: 'gco:CharacterString[0]._text[0]'
            paths: [
                'gmd__MD_Keywords[0].gmd__keyword[*]'
            ],
            value: 'gco__CharacterString[0]._text[0]'
        }
    },
    keywordType: {
        name: 'keywordType',
        xpaths: {
            value: 'gmd__MD_Keywords[0].gmd__type[0].gmd__MD_KeywordTypeCode[0]._attributes.codeListValue'
        }
    },
    thesaurusName: {
        name: 'thesaurusName',
        xpaths: {
            value: 'gmd__MD_Keywords[0].gmd__thesaurusName[0].gmd__CI_Citation[0].gmd__title[0].gco__CharacterString[0]._text[0]'
        }
    },
    thesaurusDatePublication: {
        name: 'thesaurusDatePublication',
        xpaths: {
            paths: [
                'gmd__MD_Keywords[0].gmd__thesaurusName[0].gmd__CI_Citation[0].gmd__date[*]'
            ],
            value: 'gmd__CI_Date[0].gmd__date[0].gco__Date[0]._text[0]'
        }
    },
    thesaurusDates: {
        name: 'thesaurusDates',
        xpaths: {
            value: 'gmd__MD_Keywords[0].gmd__thesaurusName[0].gmd__CI_Citation[0].gmd__date'
        }
    },
    thesaurusDates: {
        name: 'thesaurusDates',
        xpaths: {
            value: 'gmd__MD_Keywords[0].gmd__thesaurusName[0].gmd__CI_Citation[0].gmd__date'
        },
        children: {
            dateType: {
                name: 'dateType',
                xpaths: {
                    value: ''
                }
            },
            date: {
                name: 'date',
                xpaths: {
                    value: ''
                }
            }
        }
    },
    dataInspireKeywords: {
        name: 'dataInspireKeywords',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__descriptiveKeywords[*]'
        }
    },
    dataPointOfContacts: {
        name: 'dataPointOfContacts',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__pointOfContact[*]'
        }
    },

    dataExtents: {
        name: 'dataExtents',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__extent[*]'
        }
    },
    extentName: {
        name: 'extentName',
        xpaths: {
            value: 'gmd__EX_Extent[0].gmd__description[0].gco__CharacterString[0]._text[0]'
        }
    },
    geographicExtent: {
        name: 'geographicExtent',
        xpaths: {
            value: 'gmd__EX_Extent[0].gmd__geographicElement[*]'
        }
    },
    geographicExtentWestBound: {
        name: 'geographicExtentWestBound',
        xpaths: {
            value: 'gmd__EX_Extent[0].gmd__geographicElement[0].gmd__EX_GeographicBoundingBox[0].gmd__westBoundLongitude[0].gco__Decimal[0]._text[0]'
        }
    },
    geographicExtentEastBound: {
        name: 'dataGeographicExtentEastBound',
        xpaths: {
            value: 'gmd__EX_Extent[0].gmd__geographicElement[0].gmd__EX_GeographicBoundingBox[0].gmd__eastBoundLongitude[0].gco__Decimal[0]._text[0]'
        }
    },
    geographicExtentSouthBound: {
        name: 'dataGeographicExtentSouthBound',
        xpaths: {
            value: 'gmd__EX_Extent[0].gmd__geographicElement[0].gmd__EX_GeographicBoundingBox[0].gmd__southBoundLatitude[0].gco__Decimal[0]._text[0]'
        }
    },
    geographicExtentNorthBound: {
        name: 'dataGeographicExtentNorthBound',
        xpaths: {
            value: 'gmd__EX_Extent[0].gmd__geographicElement[0].gmd__EX_GeographicBoundingBox[0].gmd__northBoundLatitude[0].gco__Decimal[0]._text[0]'
        }
    },

    temporalExtent: {
        name: 'temporalExtent',
        xpaths: {
            value: 'gmd__EX_Extent[0].gmd__temporalElement[*]'
        },
    },
    temporalExtentBegin: {
        name: 'temporalExtentBegin',
        xpaths: {
            value: 'gmd__EX_Extent[0].gmd__temporalElement[0].gmd__EX_TemporalExtent[0].gmd__extent[0].gml__TimePeriod[0].gml__beginPosition[0]._text[0]'
        }
    },
    temporalExtentEnd: {
        name: 'temporalExtentEnd',
        xpaths: {
            value: 'gmd__EX_Extent[0].gmd__temporalElement[0].gmd__EX_TemporalExtent[0].gmd__extent[0].gml__TimePeriod[0].gml__endPosition[0]._text[0]'
        }
    },

    dataReferenceSystems: {
        name: 'dataReferenceSystems',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__referenceSystemInfo[*]'
        }
    },
    referenceSystemCode: {
        name: 'referenceSystemCode',
        xpaths: {
            value: 'gmd__MD_ReferenceSystem[0].gmd__referenceSystemIdentifier[0].gmd__RS_Identifier[0].gmd__code[0].gco__CharacterString[0]._text[0]'
        }
    },
    referenceSystemCodeSpace: {
        name: 'referenceSystemCodeSpace',
        xpaths: {
            value: 'gmd__MD_ReferenceSystem[0].gmd__referenceSystemIdentifier[0].gmd__RS_Identifier[0].gmd__codeSpace[0].gco__CharacterString[0]._text[0]'
        }
    },
    dataPresentationForm: {
        name: 'dataPresentationForm',
        xpaths: {
            value: ''
        }
    },
    dataSpatialRepresentationType: {
        name: 'dataSpatialRepresentationType',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__spatialRepresentationType[0].gmd__MD_SpatialRepresentationTypeCode[0]._attributes.codeListValue'
        }
    },
    dataScaleDenominator: {
        name: 'dataScaleDenominator',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__spatialResolution[0].gmd__MD_Resolution[0].gmd__equivalentScale[0].gmd__MD_RepresentativeFraction[0].gmd__denominator[0].gco__Integer[0]._text[0]'
        }
    },
    dataScaleDistance: {
        name: 'dataScaleDistance',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__spatialResolution[0].gmd__MD_Resolution[0].gmd__distance[0].gco__Distance[0]._text[0]'
        }
    },
    _dataDqLevel: {
        name: '_dataDqLevel',
        xpaths: {
            value: ''
        }
    },
    dataLiStatement: {
        name: 'dataLiStatement',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__dataQualityInfo[0].gmd__DQ_DataQuality[0].gmd__lineage[0].gmd__LI_Lineage[0].gmd__statement[0].gco__CharacterString[0]._text[0]'
        }
    },
    dataCharacterSet: {
        name: 'dataCharacterSet',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__characterSet[0].gmd__MD_CharacterSetCode[0]._attributes.codeListValue'
        }
    },

    dataDistributionFormats: {
        name: 'dataDistributionFormats',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__distributionInfo[0].gmd__MD_Distribution[0].gmd__distributionFormat[*]'
        }
    },
    formatName: {
        name: 'formatName',
        xpaths: {
            value: 'gmd__MD_Format[0].gmd__name[0].gco__CharacterString[0]._text[0]'
        }
    },
    formatVersion: {
        name: 'formatVersion',
        xpaths: {
            value: 'gmd__MD_Format[0].gmd__version[0].gco__CharacterString[0]._text[0]'
        }
    },
    formatSpecification: {
        name: 'formatSpecification',
        xpaths: {
            value: 'gmd__MD_Format[0].gmd__specification[0].gco__CharacterString[0]._text[0]'
        }
    },
    dataUseLimitations: {
        name: 'dataUseLimitations',
        xpaths: {
            paths: [
                'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__resourceConstraints[*]',
                'gmd__MD_Constraints[0].gmd__useLimitation[*]'
            ],
            value: 'gco__CharacterString[0]._text[0]'
        },
        // children: {
        //     name: {
        //         name: 'dataUseLimitation',
        //         xpaths: {
        //             value: ''
        //         }
        //     }
        // }
    },
    dataLegalUseLimitations: {
        name: 'dataLegalUseLimitations',
        xpaths: {
            paths: [
                'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__resourceConstraints[*]',
                'gmd__MD_LegalConstraints[0].gmd__useLimitation[*]'
            ],
            value: 'gco__CharacterString[0]._text[0]'
        },
        // _children: {
        //     name: {
        //         name: '',
        //         xpaths: {
        //             value: ''
        //         }
        //     }
        // }
    },
    dataLegalUseConstraints: {
        name: 'dataLegalUseConstraints',
        xpaths: {
            paths: [
                'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__resourceConstraints[*]',
                'gmd__MD_LegalConstraints[0].gmd__useConstraints[*]'
            ],
            value: 'gmd__MD_RestrictionCode[0]._attributes.codeListValue'
        },
        // _children: {
        //     name: {
        //         name: '',
        //         xpaths: {
        //             value: ''
        //         }
        //     }
        // }
    },
    dataLegalAccessConstraints: {
        name: 'dataLegalAccessConstraints',
        xpaths: {
            paths: [
                'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__resourceConstraints[*]',
                'gmd__MD_LegalConstraints[0].gmd__accessConstraints[*]'

            ],
            // value: 'gmd__MD_LegalConstraints[0].gmd__accessConstraints[*]'
            value: 'gmd__MD_RestrictionCode[0]._text[0]',
            code: 'gmd__MD_RestrictionCode[0]._attributes.codeListValue'
        },
        // _children: {
        //     name: {
        //         name: 'name',
        //         xpaths: {
        //             value: ''
        //         }
        //     }
        // }
    },
    dataLegalAccessInspireConstraints: {
        name: 'dataLegalAccessInspireConstraints',
        xpaths: {
            paths: [
                'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__resourceConstraints[*]',
                'gmd__MD_LegalConstraints[0].gmd__otherConstraints[*]'

            ],
            // value: 'gmd__MD_LegalConstraints[0].gmd__accessConstraints[*]'
            value: 'gco__CharacterString[0]._text[0]',
            _code: 'gmd__MD_RestrictionCode[0]._attributes.codeListValue'
        },
        // _children: {
        //     name: {
        //         name: 'name',
        //         xpaths: {
        //             value: ''
        //         }
        //     }
        // }
    },
    dataLegalOtherConstraints: {
        name: 'dataLegalOtherConstraints',
        xpaths: {
            paths: [
                'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__resourceConstraints[*]',
                'gmd__MD_LegalConstraints[0].gmd__otherConstraints[*]'

            ],
            // value: 'gmd__MD_LegalConstraints[0].gmd__accessConstraints[*]'
            value: 'gco__CharacterString[0]._text[0]',
            _code: 'gmd__MD_RestrictionCode[0]._attributes.codeListValue'
        },
        _children: {
            name: {
                name: 'name',
                xpaths: {
                    value: ''
                }
            }
        }
    },
    dataSecurityUseLimitations: {
        name: 'dataSecurityUseLimitations',
        xpaths: {
            value: ''
        },
        // children: {
        //     name: {
        //         name: '',
        //         xpaths: {
        //             value: ''
        //         }
        //     }
        // }
    },
    dataSecurityClassification: {
        name: 'dataSecurityClassification',
        xpaths: {
            paths: [
                'gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__resourceConstraints[*]',
                'gmd__MD_SecurityConstraints[0].gmd__classification[*]'
            ],
            value: 'gmd__MD_ClassificationCode[0]._attributes.codeListValue'
        }
    },
    dataLinkages: {
        name: 'dataLinkages',
        xpaths: {
            value: 'gmd__MD_Metadata[0].gmd__distributionInfo[0].gmd__MD_Distribution[0].gmd__transferOptions[0].gmd__MD_DigitalTransferOptions[0].gmd__onLine[*]'
        }
    },
    linkageName: {
        name: 'linkageName',
        xpaths: {
            value: 'gmd__CI_OnlineResource[0].gmd__name[0].gco__CharacterString[0]._text[0]'
        }
    },
    linkageDescription: {
        name: 'linkageDescription',
        xpaths: {
            value: 'gmd__CI_OnlineResource[0].gmd__description[0].gco__CharacterString[0]._text[0]'
        }
    },
    linkageUrl: {
        name: 'linkageUrl',
        xpaths: {
            value: 'gmd__CI_OnlineResource[0].gmd__linkage[0].gmd__URL[0]._text[0]'
        }
    },
    linkageProtocol: {
        name: 'linkageProtocol',
        xpaths: {
            value: 'gmd__CI_OnlineResource[0].gmd__protocol[0].gco__CharacterString[0]._text[0]'
        }
    },
    dataDqInspireConformities: {
        name: '',
        xpaths: {
            value: ''
        },
        children: {
            specification: {
                name: '',
                xpaths: {
                    value: ''
                }
            },
            explaination: {
                name: '',
                xpaths: {
                    value: ''
                }
            },
            pass: {
                name: '',
                xpaths: {
                    value: ''
                }
            },
            dates: {
                name: '',
                xpaths: {
                    value: ''
                },
                children: {
                    type: {
                        name: '',
                        xpaths: {
                            value: ''
                        }
                    },
                    date: {
                        name: '',
                        xpaths: {
                            value: ''
                        }
                    }
                }
            }
        }
    }
}