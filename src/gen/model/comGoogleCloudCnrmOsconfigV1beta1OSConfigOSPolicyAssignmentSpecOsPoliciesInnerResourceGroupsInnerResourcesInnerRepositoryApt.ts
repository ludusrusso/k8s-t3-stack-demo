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
* An Apt Repository.
*/
export class ComGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInnerResourcesInnerRepositoryApt {
    /**
    * Required. Type of archive files in this repository. Possible values: ARCHIVE_TYPE_UNSPECIFIED, DEB, DEB_SRC
    */
    'archiveType': string;
    /**
    * Required. List of components for this repository. Must contain at least one item.
    */
    'components': Array<string>;
    /**
    * Required. Distribution of this repository.
    */
    'distribution': string;
    /**
    * URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg`.
    */
    'gpgKey'?: string;
    /**
    * Required. URI for this repository.
    */
    'uri': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "archiveType",
            "baseName": "archiveType",
            "type": "string"
        },
        {
            "name": "components",
            "baseName": "components",
            "type": "Array<string>"
        },
        {
            "name": "distribution",
            "baseName": "distribution",
            "type": "string"
        },
        {
            "name": "gpgKey",
            "baseName": "gpgKey",
            "type": "string"
        },
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmOsconfigV1beta1OSConfigOSPolicyAssignmentSpecOsPoliciesInnerResourceGroupsInnerResourcesInnerRepositoryApt.attributeTypeMap;
    }
}

