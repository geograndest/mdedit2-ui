export const getCapabilitiesFields = {
    title: {
        name: 'title',
        xpath: 'csw__Capabilities[0].ows__ServiceIdentification[0].ows__Title[0]._text[0]'
    },
    abstract: {
        name: 'abstract',
        xpath: 'csw__Capabilities[0].ows__ServiceIdentification[0].ows__Abstract[0]._text[0]'
    },
    keywords: {
        name: 'keywords',
        xpath: 'csw__Capabilities[0].ows__ServiceIdentification[0].ows__Keywords[0].ows__Keyword'
    },
    srvType: {
        name: 'srvType',
        xpath: 'ows__ServiceIdentification[0].ows__ServiceType'
    },
    srvVersion: {
        name: 'srvVersion',
        xpath: 'ows__ServiceIdentification[0].ows__ServiceTypeVersion'
    },
    fees: {
        name: 'fees',
        xpath: 'ows__ServiceIdentification[0].ows__Fees'
    },
    accessConstraints: {
        name: 'accessConstraints',
        xpath: 'ows__ServiceIdentification[0].ows__AccessConstraints'
    },
    providerName: {
        name: 'providerName',
        xpath: 'csw__Capabilities[0].ows__ServiceProvider[0].ows__ProviderName[0]._text[0]'
    },
    providerSite: {
        name: 'providerSite',
        xpath: 'csw__Capabilities[0].ows__ServiceProvider[0].ows__ProviderSite[0]._text[0]'
    },
    individualName: {
        name: 'individualName',
        xpath: 'csw__Capabilities[0].ows__ServiceProvider[0].ows__ServiceContact[0].ows__IndividualName[0]._text[0]'
    },
    positionName: {
        name: 'positionName',
        xpath: 'ows__ServiceProvider[0].ows__ServiceContact[0].ows__PositionName'
    },
    phoneVoice: {
        name: 'phoneVoice',
        xpath: 'ows__ServiceProvider[0].ows__ServiceContact[0].ows__ContactInfo[0].ows__Phone[0].ows__Voice'
    },
    address: {
        name: 'address',
        xpath: 'ows__ServiceProvider[0].ows__ServiceContact[0].ows__ContactInfo[0].ows__Address[0].ows__DeliveryPoint'
    },
    city: {
        name: 'city',
        xpath: 'ows__ServiceProvider[0].ows__ServiceContact[0].ows__ContactInfo[0].ows__Address[0].ows__City'
    },
    area: {
        name: 'area',
        xpath: 'ows__ServiceProvider[0].ows__ServiceContact[0].ows__ContactInfo[0].ows__Address[0].ows__AdministrativeArea'
    },
    postalCode: {
        name: 'postalCode',
        xpath: 'ows__ServiceProvider[0].ows__ServiceContact[0].ows__ContactInfo[0].ows__Address[0].ows__PostalCode'
    },
    country: {
        name: 'country',
        xpath: 'ows__ServiceProvider[0].ows__ServiceContact[0].ows__ContactInfo[0].ows__Address[0].ows__Country'
    },
    email: {
        name: 'email',
        xpath: 'ows__ServiceProvider[0].ows__ServiceContact[0].ows__ContactInfo[0].ows__Address[0].ows__ElectronicMailAddress'
    },
    hours: {
        name: 'hours',
        xpath: 'ows__ServiceProvider[0].ows__ServiceContact[0].ows__ContactInfo[0].ows__HoursOfService'
    },
    instructions: {
        name: 'instructions',
        xpath: 'ows__ServiceProvider[0].ows__ServiceContact[0].ows__ContactInfo[0].ows__ContactInstructions'
    },
    role: {
        name: 'role',
        xpath: 'ows__ServiceProvider[0].ows__ServiceContact[0].ows__Role'
    },
    operations: {
        name: 'operations',
        xpath: 'csw__Capabilities[0].ows__OperationsMetadata[0].ows__Operation[*]'
    },
    operationsGetRecords: {
        name: 'operationsGetRecords',
        xpath: 'csw__Capabilities[0].ows__OperationsMetadata[0].ows__Operation[*]',
        filter: [
            '_attributes.name', 'GetRecords'
        ]
    },
    supportedConstraints: {
        name: 'supportedConstraints',
        xpath: 'ows__Constraint[*]',
        filter: [
            '_attributes.name', 'SupportedISOQueryables'
        ]
    },
    constraintsValues: {
        name: 'constraintsValues',
        xpath: 'ows__Value[*]._text[0]'
    },
};