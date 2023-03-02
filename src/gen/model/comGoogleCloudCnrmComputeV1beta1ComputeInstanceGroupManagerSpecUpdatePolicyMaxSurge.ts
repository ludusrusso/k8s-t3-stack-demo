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

/**
* The maximum number of instances that can be created above the specified `targetSize` during the update process. This value can be either a fixed number or, if the group has 10 or more instances, a percentage. If you set a percentage, the number of instances is rounded if necessary. The default value for `maxSurge` is a fixed value equal to the number of zones in which the managed instance group operates. At least one of either `maxSurge` or `maxUnavailable` must be greater than 0. Learn more about [`maxSurge`](/compute/docs/instance-groups/rolling-out-updates-to-managed-instance-groups#max_surge).
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecUpdatePolicyMaxSurge {
    /**
    * Specifies a fixed number of VM instances. This must be a positive integer.
    */
    'fixed'?: number;
    /**
    * Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify `80` for 80%.
    */
    'percent'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fixed",
            "baseName": "fixed",
            "type": "number"
        },
        {
            "name": "percent",
            "baseName": "percent",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecUpdatePolicyMaxSurge.attributeTypeMap;
    }
}

