/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.24.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* ACME specific status options. This field should only be set if the Issuer is configured to use an ACME server to issue certificates.
*/
export class IoCertManagerV1ClusterIssuerStatusAcme {
    /**
    * LastRegisteredEmail is the email associated with the latest registered ACME account, in order to track changes made to registered account associated with the  Issuer
    */
    'lastRegisteredEmail'?: string;
    /**
    * URI is the unique account identifier, which can also be used to retrieve account details from the CA
    */
    'uri'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lastRegisteredEmail",
            "baseName": "lastRegisteredEmail",
            "type": "string"
        },
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerV1ClusterIssuerStatusAcme.attributeTypeMap;
    }
}

