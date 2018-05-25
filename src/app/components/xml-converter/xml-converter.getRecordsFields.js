export const getRecordsFields = {
    mdList: {
        name: 'mdList',
        // xpath: "csw__GetRecordsResponse[0].csw__SearchResults[0].gmd__MD_Metadata"
        xpath: "$['csw__GetRecordsResponse'][0]['csw__SearchResults'][0]['gmd__MD_Metadata'][*]"
    },
    elementSet: {
        name: 'elementSet',
        xpath: 'csw__GetRecordsResponse[0].csw__SearchResults[0]._attributes.elementSet'
    },
    nextRecord: {
        name: 'nextRecord',
        xpath: 'csw__GetRecordsResponse[0].csw__SearchResults[0]._attributes.nextRecord'
    },
    numberOfRecordsMatched: {
        name: 'numberOfRecordsMatched',
        xpath: 'csw__GetRecordsResponse[0].csw__SearchResults[0]._attributes.numberOfRecordsMatched'
    },
    numberOfRecordsReturned: {
        name: 'numberOfRecordsReturned',
        xpath: 'csw__GetRecordsResponse[0].csw__SearchResults[0]._attributes.numberOfRecordsReturned'
    },
    mdFileIdentifier: {
        name: 'mdFileIdentifier',
        xpath: 'gmd__fileIdentifier[0].gco__CharacterString[0]._text'
    },
    mdHierarchyLevel: {
        name: 'mdHierarchyLevel',
        xpath: 'gmd__hierarchyLevel[0].gmd__MD_ScopeCode[0]._attributes.codeListValue'
    },
    mdLanguage: {
        name: 'mdLanguage',
        xpath: 'gmd__language[0].gco__CharacterString[0]._text'
    },
    mdDateStamp: {
        name: 'mdDateStamp',
        xpath: 'gmd__dateStamp'
    },
    dataTitle: {
        name: 'dataTitle',
        xpath: 'gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__citation[0].gmd__CI_Citation[0].gmd__title[0].gco__CharacterString[0]._text'
    },
    srvTitle: {
        name: 'dataTitle',
        xpath: 'gmd__identificationInfo[0].srv__SV_ServiceIdentification[0].gmd__citation[0].gmd__CI_Citation[0].gmd__title[0].gco__CharacterString[0]._text'
    },
    dataIdentifiers: {
        name: 'dataIdentifiers',
        xpath: ''
    },
    dataAbstract: {
        name: 'dataAbstract',
        xpath: 'gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__abstract[0].gco__CharacterString[0]._text'
    },
    srvAbstract: {
        name: 'dataAbstract',
        xpath: 'gmd__identificationInfo[0].srv__SV_ServiceIdentification[0].gmd__abstract[0].gco__CharacterString[0]._text'
    },
    dataBrowseGraphics: {
        name: 'dataBrowseGraphics',
        xpath: 'gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__graphicOverview'
    },
    srvBrowseGraphics: {
        name: 'dataBrowseGraphics',
        xpath: 'gmd__identificationInfo[0].srv__SV_ServiceIdentification[0].gmd__graphicOverview'
    },
    browseGraphicFileName: {
        name: 'browseGraphicFileName',
        xpath: 'gmd__MD_BrowseGraphic[0].gmd__fileName[0].gco__CharacterString[0]._text'
    },
    browseGraphicFileDescription: {
        name: 'browseGraphicDescription',
        xpath: 'gmd__MD_BrowseGraphic[0].gmd__fileDescription[0].gco__CharacterString[0]._text'
    },
    browseGraphicFileType: {
        name: 'browseGraphicFileType',
        xpath: 'gmd__MD_BrowseGraphic[0].gmd__fileType[0].gco__CharacterString[0]._text'
    },
    dataTopicCategories: {
        name: 'dataTopicCategories',
        xpath: 'gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__topicCategory[*]'
    },
    srvTopicCategories: {
        name: 'dataTopicCategories',
        xpath: 'gmd__identificationInfo[0].srv__SV_ServiceIdentification[0].gmd__topicCategory[*]'
    },
    topicCategory: {
        name: 'topicCategory',
        xpath: 'gmd__MD_TopicCategoryCode[0]._text[0]'
    },
    dataKeywords: {
        name: 'dataKeywords',
        xpath: 'gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__descriptiveKeywords[*]'
    },
    srvKeywords: {
        name: 'srvKeywords',
        xpath: 'gmd__identificationInfo[0].srv__SV_ServiceIdentification[0].gmd__descriptiveKeywords[*]'
    },
    // dataKeyword
    keywords: {
        name: 'keyword',
        xpath: 'gmd__MD_Keywords[0].gmd__keyword[*].gco__CharacterString[0]._text[0]'
    },
    keyword: {
        name: 'keyword',
        xpath: 'gco__CharacterString[0]._text[0]'
    },
    keywordType: {
        name: 'keywordType',
        xpath: 'gmd__MD_Keywords[0].gmd__type[0].gmd__MD_KeywordTypeCode[0]._attributes.codeListValue'
    },
    thesaurusName: {
        name: 'thesaurusName',
        xpath: 'gmd__MD_Keywords[0].gmd__thesaurusName[0].gmd__CI_Citation[0].gmd__title[0].gco__CharacterString[0]._text[0]'
    },
    thesaurusDates: {
        name: 'thesaurusDates',
        xpath: 'gmd__MD_Keywords[0].gmd__thesaurusName[0].gmd__CI_Citation[0].gmd__date'
    },
    dataLinkages: {
        name: 'dataLinkages',
        xpath: 'gmd__distributionInfo[0].gmd__MD_Distribution[0].gmd__transferOptions[0].gmd__MD_DigitalTransferOptions[0].gmd__onLine[*]'
    },
    name: {
        name: 'name',
        xpath: 'gmd__CI_OnlineResource[0].gmd__name[0].gco__CharacterString[0]._text'
    },
    description: {
        name: 'description',
        xpath: 'gmd__CI_OnlineResource[0].gmd__description[0].gco__CharacterString[0]._text'
    },
    url: {
        name: 'url',
        xpath: 'gmd__CI_OnlineResource[0].gmd__linkage[0].gmd__URL[0]._text'
    },
    protocol: {
        name: 'protocol',
        xpath: 'gmd__CI_OnlineResource[0].gmd__protocol[0].gco__CharacterString[0]._text[*]'
    },

    dataMaintenanceFrequency: {
        name: 'dataMaintenanceFrequency',
        xpath: ''
    },
    dataTemporalExtents: {
        name: 'dataTemporalExtents',
        xpath: '',
        children: {
            dataTemporalExtentBegin: {
                name: 'dataTemporalExtentBegin',
                xpath: ''
            },
            dataTemporalExtentEnd: {
                name: 'dataTemporalExtentEnd',
                xpath: ''
            },
            dataExtentName: {
                name: 'dataExtentName',
                xpath: '',
            }
        }
    },
    dataLanguages: {
        name: 'dataLanguages',
        xpath: 'gmd__LanguageCode[0]._attributes.codeListValue'
    },
    dataPointOfContacts: {
        name: 'dataPointOfContacts',
        xpath: '',
        children: {
            individualName: {
                name: 'individualName',
                xpath: ''
            },
            positionName: {
                name: 'positionName',
                xpath: ''
            },
            organisationName: {
                name: 'organisationName',
                xpath: ''
            },
            phoneVoice: {
                name: 'phoneVoice',
                xpath: ''
            },
            email: {
                name: 'email',
                xpath: ''
            },
            deliveryPoint: {
                name: 'deliveryPoints',
                xpath: ''
            },
            postalCode: {
                name: 'postalCode',
                xpath: ''
            },
            city: {
                name: 'city',
                xpath: ''
            },
            logo: {
                name: 'logo',
                xpath: ''
            },
            logoUrl: {
                name: 'logoUrl',
                xpath: ''
            },
            logoDescription: {
                name: 'logoDescription',
                xpath: ''
            },
            role: {
                name: 'data_contact_role',
                xpath: '',
            }
        }
    },
    dataGeographicExtents: {
        name: 'dataGeographicExtents',
        xpath: '',
        children: {
            dataExtentName: {
                name: 'dataExtentName',
                xpath: ''
            },
            dataGeographicExtentWestBound: {
                name: 'dataGeographicExtentWestBound',
                xpath: ''
            },
            dataGeographicExtentEastBound: {
                name: 'dataGeographicExtentEastBound',
                xpath: ''
            },
            dataGeographicExtentSouthBound: {
                name: 'dataGeographicExtentSouthBound',
                xpath: ''
            },
            dataGeographicExtentNorthBound: {
                name: 'dataGeographicExtentNorthBound',
                xpath: '',
            }
        }
    },
    dataReferenceSystems: {
        name: 'dataReferenceSystems',
        xpath: ''
    },
    // TODO
    code: {
        name: 'code',
        xpath: ''
    },
    // TODO
    codeSpace: {
        name: 'codeSpace',
        xpath: ''
    },
    dataPresentationForm: {
        name: 'dataPresentationForm',
        xpath: ''
    },
    dataSpatialRepresentationType: {
        name: 'dataSpatialRepresentationType',
        xpath: ''
    },
    dataScaleDenominator: {
        name: 'dataScaleDenominator',
        xpath: ''
    },
    dataScaleDistance: {
        name: 'dataScaleDistance',
        xpath: ''
    },
    _dataDqLevel: {
        name: '_dataDqLevel',
        xpath: ''
    },
    dataLiStatement: {
        name: 'dataLiStatement',
        xpath: ''
    },
    dataCharacterSet: {
        name: 'dataCharacterSet',
        xpath: ''
    },
    dataDistributionFormats: {
        name: 'dataDistributionFormats',
        xpath: '',
        children: {
            formatName: {
                name: 'formatName',
                xpath: ''
            },
            formatVersion: {
                name: 'formatVersion',
                xpath: ''
            },
            formatSpecification: {
                name: 'formatSpecification',
                xpath: '',
            }
        }
    },
    dataUseLimitations: {
        name: 'dataUseLimitations',
        xpath: '',
        children: {
            name: {
                name: 'dataUseLimitation',
                xpath: '',
            }
        }
    },
    dataLegalUseLimitations: {
        name: 'dataLegalUseLimitations',
        xpath: '',
        _children: {
            name: {
                name: '',
                xpath: '',
            }
        }
    },
    dataLegalUseConstraints: {
        name: 'dataLegalUseConstraints',
        xpath: '',
        _children: {
            name: {
                name: '',
                xpath: '',
            }
        }
    },
    dataLegalAccessConstraints: {
        name: 'dataLegalAccessConstraints',
        xpath: '',
        _children: {
            name: {
                name: 'name',
                xpath: '',
            }
        }
    },
    dataLegalAccessInspireConstraints: {
        name: 'dataLegalAccessInspireConstraints',
        xpath: '',
        _children: {
            name: {
                name: 'name',
                xpath: '',
            }
        }
    },
    _dataLegalAccessOtherConstraints: {
        name: '_dataLegalAccessOtherConstraints',
        xpath: '',
        _children: {
            name: {
                name: 'name',
                xpath: '',
            }
        }
    },
    dataSecurityUseLimitations: {
        name: 'dataSecurityUseLimitations',
        xpath: '',
        children: {
            name: {
                name: '',
                xpath: '',
            }
        }
    },
    dataSecurityClassification: {
        name: 'dataSecurityClassification',
        xpath: ''
    },
    dataDqInspireConformities: {
        name: '',
        xpath: '',
        children: {
            specification: {
                name: '',
                xpath: ''
            },
            explaination: {
                name: '',
                xpath: ''
            },
            pass: {
                name: '',
                xpath: ''
            },
            dates: {
                name: '',
                xpath: '',
                children: {
                    type: {
                        name: '',
                        xpath: ''
                    },
                    date: {
                        name: '',
                        xpath: '',
                    }
                }
            }
        }
    }
}