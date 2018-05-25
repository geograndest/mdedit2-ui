import {
    empty
} from './xml-converter.empty'

export const getRecordFields = {
    mdFileIdentifier: {
        name: 'mdFileIdentifier',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__fileIdentifier[0].gco__CharacterString[0]._text[0]'
    },
    mdLanguage: {
        name: 'mdLanguage',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__language[0].gmd__LanguageCode[0]._attributes.codeListValue',
        empty: empty.mdLanguage
    },
    mdCharacterSet: {
        name: 'mdCharacterSet',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__characterSet[0].gmd__MD_CharacterSetCode[0]._attributes.codeListValue',
        empty: empty.mdCharacterSet
    },
    mdHierarchyLevel: {
        name: 'mdHierarchyLevel',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__hierarchyLevel[0].gmd__MD_ScopeCode[0]._attributes.codeListValue',
        empty: empty.mdHierarchyLevel
    },
    mdContacts: {
        name: 'mdContacts',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__contact[*]',
        empty: empty.mdContacts
    },
    ////////////////////////////////////////////////
    // CONTACT
    individualName: {
        name: 'individualName',
        xpath: 'gmd__CI_ResponsibleParty[0].gmd__individualName[0].gco__CharacterString[0]._text[0]'
    },
    positionName: {
        name: 'positionName',
        xpath: 'gmd__CI_ResponsibleParty[0].gmd__positionName[0].gco__CharacterString[0]._text[0]'
    },
    organisationName: {
        name: 'organisationName',
        xpath: 'gmd__CI_ResponsibleParty[0].gmd__organisationName[0].gco__CharacterString[0]._text[0]'
    },
    phoneVoices: {
        name: 'phoneVoices',
        xpath: 'gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__phone[0].gmd__CI_Telephone[0].gmd__voice[*]'
    },
    phoneVoice: {
        name: 'phoneVoice',
        xpath: 'gco__CharacterString[0]._text[0]'
    },
    emails: {
        name: 'emails',
        xpath: 'gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__address[0].gmd__CI_Address[0].gmd__electronicMailAddress[*]'
    },
    email: {
        name: 'email',
        xpath: 'gco__CharacterString[0]._text[0]'
    },
    deliveryPoints: {
        name: 'deliveryPoints',
        xpath: 'gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__address[0].gmd__CI_Address[0].gmd__deliveryPoint[*]'
    },
    deliveryPoint: {
        name: 'deliveryPoint',
        xpath: 'gco__CharacterString[0]._text[0]'
    },
    postalCode: {
        name: 'postalCode',
        xpath: 'gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__address[0].gmd__CI_Address[0].gmd__postalCode[0].gco__CharacterString[0]._text[0]'
    },
    city: {
        name: 'city',
        xpath: 'gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__address[0].gmd__CI_Address[0].gmd__city[0].gco__CharacterString[0]._text[0]'
    },
    country: {
        name: 'country',
        xpath: 'gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__address[0].gmd__CI_Address[0].gmd__country[0].gco__CharacterString[0]._text[0]'
    },
    logoUrl: {
        name: 'logoUrl',
        xpath: 'gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__contactInstructions[0].gmx__FileName[0]._attributes.src'
    },
    logoDescription: {
        name: 'logoDescription',
        xpath: 'gmd__CI_ResponsibleParty[0].gmd__contactInfo[0].gmd__CI_Contact[0].gmd__contactInstructions[0].gmx__FileName[0]._text[0]'
    },
    role: {
        name: 'role',
        xpath: [
            'gmd__CI_ResponsibleParty[0].gmd__role[0].gmd__CI_RoleCode[0]._attributes.codeListValue',
            'gmd__CI_ResponsibleParty[0].gmd__role[0].gmd__CI_RoleCode[0]._text[0]',
        ]
    },
    // CONTACT
    ////////////////////////////////////////////////
    
    mdDateStamp: {
        name: 'mdDateStamp',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__dateStamp[0].gco__Date[0]._text[0]'
    },
    mdStandardName: {
        name: 'mdStandardName',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__metadataStandardName[0].gco__CharacterString[0]._text[0]'
    },
    mdStandardVersion: {
        name: 'mdStandardVersion',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__metadataStandardVersion[0].gco__CharacterString[0]._text[0]'
    },
    dataTitle: {
        name: 'dataTitle',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__citation[0].gmd__CI_Citation[0].gmd__title[0].gco__CharacterString[0]._text[0]',
        empty: empty.dataTitle
    },
    srvTitle: {
        name: 'dataTitle',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].srv__SV_ServiceIdentification[0].gmd__citation[0].gmd__CI_Citation[0].gmd__title[0].gco__CharacterString[0]._text[0]',
        empty: empty.dataTitle
    },
    dataDates: {
        name: 'md_dates',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__citation[0].gmd__CI_Citation[0].gmd__date[*]'
    },
    dateType: {
        name: 'type',
        xpath: 'gmd__CI_Date[0].gmd__dateType[0].gmd__CI_DateTypeCode[0]._attributes.codeListValue'
    },
    dateTime: {
        name: 'time',
        xpath: 'gmd__CI_Date[0].gmd__date[0].gco__DateTime[0]._text[0]'
    },
    date: {
        name: 'date',
        xpath: 'gmd__CI_Date[0].gmd__date[0].gco__Date[0]._text[0]'
    },
    dataIdentifiers: {
        name: 'dataRsIdentifiers',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__citation[0].gmd__CI_Citation[0].gmd__identifier[*]'
    },
    rsCode: {
        name: 'code',
        xpath: 'gmd__RS_Identifier[0].gmd__code[0].gco__CharacterString[0]._text[0]'
    },
    rsCodeSpace: {
        name: 'codespace',
        xpath: 'gmd__RS_Identifier[0].gmd__codeSpace[0].gco__CharacterString[0]._text[0]'
    },
    mdCode: {
        name: 'code',
        xpath: 'gmd__MD_Identifier[0].gmd__code[0].gco__CharacterString[0]._text[0]'
    },
    dataAbstract: {
        name: 'dataAbstract',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__abstract[0].gco__CharacterString[0]._text[0]'
    },
    srvAbstract: {
        name: 'dataAbstract',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].srv__SV_ServiceIdentification[0].gmd__abstract[0].gco__CharacterString[0]._text[0]'
    },
    dataBrowseGraphics: {
        name: 'dataBrowseGraphics',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__graphicOverview[*]'
    },
    srvBrowseGraphics: {
        name: 'dataBrowseGraphics',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].srv__SV_ServiceIdentification[0].gmd__graphicOverview[*]'
    },
    browseGraphicFileName: {
        name: 'browseGraphicFileName',
        xpath: 'gmd__MD_BrowseGraphic[0].gmd__fileName[0].gco__CharacterString[0]._text[0]'
    },
    browseGraphicFileDescription: {
        name: 'browseGraphicDescription',
        xpath: 'gmd__MD_BrowseGraphic[0].gmd__fileDescription[0].gco__CharacterString[0]._text[0]'
    },
    browseGraphicFileType: {
        name: 'browseGraphicFileType',
        xpath: 'gmd__MD_BrowseGraphic[0].gmd__fileType[0].gco__CharacterString[0]._text[0]'
    },
    dataMaintenanceFrequency: {
        name: 'dataMaintenanceFrequency',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__resourceMaintenance[0].gmd__MD_MaintenanceInformation[0].gmd__maintenanceAndUpdateFrequency[0].gmd__MD_MaintenanceFrequencyCode[0]._attributes.codeListValue'
    },
    srvMaintenanceFrequency: {
        name: 'dataMaintenanceFrequency',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].srv__SV_ServiceIdentification[0].gmd__resourceMaintenance[0].gmd__MD_MaintenanceInformation[0].gmd__maintenanceAndUpdateFrequency[0].gmd__MD_MaintenanceFrequencyCode[0]._attributes.codeListValue'
    },
    dataTemporalExtents: {
        name: 'dataTemporalExtents',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__extent[*]'
    },
    srvTemporalExtents: {
        name: 'dataTemporalExtents',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].srv__SV_ServiceIdentification[0].srv__extent[*]'
    },
    dataTemporalExtentBegin: {
        name: 'dataTemporalExtentBegin',
        xpath: 'gmd__EX_Extent[0].gmd__temporalElement[0].gmd__EX_TemporalExtent[0].gmd__extent[0].gml__TimePeriod[0].gml__beginPosition[0]._text[0]'
    },
    dataTemporalExtentEnd: {
        name: 'dataTemporalExtentEnd',
        xpath: 'gmd__EX_Extent[0].gmd__temporalElement[0].gmd__EX_TemporalExtent[0].gmd__extent[0].gml__TimePeriod[0].gml__endPosition[0]._text[0]'
    },
    dataExtentName: {
        name: 'dataExtentName',
        xpath: 'gmd__EX_Extent[0].gmd__description[0].gco__CharacterString[0]._text[0]'
    },
    dataLanguages: {
        name: 'dataLanguages',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__language[*]'
    },
    srvLanguages: {
        name: 'dataLanguages',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__language[*]'
    },
    language: {
        name: 'dataLanguages',
        xpath: 'gmd__LanguageCode[0]._attributes.codeListValue'
    },
    dataTopicCategories: {
        name: 'dataTopicCategories',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__topicCategory[*]',
    },
    srvTopicCategories: {
        name: 'dataTopicCategories',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].srv__SV_ServiceIdentification[0].gmd__topicCategory[*]',
        empty: empty.dataTopicCategories
    },
    topicCategory: {
        name: 'topicCategory',
        xpath: 'gmd__MD_TopicCategoryCode[0]._text[0]',
        empty: empty.topicCategory
    },
    dataKeywords: {
        name: 'dataKeywords',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__descriptiveKeywords[*]',
        empty: empty.mdFileIdentifier,
    },
    srvKeywords: {
        name: 'srvKeywords',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].srv__SV_ServiceIdentification[0].gmd__descriptiveKeywords[*]',
        empty: empty.mdFileIdentifier,
    },
    // dataKeyword
    keywords: {
        name: 'keyword',
        xpath: 'gmd__MD_Keywords[0].gmd__keyword[*].gco__CharacterString[0]._text[0]',
        empty: empty.mdFileIdentifier
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
        xpath: 'gmd__MD_Keywords[0].gmd__thesaurusName[0].gmd__CI_Citation[0].gmd__date',
    },
    dataPointOfContacts: {
        name: 'dataPointOfContacts',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__pointOfContact[*]'
    },
    srvPointOfContacts: {
        name: 'srvPointOfContacts',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].srv__SV_ServiceIdentification[0].gmd__pointOfContact[0].gmd__CI_ResponsibleParty[*]'
    },
    dataGeographicExtents: {
        name: 'dataGeographicExtents',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__extent[*]'
    },
    srvGeographicExtents: {
        name: 'dataGeographicExtents',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].srv__SV_ServiceIdentification[0].srv__extent[*]'
    },
    dataExtentName: {
        name: 'dataExtentName',
        xpath: 'gmd__EX_Extent[0].gmd__description[0].gco__CharacterString[0]._text[0]'
    },
    dataGeographicExtentWestBound: {
        name: 'dataGeographicExtentWestBound',
        xpath: 'gmd__EX_Extent[0].gmd__geographicElement[0].gmd__EX_GeographicBoundingBox[0].gmd__westBoundLongitude[0].gco__Decimal[0]._text[0]'
    },
    dataGeographicExtentEastBound: {
        name: 'dataGeographicExtentEastBound',
        xpath: 'gmd__EX_Extent[0].gmd__geographicElement[0].gmd__EX_GeographicBoundingBox[0].gmd__eastBoundLongitude[0].gco__Decimal[0]._text[0]'
    },
    dataGeographicExtentSouthBound: {
        name: 'dataGeographicExtentSouthBound',
        xpath: 'gmd__EX_Extent[0].gmd__geographicElement[0].gmd__EX_GeographicBoundingBox[0].gmd__southBoundLatitude[0].gco__Decimal[0]._text[0]'
    },
    dataGeographicExtentNorthBound: {
        name: 'dataGeographicExtentNorthBound',
        xpath: 'gmd__EX_Extent[0].gmd__geographicElement[0].gmd__EX_GeographicBoundingBox[0].gmd__northBoundLatitude[0].gco__Decimal[0]._text[0]'
    },
    dataReferenceSystems: {
        name: 'dataReferenceSystems',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__referenceSystemInfo[*]'
    },
    code: {
        name: 'code',
        xpath: 'gmd__MD_ReferenceSystem[0].gmd__referenceSystemIdentifier[0].gmd__RS_Identifier[0].gmd__code[0].gco__CharacterString[0]._text[0]'
    },
    codeAnchorLink: {
        xpath: 'gmd__MD_ReferenceSystem[0].gmd__referenceSystemIdentifier[0].gmd__RS_Identifier[0].gmd__code[0].gmx__Anchor._attributes.xlink__href',
    },
    codeAnchor: {
        xpath: 'gmd__MD_ReferenceSystem[0].gmd__referenceSystemIdentifier[0].gmd__RS_Identifier[0].gmd__code[0].gmx__Anchor[0]._text[0]',
    },
    codeSpace: {
        xpath: 'gmd__MD_ReferenceSystem[0].gmd__referenceSystemIdentifier[0].gmd__RS_Identifier[0].gmd__codeSpace[0].gco__CharacterString[0]._text[0]'
    },
    dataPresentationForm: {
        name: 'dataPresentationForm',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__citation[0].gmd__CI_Citation[0].gmd__presentationForm[0].gmd__CI_PresentationFormCode[0]._attributes.codeListValue'
    },
    dataSpatialRepresentationType: {
        name: 'dataSpatialRepresentationType',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__spatialRepresentationType[0].gmd__MD_SpatialRepresentationTypeCode[0]._attributes.codeListValue'
    },
    dataScaleDenominator: {
        name: 'dataScaleDenominator',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__spatialResolution[0].gmd__MD_Resolution[0].gmd__equivalentScale[0].gmd__MD_RepresentativeFraction[0].gmd__denominator[0].gco__Integer[0]._text[0]'
    },
    dataScaleDistance: {
        name: 'dataScaleDistance',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__spatialResolution[0].gmd__MD_Resolution[0].gmd__distance[0].gco__Distance[0]._text[0]'
    },
    _dataDqLevel: {
        name: '_dataDqLevel',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__dataQualityInfo[0].gmd__DQ_DataQuality[0].gmd__scope[0].gmd__DQ_Scope[0].gmd__level[0].gmd__MD_ScopeCode[0]._attributes.codeListValue'
    },
    dataLiStatement: {
        name: 'dataLiStatement',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__dataQualityInfo[0].gmd__DQ_DataQuality[0].gmd__lineage[0].gmd__LI_Lineage[0].gmd__statement[0].gco__CharacterString[0]._text[0]'
    },
    dataCharacterSet: {
        name: 'dataCharacterSet',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__characterSet[0].gmd__MD_CharacterSetCode[0]._attributes.codeListValue'
    },
    dataDistributionFormats: {
        name: 'dataDistributionFormats',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__distributionInfo[0].gmd__MD_Distribution[0].gmd__distributionFormat[*]'
    },
    formatName: {
        name: 'formatName',
        xpath: 'gmd__MD_Format[0].gmd__name[0].gco__CharacterString[0]._text[0]'
    },
    formatVersion: {
        name: 'formatVersion',
        xpath: 'gmd__MD_Format[0].gmd__version[0].gco__CharacterString[0]._text[0]'
    },
    formatSpecification: {
        name: 'formatSpecification',
        xpath: 'gmd__MD_Format[0].gmd__specification[0].gco__CharacterString[0]._text[0]'
    },
    formatDistributor: {
        xpath: 'gmd__MD_Format[0].gmd__formatDistributor[0].gmd__MD_Distributor[0].gmd__distributorContact'
    },
    dataResourceConstraints: {
        name: 'dataUseLimitations',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].gmd__MD_DataIdentification[0].gmd__resourceConstraints[*]'
    },
    srvResourceConstraints: {
        name: 'dataUseLimitations',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__identificationInfo[0].srv__SV_ServiceIdentification[0].gmd__resourceConstraints[*]'
    },
    useLimitations: {
        name: 'dataUseLimitation',
        xpath: 'gmd__MD_Constraints[0].gmd__useLimitation[*]'
    },
    useLimitation: {
        name: 'dataUseLimitation',
        xpath: 'gco__CharacterString[0]._text[0]'
    },
    legalUseLimitations: {
        name: 'legalUseLimitation',
        xpath: 'gmd__MD_LegalConstraints[0].gmd__useLimitation[*]'
    },
    legalUseConstraints: {
        name: 'dataLegalUseConstraints',
        xpath: 'gmd__MD_LegalConstraints[0].gmd__useConstraints[*]',
    },
    legalAccessConstraints: {
        name: 'dataLegalAccessConstraints',
        xpath: 'gmd__MD_LegalConstraints[0].gmd__accessConstraints[*]',
    },
    legalConstraint: {
        xpath: 'gmd__MD_RestrictionCode[0]._attributes.codeListValue'
    },
    legalOtherConstraints: {
        name: 'dataLegalAccessOtherConstraints',
        xpath: 'gmd__MD_LegalConstraints[0].gmd__otherConstraints[*]'
    },
    legalOtherConstraint: {
        name: 'dataLegalAccessOtherConstraints',
        xpath: 'gco__CharacterString[0]._text[0]'
    },
    securityUseLimitations: {
        name: 'dataSecurityUseLimitations',
        xpath: 'gmd__MD_SecurityConstraints[0].gmd__useLimitation[*]'
    },
    securityClassification: {
        name: 'dataSecurityClassification',
        xpath: 'gmd__MD_SecurityConstraints[0].gmd__classification[0].gmd__MD_ClassificationCode[0]._attributes.codeListValue'
    },
    dataLinkages: {
        name: 'dataLinkages',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__distributionInfo[0].gmd__MD_Distribution[0].gmd__transferOptions[0].gmd__MD_DigitalTransferOptions[0].gmd__onLine[*]'
    },
    linkageName: {
        name: 'name',
        xpath: 'gmd__CI_OnlineResource[0].gmd__name[0].gco__CharacterString[0]._text[0]'
    },
    linkageDescription: {
        name: 'description',
        xpath: 'gmd__CI_OnlineResource[0].gmd__description[0].gco__CharacterString[0]._text[0]'
    },
    linkageUrl: {
        name: 'url',
        xpath: 'gmd__CI_OnlineResource[0].gmd__linkage[0].gmd__URL[0]._text[0]'
    },
    linkageProtocol: {
        name: 'protocol',
        xpath: 'gmd__CI_OnlineResource[0].gmd__protocol[0].gco__CharacterString[0]._text[0]'
    },
    linkageFunction: {
        xpath: 'gmd__CI_OnlineResource[0].gmd__function[0].gmd__CI_OnLineFunctionCode[0]._attributes.codeListValue'
    },
    dataDqConformities: {
        name: '',
        xpath: '$.csw__GetRecordByIdResponse[0].gmd__MD_Metadata[0].gmd__dataQualityInfo[0].gmd__DQ_DataQuality[0].gmd__report[*]'
    },
    specification: {
        name: '',
        xpath: 'gmd__DQ_DomainConsistency[0].gmd__result[0].gmd__DQ_ConformanceResult[0].gmd__specification[0].gmd__CI_Citation[0].gmd__title[0].gco__CharacterString[0]._text[0]'
    },
    explaination: {
        name: '',
        xpath: 'gmd__DQ_DomainConsistency[0].gmd__result[0].gmd__DQ_ConformanceResult[0].gmd__explanation[0].gco__CharacterString[0]._text[0]'
    },
    pass: {
        name: '',
        xpath: 'gmd__DQ_DomainConsistency[0].gmd__result[0].gmd__DQ_ConformanceResult[0].gmd__pass[0].gco__Boolean'
    },
    dates: {
        name: '',
        xpath: 'gmd__DQ_DomainConsistency[0].gmd__result[0].gmd__DQ_ConformanceResult[0].gmd__specification[0].gmd__CI_Citation[0].gmd__date'
    }

}