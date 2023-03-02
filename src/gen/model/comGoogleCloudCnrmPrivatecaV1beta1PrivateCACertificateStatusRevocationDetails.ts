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
* Output only. Details regarding the revocation of this Certificate. This Certificate is considered revoked if and only if this field is present.
*/
export class ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusRevocationDetails {
    /**
    * Indicates why a Certificate was revoked. Possible values: REVOCATION_REASON_UNSPECIFIED, KEY_COMPROMISE, CERTIFICATE_AUTHORITY_COMPROMISE, AFFILIATION_CHANGED, SUPERSEDED, CESSATION_OF_OPERATION, CERTIFICATE_HOLD, PRIVILEGE_WITHDRAWN, ATTRIBUTE_AUTHORITY_COMPROMISE
    */
    'revocationState'?: string;
    /**
    * The time at which this Certificate was revoked.
    */
    'revocationTime'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "revocationState",
            "baseName": "revocationState",
            "type": "string"
        },
        {
            "name": "revocationTime",
            "baseName": "revocationTime",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusRevocationDetails.attributeTypeMap;
    }
}
