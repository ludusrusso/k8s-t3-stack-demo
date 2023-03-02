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

export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceStatus {
    /**
    * Conditions represent the latest available observation of the resource\'s current state.
    */
    'conditions'?: Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>;
    /**
    * The CPU platform used by this instance.
    */
    'cpuPlatform'?: string;
    /**
    * Current status of the instance.
    */
    'currentStatus'?: string;
    /**
    * The server-assigned unique identifier of this instance.
    */
    'instanceId'?: string;
    /**
    * The unique fingerprint of the labels.
    */
    'labelFingerprint'?: string;
    /**
    * The unique fingerprint of the metadata.
    */
    'metadataFingerprint'?: string;
    /**
    * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
    */
    'observedGeneration'?: number;
    /**
    * The URI of the created resource.
    */
    'selfLink'?: string;
    /**
    * The unique fingerprint of the tags.
    */
    'tagsFingerprint'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>"
        },
        {
            "name": "cpuPlatform",
            "baseName": "cpuPlatform",
            "type": "string"
        },
        {
            "name": "currentStatus",
            "baseName": "currentStatus",
            "type": "string"
        },
        {
            "name": "instanceId",
            "baseName": "instanceId",
            "type": "string"
        },
        {
            "name": "labelFingerprint",
            "baseName": "labelFingerprint",
            "type": "string"
        },
        {
            "name": "metadataFingerprint",
            "baseName": "metadataFingerprint",
            "type": "string"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        },
        {
            "name": "selfLink",
            "baseName": "selfLink",
            "type": "string"
        },
        {
            "name": "tagsFingerprint",
            "baseName": "tagsFingerprint",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceStatus.attributeTypeMap;
    }
}

