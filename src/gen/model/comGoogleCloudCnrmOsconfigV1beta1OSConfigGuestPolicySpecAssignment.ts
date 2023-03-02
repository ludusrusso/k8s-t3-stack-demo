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
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecInstancesInner } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecInstancesInner';
import { ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecAssignmentGroupLabelsInner } from './comGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecAssignmentGroupLabelsInner';
import { ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecAssignmentOsTypesInner } from './comGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecAssignmentOsTypesInner';

/**
* Specifies the VMs that are assigned this policy. This allows you to target sets or groups of VMs by different parameters such as labels, names, OS, or zones. Empty assignments will target ALL VMs underneath this policy. Conflict Management Policies that exist higher up in the resource hierarchy (closer to the Org) will override those lower down if there is a conflict. At the same level in the resource hierarchy (ie. within a project), the service will prevent the creation of multiple policies that conflict with each other. If there are multiple policies that specify the same config (eg. package, software recipe, repository, etc.), the service will ensure that no VM could potentially receive instructions from both policies. To create multiple policies that specify different versions of a package or different configs for different Operating Systems, each policy must be mutually exclusive in their targeting according to labels, OS, or other criteria. Different configs are identified for conflicts in different ways. Packages are identified by their name and the package manager(s) they target. Package repositories are identified by their unique id where applicable. Some package managers don\'t have a unique identifier for repositories and where that\'s the case, no uniqueness is validated by the service. Note that if OS Inventory is disabled, a VM will not be assigned a policy that targets by OS because the service will see this VM\'s OS as unknown.
*/
export class ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecAssignment {
    /**
    * Targets instances matching at least one of these label sets. This allows an assignment to target disparate groups, for example \"env=prod or env=staging\".
    */
    'groupLabels'?: Array<ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecAssignmentGroupLabelsInner>;
    /**
    * Targets VM instances whose name starts with one of these prefixes. Like labels, this is another way to group VM instances when targeting configs, for example prefix=\"prod-\". Only supported for project-level policies.
    */
    'instanceNamePrefixes'?: Array<string>;
    'instances'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecInstancesInner>;
    /**
    * Targets VM instances matching at least one of the following OS types. VM instances must match all supplied criteria for a given OsType to be included.
    */
    'osTypes'?: Array<ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecAssignmentOsTypesInner>;
    /**
    * Targets instances in any of these zones. Leave empty to target instances in any zone. Zonal targeting is uncommon and is supported to facilitate the management of changes by zone.
    */
    'zones'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "groupLabels",
            "baseName": "groupLabels",
            "type": "Array<ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecAssignmentGroupLabelsInner>"
        },
        {
            "name": "instanceNamePrefixes",
            "baseName": "instanceNamePrefixes",
            "type": "Array<string>"
        },
        {
            "name": "instances",
            "baseName": "instances",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupSpecInstancesInner>"
        },
        {
            "name": "osTypes",
            "baseName": "osTypes",
            "type": "Array<ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecAssignmentOsTypesInner>"
        },
        {
            "name": "zones",
            "baseName": "zones",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecAssignment.attributeTypeMap;
    }
}

