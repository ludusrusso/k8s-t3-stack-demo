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
* Immutable. Detailed scenarios in which a key may be used.
*/
export class ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateSpecConfigX509ConfigKeyUsageExtendedKeyUsage {
    /**
    * Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as \"TLS WWW client authentication\", though regularly used for non-WWW TLS.
    */
    'clientAuth'?: boolean;
    /**
    * Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as \"Signing of downloadable executable code client authentication\".
    */
    'codeSigning'?: boolean;
    /**
    * Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as \"Email protection\".
    */
    'emailProtection'?: boolean;
    /**
    * Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as \"Signing OCSP responses\".
    */
    'ocspSigning'?: boolean;
    /**
    * Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as \"TLS WWW server authentication\", though regularly used for non-WWW TLS.
    */
    'serverAuth'?: boolean;
    /**
    * Immutable. Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as \"Binding the hash of an object to a time\".
    */
    'timeStamping'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clientAuth",
            "baseName": "clientAuth",
            "type": "boolean"
        },
        {
            "name": "codeSigning",
            "baseName": "codeSigning",
            "type": "boolean"
        },
        {
            "name": "emailProtection",
            "baseName": "emailProtection",
            "type": "boolean"
        },
        {
            "name": "ocspSigning",
            "baseName": "ocspSigning",
            "type": "boolean"
        },
        {
            "name": "serverAuth",
            "baseName": "serverAuth",
            "type": "boolean"
        },
        {
            "name": "timeStamping",
            "baseName": "timeStamping",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateSpecConfigX509ConfigKeyUsageExtendedKeyUsage.attributeTypeMap;
    }
}

