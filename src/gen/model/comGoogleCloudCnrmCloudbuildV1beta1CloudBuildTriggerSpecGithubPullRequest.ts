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
* filter to match changes in pull requests. Specify only one of \'pull_request\' or \'push\'.
*/
export class ComGoogleCloudCnrmCloudbuildV1beta1CloudBuildTriggerSpecGithubPullRequest {
    /**
    * Regex of branches to match.
    */
    'branch': string;
    /**
    * Whether to block builds on a \"/gcbrun\" comment from a repository owner or collaborator. Possible values: [\"COMMENTS_DISABLED\", \"COMMENTS_ENABLED\", \"COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY\"].
    */
    'commentControl'?: string;
    /**
    * If true, branches that do NOT match the git_ref will trigger a build.
    */
    'invertRegex'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "branch",
            "baseName": "branch",
            "type": "string"
        },
        {
            "name": "commentControl",
            "baseName": "commentControl",
            "type": "string"
        },
        {
            "name": "invertRegex",
            "baseName": "invertRegex",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmCloudbuildV1beta1CloudBuildTriggerSpecGithubPullRequest.attributeTypeMap;
    }
}

