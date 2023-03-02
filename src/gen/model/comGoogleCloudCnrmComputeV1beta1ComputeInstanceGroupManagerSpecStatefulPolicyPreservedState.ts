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
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecStatefulPolicyPreservedStateDisksValue } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecStatefulPolicyPreservedStateDisksValue';

export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecStatefulPolicyPreservedState {
    /**
    * Disks created on the instances that will be preserved on instance delete, update, etc. This map is keyed with the device names of the disks.
    */
    'disks'?: { [key: string]: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecStatefulPolicyPreservedStateDisksValue; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "disks",
            "baseName": "disks",
            "type": "{ [key: string]: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecStatefulPolicyPreservedStateDisksValue; }"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecStatefulPolicyPreservedState.attributeTypeMap;
    }
}
