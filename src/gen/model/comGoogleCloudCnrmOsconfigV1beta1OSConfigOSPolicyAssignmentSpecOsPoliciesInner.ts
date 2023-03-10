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
import { ComGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInner } from './comGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInner';

export class ComGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInner {
    /**
    * This flag determines the OS policy compliance status when none of the resource groups within the policy are applicable for a VM. Set this value to `true` if the policy needs to be reported as compliant even if the policy has nothing to validate or enforce.
    */
    'allowNoResourceGroupMatch'?: boolean;
    /**
    * Policy description. Length of the description is limited to 1024 characters.
    */
    'description'?: string;
    /**
    * Required. The id of the OS policy with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the assignment.
    */
    'id': string;
    /**
    * Required. Policy mode Possible values: MODE_UNSPECIFIED, VALIDATION, ENFORCEMENT
    */
    'mode': string;
    /**
    * Required. List of resource groups for the policy. For a particular VM, resource groups are evaluated in the order specified and the first resource group that is applicable is selected and the rest are ignored. If none of the resource groups are applicable for a VM, the VM is considered to be non-compliant w.r.t this policy. This behavior can be toggled by the flag `allow_no_resource_group_match`
    */
    'resourceGroups': Array<ComGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowNoResourceGroupMatch",
            "baseName": "allowNoResourceGroupMatch",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "string"
        },
        {
            "name": "resourceGroups",
            "baseName": "resourceGroups",
            "type": "Array<ComGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInner.attributeTypeMap;
    }
}

