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

export class ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceStatus {
    /**
    * Conditions represent the latest available observation of the resource\'s current state.
    */
    'conditions'?: Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>;
    /**
    * Output only. The time when the instance was created.
    */
    'createTime'?: Date;
    /**
    * Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other.
    */
    'etag'?: string;
    /**
    * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
    */
    'observedGeneration'?: number;
    /**
    * Output only. The instance state. Possible values: STATE_UNSPECIFIED, CREATING, READY, REPAIRING, DELETING, ERROR
    */
    'state'?: string;
    /**
    * Output only. Additional information about the instance state, if available.
    */
    'statusMessage'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>"
        },
        {
            "name": "createTime",
            "baseName": "createTime",
            "type": "Date"
        },
        {
            "name": "etag",
            "baseName": "etag",
            "type": "string"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "statusMessage",
            "baseName": "statusMessage",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceStatus.attributeTypeMap;
    }
}

