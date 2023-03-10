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
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecSchedulingNodeAffinitiesInner } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecSchedulingNodeAffinitiesInner';

/**
* Immutable. The scheduling strategy to use.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecScheduling {
    /**
    * Immutable. Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). This defaults to true.
    */
    'automaticRestart'?: boolean;
    /**
    * Minimum number of cpus for the instance.
    */
    'minNodeCpus'?: number;
    'nodeAffinities'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecSchedulingNodeAffinitiesInner>;
    /**
    * Immutable. Defines the maintenance behavior for this instance.
    */
    'onHostMaintenance'?: string;
    /**
    * Immutable. Allows instance to be preempted. This defaults to false.
    */
    'preemptible'?: boolean;
    /**
    * Immutable. Whether the instance is spot. If this is set as SPOT.
    */
    'provisioningModel'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "automaticRestart",
            "baseName": "automaticRestart",
            "type": "boolean"
        },
        {
            "name": "minNodeCpus",
            "baseName": "minNodeCpus",
            "type": "number"
        },
        {
            "name": "nodeAffinities",
            "baseName": "nodeAffinities",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecSchedulingNodeAffinitiesInner>"
        },
        {
            "name": "onHostMaintenance",
            "baseName": "onHostMaintenance",
            "type": "string"
        },
        {
            "name": "preemptible",
            "baseName": "preemptible",
            "type": "boolean"
        },
        {
            "name": "provisioningModel",
            "baseName": "provisioningModel",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecScheduling.attributeTypeMap;
    }
}

