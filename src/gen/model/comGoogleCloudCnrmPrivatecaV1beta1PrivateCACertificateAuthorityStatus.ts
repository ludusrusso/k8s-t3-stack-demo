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
import { ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner } from './comGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusAccessUrls } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusAccessUrls';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusCaCertificateDescriptionsInner } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusCaCertificateDescriptionsInner';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfig } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfig';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusSubordinateConfig } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusSubordinateConfig';

export class ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatus {
    'accessUrls'?: ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusAccessUrls;
    /**
    * Output only. A structured description of this CertificateAuthority\'s CA certificate and its issuers. Ordered as self-to-root.
    */
    'caCertificateDescriptions'?: Array<ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusCaCertificateDescriptionsInner>;
    /**
    * Conditions represent the latest available observation of the resource\'s current state.
    */
    'conditions'?: Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>;
    'config'?: ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfig;
    /**
    * Output only. The time at which this CertificateAuthority was created.
    */
    'createTime'?: Date;
    /**
    * Output only. The time at which this CertificateAuthority was soft deleted, if it is in the DELETED state.
    */
    'deleteTime'?: Date;
    /**
    * Output only. The time at which this CertificateAuthority will be permanently purged, if it is in the DELETED state.
    */
    'expireTime'?: Date;
    /**
    * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
    */
    'observedGeneration'?: number;
    /**
    * Output only. This CertificateAuthority\'s certificate chain, including the current CertificateAuthority\'s certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority\'s certificate.
    */
    'pemCaCertificates'?: Array<string>;
    /**
    * Output only. The State for this CertificateAuthority. Possible values: ENABLED, DISABLED, STAGED, AWAITING_USER_ACTIVATION, DELETED
    */
    'state'?: string;
    'subordinateConfig'?: ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusSubordinateConfig;
    /**
    * Output only. The CaPool.Tier of the CaPool that includes this CertificateAuthority. Possible values: ENTERPRISE, DEVOPS
    */
    'tier'?: string;
    /**
    * Output only. The time at which this CertificateAuthority was last updated.
    */
    'updateTime'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessUrls",
            "baseName": "accessUrls",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusAccessUrls"
        },
        {
            "name": "caCertificateDescriptions",
            "baseName": "caCertificateDescriptions",
            "type": "Array<ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusCaCertificateDescriptionsInner>"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>"
        },
        {
            "name": "config",
            "baseName": "config",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusConfig"
        },
        {
            "name": "createTime",
            "baseName": "createTime",
            "type": "Date"
        },
        {
            "name": "deleteTime",
            "baseName": "deleteTime",
            "type": "Date"
        },
        {
            "name": "expireTime",
            "baseName": "expireTime",
            "type": "Date"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        },
        {
            "name": "pemCaCertificates",
            "baseName": "pemCaCertificates",
            "type": "Array<string>"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "subordinateConfig",
            "baseName": "subordinateConfig",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusSubordinateConfig"
        },
        {
            "name": "tier",
            "baseName": "tier",
            "type": "string"
        },
        {
            "name": "updateTime",
            "baseName": "updateTime",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatus.attributeTypeMap;
    }
}
