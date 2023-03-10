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
import { ComGoogleCloudCnrmComputeV1beta1ComputeBackendBucketSpecBucketRef } from './comGoogleCloudCnrmComputeV1beta1ComputeBackendBucketSpecBucketRef';

export class ComGoogleCloudCnrmStorageV1beta1StorageBucketAccessControlSpec {
    'bucketRef': ComGoogleCloudCnrmComputeV1beta1ComputeBackendBucketSpecBucketRef;
    /**
    * Immutable. The entity holding the permission, in one of the following forms:   user-userId   user-email   group-groupId   group-email   domain-domain   project-team-projectId   allUsers   allAuthenticatedUsers Examples:   The user liz@example.com would be user-liz@example.com.   The group example@googlegroups.com would be   group-example@googlegroups.com.   To refer to all members of the Google Apps for Business domain   example.com, the entity would be domain-example.com.
    */
    'entity': string;
    /**
    * The access permission for the entity. Possible values: [\"OWNER\", \"READER\", \"WRITER\"].
    */
    'role'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bucketRef",
            "baseName": "bucketRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeBackendBucketSpecBucketRef"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "string"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmStorageV1beta1StorageBucketAccessControlSpec.attributeTypeMap;
    }
}

