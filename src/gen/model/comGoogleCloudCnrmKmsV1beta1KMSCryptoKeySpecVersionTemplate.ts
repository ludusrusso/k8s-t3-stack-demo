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
* A template describing settings for new crypto key versions.
*/
export class ComGoogleCloudCnrmKmsV1beta1KMSCryptoKeySpecVersionTemplate {
    /**
    * The algorithm to use when creating a version based on this template. See the [algorithm reference](https://cloud.google.com/kms/docs/reference/rest/v1/CryptoKeyVersionAlgorithm) for possible inputs.
    */
    'algorithm': string;
    /**
    * Immutable. The protection level to use when creating a version based on this template. Possible values include \"SOFTWARE\", \"HSM\", \"EXTERNAL\". Defaults to \"SOFTWARE\".
    */
    'protectionLevel'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "algorithm",
            "baseName": "algorithm",
            "type": "string"
        },
        {
            "name": "protectionLevel",
            "baseName": "protectionLevel",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmKmsV1beta1KMSCryptoKeySpecVersionTemplate.attributeTypeMap;
    }
}

