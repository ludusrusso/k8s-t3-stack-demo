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
* Describes high-level ways in which a key may be used.
*/
export class ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage {
    /**
    * The key may be used to sign certificates.
    */
    'certSign'?: boolean;
    /**
    * The key may be used for cryptographic commitments. Note that this may also be referred to as \"non-repudiation\".
    */
    'contentCommitment'?: boolean;
    /**
    * The key may be used sign certificate revocation lists.
    */
    'crlSign'?: boolean;
    /**
    * The key may be used to encipher data.
    */
    'dataEncipherment'?: boolean;
    /**
    * The key may be used to decipher only.
    */
    'decipherOnly'?: boolean;
    /**
    * The key may be used for digital signatures.
    */
    'digitalSignature'?: boolean;
    /**
    * The key may be used to encipher only.
    */
    'encipherOnly'?: boolean;
    /**
    * The key may be used in a key agreement protocol.
    */
    'keyAgreement'?: boolean;
    /**
    * The key may be used to encipher other keys.
    */
    'keyEncipherment'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "certSign",
            "baseName": "certSign",
            "type": "boolean"
        },
        {
            "name": "contentCommitment",
            "baseName": "contentCommitment",
            "type": "boolean"
        },
        {
            "name": "crlSign",
            "baseName": "crlSign",
            "type": "boolean"
        },
        {
            "name": "dataEncipherment",
            "baseName": "dataEncipherment",
            "type": "boolean"
        },
        {
            "name": "decipherOnly",
            "baseName": "decipherOnly",
            "type": "boolean"
        },
        {
            "name": "digitalSignature",
            "baseName": "digitalSignature",
            "type": "boolean"
        },
        {
            "name": "encipherOnly",
            "baseName": "encipherOnly",
            "type": "boolean"
        },
        {
            "name": "keyAgreement",
            "baseName": "keyAgreement",
            "type": "boolean"
        },
        {
            "name": "keyEncipherment",
            "baseName": "keyEncipherment",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.attributeTypeMap;
    }
}

