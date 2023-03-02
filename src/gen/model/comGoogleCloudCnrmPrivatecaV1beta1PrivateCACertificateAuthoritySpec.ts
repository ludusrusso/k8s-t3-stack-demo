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
import { ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef } from './comGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecCaPoolRef } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecCaPoolRef';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecConfig } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecConfig';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecGcsBucketRef } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecGcsBucketRef';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecKeySpec } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecKeySpec';

export class ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpec {
    'caPoolRef': ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecCaPoolRef;
    'config': ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecConfig;
    'gcsBucketRef'?: ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecGcsBucketRef;
    'keySpec': ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecKeySpec;
    /**
    * Immutable. Required. The desired lifetime of the CA certificate. Used to create the \"not_before_time\" and \"not_after_time\" fields inside an X.509 certificate.
    */
    'lifetime': string;
    /**
    * Immutable. The location for the resource
    */
    'location': string;
    'projectRef': ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    /**
    * Immutable. Required. Immutable. The Type of this CertificateAuthority. Possible values: SELF_SIGNED, SUBORDINATE
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "caPoolRef",
            "baseName": "caPoolRef",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecCaPoolRef"
        },
        {
            "name": "config",
            "baseName": "config",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecConfig"
        },
        {
            "name": "gcsBucketRef",
            "baseName": "gcsBucketRef",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecGcsBucketRef"
        },
        {
            "name": "keySpec",
            "baseName": "keySpec",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpecKeySpec"
        },
        {
            "name": "lifetime",
            "baseName": "lifetime",
            "type": "string"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "projectRef",
            "baseName": "projectRef",
            "type": "ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthoritySpec.attributeTypeMap;
    }
}

