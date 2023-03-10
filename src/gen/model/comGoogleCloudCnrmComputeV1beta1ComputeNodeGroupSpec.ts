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
import { ComGoogleCloudCnrmComputeV1beta1ComputeNodeGroupSpecAutoscalingPolicy } from './comGoogleCloudCnrmComputeV1beta1ComputeNodeGroupSpecAutoscalingPolicy';
import { ComGoogleCloudCnrmComputeV1beta1ComputeNodeGroupSpecMaintenanceWindow } from './comGoogleCloudCnrmComputeV1beta1ComputeNodeGroupSpecMaintenanceWindow';
import { ComGoogleCloudCnrmComputeV1beta1ComputeNodeGroupSpecNodeTemplateRef } from './comGoogleCloudCnrmComputeV1beta1ComputeNodeGroupSpecNodeTemplateRef';

export class ComGoogleCloudCnrmComputeV1beta1ComputeNodeGroupSpec {
    'autoscalingPolicy'?: ComGoogleCloudCnrmComputeV1beta1ComputeNodeGroupSpecAutoscalingPolicy;
    /**
    * Immutable. An optional textual description of the resource.
    */
    'description'?: string;
    /**
    * Immutable. The initial number of nodes in the node group. One of \'initial_size\' or \'size\' must be specified.
    */
    'initialSize'?: number;
    /**
    * Immutable. Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.
    */
    'maintenancePolicy'?: string;
    'maintenanceWindow'?: ComGoogleCloudCnrmComputeV1beta1ComputeNodeGroupSpecMaintenanceWindow;
    'nodeTemplateRef': ComGoogleCloudCnrmComputeV1beta1ComputeNodeGroupSpecNodeTemplateRef;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    /**
    * Immutable. The total number of nodes in the node group. One of \'initial_size\' or \'size\' must be specified.
    */
    'size'?: number;
    /**
    * Immutable. Zone where this node group is located.
    */
    'zone': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "autoscalingPolicy",
            "baseName": "autoscalingPolicy",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeNodeGroupSpecAutoscalingPolicy"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "initialSize",
            "baseName": "initialSize",
            "type": "number"
        },
        {
            "name": "maintenancePolicy",
            "baseName": "maintenancePolicy",
            "type": "string"
        },
        {
            "name": "maintenanceWindow",
            "baseName": "maintenanceWindow",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeNodeGroupSpecMaintenanceWindow"
        },
        {
            "name": "nodeTemplateRef",
            "baseName": "nodeTemplateRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeNodeGroupSpecNodeTemplateRef"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "zone",
            "baseName": "zone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeNodeGroupSpec.attributeTypeMap;
    }
}

