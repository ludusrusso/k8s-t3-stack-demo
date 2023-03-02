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
* Optional. The public key that corresponds to this config. This is, for example, used when issuing Certificates, but not when creating a self-signed CertificateAuthority or CertificateAuthority CSR.
*/
export class ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfigPublicKey {
    /**
    * Required. The format of the public key. Possible values: PEM
    */
    'format'?: string;
    /**
    * Required. A public key. The padding and encoding must match with the `KeyFormat` value specified for the `format` field.
    */
    'key'?: string;

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
        return ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfigPublicKey.attributeTypeMap;
    }
}
