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
* The scheduling strategy being used by the instance.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecScheduling {
    /**
    * Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).
    */
    'automaticRestart'?: boolean;
    'minNodeCpus'?: number;
    'nodeAffinities'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecSchedulingNodeAffinitiesInner>;
    /**
    * Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,.
    */
    'onHostMaintenance'?: string;
    /**
    * Immutable. Whether the instance is preemptible.
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
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecScheduling.attributeTypeMap;
    }
}

