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
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfigPublicKey } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfigPublicKey';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfigX509Config } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfigX509Config';

export class ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfig {
    'publicKey'?: ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfigPublicKey;
    'x509Config'?: ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfigX509Config;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "publicKey",
            "baseName": "publicKey",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfigPublicKey"
        },
        {
            "name": "x509Config",
            "baseName": "x509Config",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfigX509Config"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfig.attributeTypeMap;
    }
}

