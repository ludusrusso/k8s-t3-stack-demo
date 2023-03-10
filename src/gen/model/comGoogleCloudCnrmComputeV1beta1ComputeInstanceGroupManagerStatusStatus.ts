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
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerStatusStatusStateful } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerStatusStatusStateful';
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerStatusStatusVersionTarget } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerStatusStatusVersionTarget';

/**
* [Output Only] The status of this managed instance group.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerStatusStatus {
    /**
    * [Output Only] The URL of the [Autoscaler](/compute/docs/autoscaler/) that targets this instance group manager.
    */
    'autoscaler'?: string;
    /**
    * [Output Only] A bit indicating whether the managed instance group is in a stable state. A stable state means that: none of the instances in the managed instance group is currently undergoing any type of change (for example, creation, restart, or deletion); no future changes are scheduled for instances in the managed instance group; and the managed instance group itself is not being modified.
    */
    'isStable'?: boolean;
    'stateful'?: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerStatusStatusStateful;
    'versionTarget'?: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerStatusStatusVersionTarget;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "autoscaler",
            "baseName": "autoscaler",
            "type": "string"
        },
        {
            "name": "isStable",
            "baseName": "isStable",
            "type": "boolean"
        },
        {
            "name": "stateful",
            "baseName": "stateful",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerStatusStatusStateful"
        },
        {
            "name": "versionTarget",
            "baseName": "versionTarget",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerStatusStatusVersionTarget"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerStatusStatus.attributeTypeMap;
    }
}

