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
import { ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInner } from './comGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInner';
import { ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecNetworksInner } from './comGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecNetworksInner';

export class ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpec {
    /**
    * The description of the instance (2048 characters or less).
    */
    'description'?: string;
    /**
    * File system shares on the instance. For this version, only a single file share is supported.
    */
    'fileShares'?: Array<ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInner>;
    /**
    * Immutable. The location for the resource
    */
    'location': string;
    /**
    * Immutable. VPC networks to which the instance is connected. For this version, only a single network is supported.
    */
    'networks'?: Array<ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecNetworksInner>;
    'projectRef': ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    /**
    * Immutable. The service tier of the instance. Possible values: TIER_UNSPECIFIED, STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD, ENTERPRISE
    */
    'tier'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "fileShares",
            "baseName": "fileShares",
            "type": "Array<ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInner>"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "networks",
            "baseName": "networks",
            "type": "Array<ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecNetworksInner>"
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
            "name": "tier",
            "baseName": "tier",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpec.attributeTypeMap;
    }
}

