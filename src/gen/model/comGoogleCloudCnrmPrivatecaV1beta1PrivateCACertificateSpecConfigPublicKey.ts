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
* Immutable. Optional. The public key that corresponds to this config. This is, for example, used when issuing Certificates, but not when creating a self-signed CertificateAuthority or CertificateAuthority CSR.
*/
export class ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateSpecConfigPublicKey {
    /**
    * Immutable. Required. The format of the public key. Possible values: KEY_FORMAT_UNSPECIFIED, PEM
    */
    'format': string;
    /**
    * Immutable. Required. A public key. The padding and encoding must match with the `KeyFormat` value specified for the `format` field.
    */
    'key': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "format",
            "baseName": "format",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateSpecConfigPublicKey.attributeTypeMap;
    }
}
