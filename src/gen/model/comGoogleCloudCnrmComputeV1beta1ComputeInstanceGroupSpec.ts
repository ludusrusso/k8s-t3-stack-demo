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
import { ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetResourcesInner } from './comGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetResourcesInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecInstancesInner } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecInstancesInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecNamedPortInner } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecNamedPortInner';

export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpec {
    /**
    * Immutable. An optional textual description of the instance group.
    */
    'description'?: string;
    'instances'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecInstancesInner>;
    /**
    * The named port configuration.
    */
    'namedPort'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecNamedPortInner>;
    'networkRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetResourcesInner;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    /**
    * Immutable. The zone that this instance group should be created in.
    */
    'zone': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "instances",
            "baseName": "instances",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecInstancesInner>"
        },
        {
            "name": "namedPort",
            "baseName": "namedPort",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecNamedPortInner>"
        },
        {
            "name": "networkRef",
            "baseName": "networkRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetResourcesInner"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "zone",
            "baseName": "zone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpec.attributeTypeMap;
    }
}

