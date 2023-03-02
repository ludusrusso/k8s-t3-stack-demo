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
import { ComGoogleCloudCnrmMemcacheV1beta1MemcacheInstanceStatusMaintenanceScheduleInner } from './comGoogleCloudCnrmMemcacheV1beta1MemcacheInstanceStatusMaintenanceScheduleInner';
import { ComGoogleCloudCnrmMemcacheV1beta1MemcacheInstanceStatusMemcacheNodesInner } from './comGoogleCloudCnrmMemcacheV1beta1MemcacheInstanceStatusMemcacheNodesInner';

export class ComGoogleCloudCnrmMemcacheV1beta1MemcacheInstanceStatus {
    /**
    * Conditions represent the latest available observation of the resource\'s current state.
    */
    'conditions'?: Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>;
    /**
    * Creation timestamp in RFC3339 text format.
    */
    'createTime'?: string;
    /**
    * Endpoint for Discovery API.
    */
    'discoveryEndpoint'?: string;
    /**
    * Output only. Published maintenance schedule.
    */
    'maintenanceSchedule'?: Array<ComGoogleCloudCnrmMemcacheV1beta1MemcacheInstanceStatusMaintenanceScheduleInner>;
    /**
    * The full version of memcached server running on this instance.
    */
    'memcacheFullVersion'?: string;
    /**
    * Additional information about the instance state, if available.
    */
    'memcacheNodes'?: Array<ComGoogleCloudCnrmMemcacheV1beta1MemcacheInstanceStatusMemcacheNodesInner>;
    /**
    * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
    */
    'observedGeneration'?: number;

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
            "type": "string"
        },
        {
            "name": "discoveryEndpoint",
            "baseName": "discoveryEndpoint",
            "type": "string"
        },
        {
            "name": "maintenanceSchedule",
            "baseName": "maintenanceSchedule",
            "type": "Array<ComGoogleCloudCnrmMemcacheV1beta1MemcacheInstanceStatusMaintenanceScheduleInner>"
        },
        {
            "name": "memcacheFullVersion",
            "baseName": "memcacheFullVersion",
            "type": "string"
        },
        {
            "name": "memcacheNodes",
            "baseName": "memcacheNodes",
            "type": "Array<ComGoogleCloudCnrmMemcacheV1beta1MemcacheInstanceStatusMemcacheNodesInner>"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMemcacheV1beta1MemcacheInstanceStatus.attributeTypeMap;
    }
}

