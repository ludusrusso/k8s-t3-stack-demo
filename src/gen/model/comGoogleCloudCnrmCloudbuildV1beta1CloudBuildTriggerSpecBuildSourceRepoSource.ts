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
import { ComGoogleCloudCnrmCloudbuildV1beta1CloudBuildTriggerSpecBuildSourceRepoSourceRepoRef } from './comGoogleCloudCnrmCloudbuildV1beta1CloudBuildTriggerSpecBuildSourceRepoSourceRepoRef';

/**
* Location of the source in a Google Cloud Source Repository.
*/
export class ComGoogleCloudCnrmCloudbuildV1beta1CloudBuildTriggerSpecBuildSourceRepoSource {
    /**
    * Regex matching branches to build. Exactly one a of branch name, tag, or commit SHA must be provided. The syntax of the regular expressions accepted is the syntax accepted by RE2 and  described at https://github.com/google/re2/wiki/Syntax.
    */
    'branchName'?: string;
    /**
    * Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided.
    */
    'commitSha'?: string;
    /**
    * Directory, relative to the source root, in which to run the build. This must be a relative path. If a step\'s dir is specified and is an absolute path,  this value is ignored for that step\'s execution.
    */
    'dir'?: string;
    /**
    * Only trigger a build if the revision regex does NOT match the revision regex.
    */
    'invertRegex'?: boolean;
    /**
    * ID of the project that owns the Cloud Source Repository.  If omitted, the project ID requesting the build is assumed.
    */
    'projectId'?: string;
    'repoRef': ComGoogleCloudCnrmCloudbuildV1beta1CloudBuildTriggerSpecBuildSourceRepoSourceRepoRef;
    /**
    * Substitutions to use in a triggered build. Should only be used with triggers.run.
    */
    'substitutions'?: { [key: string]: string; };
    /**
    * Regex matching tags to build. Exactly one a of branch name, tag, or commit SHA must be provided. The syntax of the regular expressions accepted is the syntax accepted by RE2 and  described at https://github.com/google/re2/wiki/Syntax.
    */
    'tagName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "branchName",
            "baseName": "branchName",
            "type": "string"
        },
        {
            "name": "commitSha",
            "baseName": "commitSha",
            "type": "string"
        },
        {
            "name": "dir",
            "baseName": "dir",
            "type": "string"
        },
        {
            "name": "invertRegex",
            "baseName": "invertRegex",
            "type": "boolean"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "repoRef",
            "baseName": "repoRef",
            "type": "ComGoogleCloudCnrmCloudbuildV1beta1CloudBuildTriggerSpecBuildSourceRepoSourceRepoRef"
        },
        {
            "name": "substitutions",
            "baseName": "substitutions",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "tagName",
            "baseName": "tagName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmCloudbuildV1beta1CloudBuildTriggerSpecBuildSourceRepoSource.attributeTypeMap;
    }
}
