

mdjs.model_xml.browseGraphic = 
fileName: ''
fileDescription: ''
fileType: ''

mdjs.model_xml.keyword = 
// keyword:// //  'gmd:MD_Keywords/gmd:keyword/gco:CharacterString/_text'
// 
keywords: ''
children:keyword: ''
keywordType: ''
thesaurusName: ''
thesaurusDates: ''
children: mdjs.model_xml.date

mdjs.model_xml.languageCode = 
languageCode: ''

mdjs.model_xml.topicCategory = 
topicCategory: ''

mdjs.model_xml.main = 
mdFileIdentifier: '/gmd:MD_Metadata/gmd:fileIdentifier/gco:CharacterString/_text'
mdLanguage: ''
mdCharacterSet: ''
mdHierarchyLevel: ''
mdHierarchyLevelName: '/gmd:MD_Metadata/gmd:hierarchyLevelName/gco:CharacterString/_text'
mdContacts: ''
children: mdjs.model_xml.contact
mdDateStamp: '/gmd:MD_Metadata/gmd:dateStamp'
children:date: 'gco:Date/_text'
dateTime: 'gco:DateTime/_text'
mdStandardName: '/gmd:MD_Metadata/gmd:metadataStandardName/gco:CharacterString/_text'
mdStandardVersion: '/gmd:MD_Metadata/gmd:metadataStandardVersion/gco:CharacterString/_text'
dataReferenceSystems: '/gmd:MD_Metadata/gmd:referenceSystemInfo'
children:code: 'gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:code/gco:CharacterString/_text'
codeAnchorLink: 'gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:code/gmx:Anchor/@xlink:href'
skip: true
codeAnchor: 'gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:code/gmx:Anchor/_text'
'xlink:href': 'node=codeAnchorLink'
codeSpace: 'gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:codeSpace/gco:CharacterString/_text'
// Data Information
dataTitle: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString/_text'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString/_text'
dataAlternateTitle: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:alternateTitle/gco:CharacterString/_text'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:citation/gmd:CI_Citation/gmd:alternateTitle/gco:CharacterString/_text'
// Dates
dataDates: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:date'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:citation/gmd:CI_Citation/gmd:date'
children: mdjs.model_xml.date
dataEdition: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:edition/gco:CharacterString/_text'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:citation/gmd:CI_Citation/gmd:edition/gco:CharacterString/_text'
dataEditionDates: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:editionDate/gco:Date/_text'
// Presentation form
// TODO: vérifier position
dataPresentationForm: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:presentationForm/gmd:CI_PresentationFormCode/@codeListValue'
// Identifiers
// GRK - change dataIdentifiers par dataRSIdentifiers
dataRsIdentifiers: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:identifier'
children:code: 'gmd:RS_Identifier/gmd:code/gco:CharacterString/_text'
codeSpace: 'gmd:RS_Identifier/gmd:codeSpace/gco:CharacterString/_text'
// GRK - Add dataMdIdentifiers
dataMdIdentifiers: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:identifier'
children:code: 'gmd:MD_Identifier/gmd:code/gco:CharacterString/_text'
// series
dataSeries: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:series'
children:name: 'gmd:CI_Series/gmd:name/gco:CharacterString/_text'
issueIdentification: 'gmd:CI_Series/gmd:issueIdentification/gco:CharacterString/_text'
page: 'gmd:CI_Series/gmd:page/gco:CharacterString/_text'
dataAbstract: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:abstract/gco:CharacterString/_text'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:abstract/gco:CharacterString/_text'
// purpose
dataPurpose: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:purpose/gco:CharacterString/_text'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:purpose/gco:CharacterString/_text'
// status
dataStatus: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:status'
children:progressCode: 'gmd:MD_ProgressCode/@codeListValue'
// Contacts: tableau d'objets
dataPointOfContacts: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty'
children: mdjs.model_xml.contact
dataMaintenanceFrequency: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:maintenanceAndUpdateFrequency/gmd:MD_MaintenanceFrequencyCode/@codeListValue'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:maintenanceAndUpdateFrequency/gmd:MD_MaintenanceFrequencyCode/@codeListValue'
dataMaintenanceNotes: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:maintenanceNote'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:maintenanceNote'
children:maintenanceNote: 'gco:CharacterString/_text'
// Browsegraphic
dataBrowseGraphics: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:graphicOverview'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:graphicOverview'
children: mdjs.model_xml.browseGraphic
// Keywords
dataKeywords: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:descriptiveKeywords'
children: mdjs.model_xml.keyword
// Specific Usage
dataUsages: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceSpecificUsage'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:resourceSpecificUsage'
children:specificUsage: 'gmd:MD_Usage/gmd:specificUsage/gco:CharacterString/_text'
dateTime: 'gmd:MD_Usage/gmd:usageDateTime/gco:DateTime/_text'
userDeterminedLimitations: 'gmd:MD_Usage/gmd:userDeterminedLimitations/gco:CharacterString/_text'
userContactInfo: 'gmd:MD_Usage/gmd:userContactInfo'
children: mdjs.model_xml.contact
// TODO: A compléter
// Limits and constraints
// dataConstraints:dataUseLimitations: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:resourceConstraints'
children:dataUseLimitation: 'gmd:MD_Constraints/gmd:useLimitation/gco:CharacterString/_text'
// Legal Constraints
dataLegalConstraints: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:resourceConstraints'
children:dataLegalUseLimitations: 'gmd:MD_LegalConstraints/gmd:useLimitation'
children:legalUseLimitation: 'gco:CharacterString/_text'
dataLegalAccessConstraints: 'gmd:MD_LegalConstraints/gmd:accessConstraints'
children:legalAccessConstraints: 'gmd:MD_RestrictionCode/@codeListValue'
dataLegalUseConstraints: 'gmd:MD_LegalConstraints/gmd:useConstraints'
children:legalUseConstraints: 'gmd:MD_RestrictionCode/@codeListValue'
dataLegalOtherConstraints: 'gmd:MD_LegalConstraints/gmd:otherConstraints'
children:legalOtherConstraint: 'gco:CharacterString/_text'
dataSecurityConstraints: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:resourceConstraints'
children:dataSecurityUseLimitations: 'gmd:MD_SecurityConstraints/gmd:useLimitation'
children:securityUseLimitation: 'gco:CharacterString/_text'
dataSecurityClassification: 'gmd:MD_SecurityConstraints/gmd:classification/gmd:MD_ClassificationCode/@codeListValue'
// Spatial Representation Type (vector/raster)
dataSpatialRepresentationType: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:spatialRepresentationType/gmd:MD_SpatialRepresentationTypeCode/@codeListValue'
// Scale
// Scale denominator
// DONE: change path
dataScaleDenominator: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:spatialResolution/gmd:MD_Resolution/gmd:equivalentScale/gmd:MD_RepresentativeFraction/gmd:denominator/gco:Integer/_text'
// Scale distance
dataScaleDistance: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:spatialResolution/gmd:MD_Resolution/gmd:distance/gco:Distance/_text'
uom: 'http://standards.iso.org/ittf/PublicityAvailableStandards/ISO_19139_Schemas/resources.uom/ML_gmxUom.xml#m'
// Languages
dataLanguages: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:language'
children: mdjs.model_xml.languageCode
// Data Character Set
dataCharacterSet: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:characterSet/gmd:MD_CharacterSetCode/@codeListValue'
// Topic Categories
dataTopicCategories: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:topicCategory'
children: mdjs.model_xml.topicCategory
// Service Type
srvType:xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:serviceType/gco:LocalName/_text'
srvAccessProperties:xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:accessProperties'
children:fees: 'gmd:MD_StandardOrderProcess/gmd:fees/gco:CharacterString/_text'
plannedAvailableDateTime: 'gmd:MD_StandardOrderProcess/gmd:plannedAvailableDateTime/gco:DateTime/_text'
orderingInstructions: 'gmd:MD_StandardOrderProcess/gmd:orderingInstructions/gco:CharacterString/_text'
turnarournd: 'gmd:MD_StandardOrderProcess/gmd:turnarournd/gco:CharacterString/_text'
// Extents
dataExtents: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent'
xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:extent'
children:dataExtentName: 'gmd:EX_Extent/gmd:description/gco:CharacterString/_text'
// GeographicExtents
dataGeographicExtentWestBound: 'gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:westBoundLongitude/gco:Decimal/_text'
dataGeographicExtentEastBound: 'gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:eastBoundLongitude/gco:Decimal/_text'
dataGeographicExtentSouthBound: 'gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:southBoundLatitude/gco:Decimal/_text'
dataGeographicExtentNorthBound: 'gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:northBoundLatitude/gco:Decimal/_text'
// GeographicExtents by identifier - Not implemented
// TemporalExtents
dataTemporalExtentBegin: 'gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:beginPosition/_text'
dataTemporalExtentEnd: 'gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:endPosition/_text'
dataTimeInstant: 'gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimeInstant/gml:timePosition/_text'
// VerticalExtents
dataVerticalExtent_Max: ''
dataVerticalExtent_Unit: ''
dataVerticalExtent_Ref: ''
// TODO: <srv:coupledResource/>
// srvCoupledResource:// // xpath_srv: ''
// children:// 
// <srv:couplingType>
srvCouplingType:xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:couplingType/srv:SV_CouplingType/@codeListValue'
// <srv:containsOperations>
srvContainsOperations:xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:containsOperations'
children:operationName: 'srv:SV_OperationMetadata/srv:operationName/gco:CharacterString/_text'
dcp: 'srv:SV_OperationMetadata/srv:DCP/srv:DCPList/@codeListValue'
connectPoint: 'srv:SV_OperationMetadata/srv:connectPoint'
children: mdjs.model_xml.onlineResource
// DistributionFormats
dataDistributionFormats: '/gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:distributionFormat'
children:formatName: 'gmd:MD_Format/gmd:name/gco:CharacterString/_text'
formatVersion: 'gmd:MD_Format/gmd:version/gco:CharacterString/_text'
formatSpecification: 'gmd:MD_Format/gmd:specification/gco:CharacterString/_text'
formatDistributor: 'gmd:MD_Format/gmd:formatDistributor/gmd:MD_Distributor/gmd:distributorContact'
children: mdjs.model_xml.contact
// Distributors
dataDistributors: '/gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:distributor'
children:distributorContact: 'gmd:MD_Distributor/gmd:distributorContact'
children: mdjs.model_xml.contact
// distributionOrderProcess:// //  'gmd:MD_Format/gmd:version/gco:CharacterString/_text'
// 
distributionOrderProcess: 'gmd:MD_Distributor/gmd:distributionOrderProcess'
children:fees: 'gmd:MD_StandardOrderProcess/gmd:fees/gco:CharacterString/_text'
plannedAvailableDateTime: 'gmd:MD_StandardOrderProcess/gmd:plannedAvailableDateTime/gco:DateTime/_text'
orderingInstructions: 'gmd:MD_StandardOrderProcess/gmd:orderingInstructions/gco:CharacterString/_text'
turnarournd: 'gmd:MD_StandardOrderProcess/gmd:turnarournd/gco:CharacterString/_text'
// TransferOptions
// dataTransferOptions:// // //  '/gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions'
// children:// unitsOfDistribution:// // //  'gmd:MD_DigitalTransferOptions/gmd:unitsOfDistribution/gco:CharacterString/_text'
// // linkages:// // //  'gmd:MD_DigitalTransferOptions/gmd:onLine'
// children: mdjs.model_xml.onlineResource
// // // 
// Linkages
dataLinkages: '/gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine'
children: mdjs.model_xml.onlineResource
// Data Quality
// Data Quality level
dataQualityInfo: '/gmd:MD_Metadata/gmd:dataQualityInfo'
children:dataDqLevel: 'gmd:DQ_DataQuality/gmd:scope/gmd:DQ_Scope/gmd:level/gmd:MD_ScopeCode/@codeListValue'
// Data Lineage
dataLiStatement: 'gmd:DQ_DataQuality/gmd:lineage/gmd:LI_Lineage/gmd:statement/gco:CharacterString/_text'
// Data Process Steps
//'Data_LI_ProcessStep':// //  ''
// 
// Data Source
//'Data_LI_Source':// 
//  ''
// 
// Data Conformities
dataDqConformities: '/gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:report'
children:dataDqConformityTest: 'gmd:DQ_DomainConsistency/gmd:result/gmd:DQ_ConformanceResult/gmd:specification/gmd:CI_Citation/gmd:title/gco:CharacterString/_text'
dataDqConformityDates: 'gmd:DQ_DomainConsistency/gmd:result/gmd:DQ_ConformanceResult/gmd:specification/gmd:CI_Citation/gmd:date'
children: mdjs.model_xml.date
dataDqConformityResult: 'gmd:DQ_DomainConsistency/gmd:result/gmd:DQ_ConformanceResult/gmd:explanation/gco:CharacterString/_text'
dataDqConformityPass: 'gmd:DQ_DomainConsistency/gmd:result/gmd:DQ_ConformanceResult/gmd:pass/gco:Boolean'
mdSecurityConstraints: '/gmd:MD_Metadata/gmd:metadataConstraints'
children:securityUseLimitations: 'gmd:MD_SecurityConstraints/gmd:useLimitation'
children:securityUseLimitation: 'gco:CharacterString/_text'
securityClassification: 'gmd:MD_SecurityConstraints/gmd:classification/gmd:MD_ClassificationCode/@codeListValue'
