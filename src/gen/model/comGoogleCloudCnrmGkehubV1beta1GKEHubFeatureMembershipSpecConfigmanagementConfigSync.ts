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
import { ComGoogleCloudCnrmGkehubV1beta1GKEHubFeatureMembershipSpecConfigmanagementConfigSyncGit } from './comGoogleCloudCnrmGkehubV1beta1GKEHubFeatureMembershipSpecConfigmanagementConfigSyncGit';

/**
* Config Sync configuration for the cluster.
*/
export class ComGoogleCloudCnrmGkehubV1beta1GKEHubFeatureMembershipSpecConfigmanagementConfigSync {
    'git'?: ComGoogleCloudCnrmGkehubV1beta1GKEHubFeatureMembershipSpecConfigmanagementConfigSyncGit;
    /**
    * Specifies whether the Config Sync Repo is in \"hierarchical\" or \"unstructured\" mode.
    */
    'sourceFormat'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "git",
            "baseName": "git",
            "type": "ComGoogleCloudCnrmGkehubV1beta1GKEHubFeatureMembershipSpecConfigmanagementConfigSyncGit"
        },
        {
            "name": "sourceFormat",
            "baseName": "sourceFormat",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmGkehubV1beta1GKEHubFeatureMembershipSpecConfigmanagementConfigSync.attributeTypeMap;
    }
}
