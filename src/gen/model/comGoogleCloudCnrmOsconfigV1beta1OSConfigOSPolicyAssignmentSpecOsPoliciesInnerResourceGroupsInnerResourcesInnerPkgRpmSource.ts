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
import { ComGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInnerResourcesInnerExecEnforceFileGcs } from './comGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInnerResourcesInnerExecEnforceFileGcs';
import { ComGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInnerResourcesInnerExecEnforceFileRemote } from './comGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInnerResourcesInnerExecEnforceFileRemote';

/**
* Required. An rpm package.
*/
export class ComGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInnerResourcesInnerPkgRpmSource {
    /**
    * Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
    */
    'allowInsecure'?: boolean;
    'gcs'?: ComGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInnerResourcesInnerExecEnforceFileGcs;
    /**
    * A local path within the VM to use.
    */
    'localPath'?: string;
    'remote'?: ComGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInnerResourcesInnerExecEnforceFileRemote;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowInsecure",
            "baseName": "allowInsecure",
            "type": "boolean"
        },
        {
            "name": "gcs",
            "baseName": "gcs",
            "type": "ComGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInnerResourcesInnerExecEnforceFileGcs"
        },
        {
            "name": "localPath",
            "baseName": "localPath",
            "type": "string"
        },
        {
            "name": "remote",
            "baseName": "remote",
            "type": "ComGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInnerResourcesInnerExecEnforceFileRemote"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInnerResourcesInnerPkgRpmSource.attributeTypeMap;
    }
}

