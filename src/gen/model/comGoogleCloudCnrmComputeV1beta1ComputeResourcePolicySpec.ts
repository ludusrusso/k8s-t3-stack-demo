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
import { ComGoogleCloudCnrmComputeV1beta1ComputeResourcePolicySpecGroupPlacementPolicy } from './comGoogleCloudCnrmComputeV1beta1ComputeResourcePolicySpecGroupPlacementPolicy';
import { ComGoogleCloudCnrmComputeV1beta1ComputeResourcePolicySpecInstanceSchedulePolicy } from './comGoogleCloudCnrmComputeV1beta1ComputeResourcePolicySpecInstanceSchedulePolicy';
import { ComGoogleCloudCnrmComputeV1beta1ComputeResourcePolicySpecSnapshotSchedulePolicy } from './comGoogleCloudCnrmComputeV1beta1ComputeResourcePolicySpecSnapshotSchedulePolicy';

export class ComGoogleCloudCnrmComputeV1beta1ComputeResourcePolicySpec {
    /**
    * Immutable. An optional description of this resource. Provide this property when you create the resource.
    */
    'description'?: string;
    'groupPlacementPolicy'?: ComGoogleCloudCnrmComputeV1beta1ComputeResourcePolicySpecGroupPlacementPolicy;
    'instanceSchedulePolicy'?: ComGoogleCloudCnrmComputeV1beta1ComputeResourcePolicySpecInstanceSchedulePolicy;
    /**
    * Immutable. Region where resource policy resides.
    */
    'region': string;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    'snapshotSchedulePolicy'?: ComGoogleCloudCnrmComputeV1beta1ComputeResourcePolicySpecSnapshotSchedulePolicy;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "groupPlacementPolicy",
            "baseName": "groupPlacementPolicy",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeResourcePolicySpecGroupPlacementPolicy"
        },
        {
            "name": "instanceSchedulePolicy",
            "baseName": "instanceSchedulePolicy",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeResourcePolicySpecInstanceSchedulePolicy"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "snapshotSchedulePolicy",
            "baseName": "snapshotSchedulePolicy",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeResourcePolicySpecSnapshotSchedulePolicy"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeResourcePolicySpec.attributeTypeMap;
    }
}
