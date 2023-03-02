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

export class ComGoogleCloudCnrmStorageV1beta1StorageDefaultObjectAccessControlSpec {
    'bucketRef': ComGoogleCloudCnrmComputeV1beta1ComputeBackendBucketSpecBucketRef;
    /**
    * The entity holding the permission, in one of the following forms:   * user-{{userId}}   * user-{{email}} (such as \"user-liz@example.com\")   * group-{{groupId}}   * group-{{email}} (such as \"group-example@googlegroups.com\")   * domain-{{domain}} (such as \"domain-example.com\")   * project-team-{{projectId}}   * allUsers   * allAuthenticatedUsers.
    */
    'entity': string;
    /**
    * The name of the object, if applied to an object.
    */
    'object'?: string;
    /**
    * The access permission for the entity. Possible values: [\"OWNER\", \"READER\"].
    */
    'role': string;

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
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmStorageV1beta1StorageDefaultObjectAccessControlSpec.attributeTypeMap;
    }
}

