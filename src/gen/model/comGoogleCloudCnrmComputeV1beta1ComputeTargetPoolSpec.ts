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
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecTargetPoolsInner } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecTargetPoolsInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecInstancesInner } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecInstancesInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeTargetPoolSpecHealthChecksInner } from './comGoogleCloudCnrmComputeV1beta1ComputeTargetPoolSpecHealthChecksInner';

export class ComGoogleCloudCnrmComputeV1beta1ComputeTargetPoolSpec {
    'backupTargetPoolRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecTargetPoolsInner;
    /**
    * Immutable. Textual description field.
    */
    'description'?: string;
    /**
    * Immutable. Ratio (0 to 1) of failed nodes before using the backup pool (which must also be set).
    */
    'failoverRatio'?: number;
    'healthChecks'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeTargetPoolSpecHealthChecksInner>;
    'instances'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecInstancesInner>;
    /**
    * Immutable. Where the target pool resides. Defaults to project region.
    */
    'region': string;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    /**
    * Immutable. How to distribute load. Options are \"NONE\" (no affinity). \"CLIENT_IP\" (hash of the source/dest addresses / ports), and \"CLIENT_IP_PROTO\" also includes the protocol (default \"NONE\").
    */
    'sessionAffinity'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "backupTargetPoolRef",
            "baseName": "backupTargetPoolRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecTargetPoolsInner"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "failoverRatio",
            "baseName": "failoverRatio",
            "type": "number"
        },
        {
            "name": "healthChecks",
            "baseName": "healthChecks",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeTargetPoolSpecHealthChecksInner>"
        },
        {
            "name": "instances",
            "baseName": "instances",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecInstancesInner>"
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
            "name": "sessionAffinity",
            "baseName": "sessionAffinity",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeTargetPoolSpec.attributeTypeMap;
    }
}
