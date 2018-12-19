export const getCapabilitiesWfsFields = {
    title: {
        name: 'title',
        xpath: 'wfs_WFS_Capabilities[0].ows__ServiceIdentification[0].ows__Title[0]._text[0]'
    },
    abstract: {
        name: 'abstract',
        xpath: 'wfs_WFS_Capabilities[0].ows__ServiceIdentification[0].ows__Abstract[0]._text[0]'
    },
    keywords: {
        name: 'keywords',
        xpath: 'wfs_WFS_Capabilities[0].ows__ServiceIdentification[0].ows__Keywords[0].ows__Keyword'
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
        xpath: 'wfs_WFS_Capabilities[0].ows__ServiceProvider[0].ows__ProviderName[0]._text[0]'
    },
    providerSite: {
        name: 'providerSite',
        xpath: 'wfs_WFS_Capabilities[0].ows__ServiceProvider[0].ows__ProviderSite[0]._text[0]'
    },
    individualName: {
        name: 'individualName',
        xpath: 'wfs_WFS_Capabilities[0].ows__ServiceProvider[0].ows__ServiceContact[0].ows__IndividualName[0]._text[0]'
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
        xpath: 'wfs_WFS_Capabilities[0].ows__OperationsMetadata[0].ows__Operation[*]',
        filter: [
            '_attributes.name', 'GetRecords'
        ]
    },
    operationsGetFeature: {
        name: 'operations',
        xpath: 'wfs__WFS_Capabilities[0].ows__OperationsMetadata[0].ows__Operation[*]',
        filter: [
            '_attributes.name', 'GetFeature'
        ]
    },
    parameterOutputFormat: {
        name: 'parameterOutputFormat',
        xpath: 'ows__Parameter[*]',
        filter: [
            '_attributes.name', 'outputFormat'
        ]
    },
    allowedValues: {
        name: 'allowedValues',
        xpath: 'ows__AllowedValues[0].ows__Value[*]._text[0]'
    }
};