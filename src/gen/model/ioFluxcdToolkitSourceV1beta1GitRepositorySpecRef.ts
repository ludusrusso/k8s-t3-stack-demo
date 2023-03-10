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
* The Git reference to checkout and monitor for changes, defaults to master branch.
*/
export class IoFluxcdToolkitSourceV1beta1GitRepositorySpecRef {
    /**
    * The Git branch to checkout, defaults to master.
    */
    'branch'?: string;
    /**
    * The Git commit SHA to checkout, if specified Tag filters will be ignored.
    */
    'commit'?: string;
    /**
    * The Git tag semver expression, takes precedence over Tag.
    */
    'semver'?: string;
    /**
    * The Git tag to checkout, takes precedence over Branch.
    */
    'tag'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "branch",
            "baseName": "branch",
            "type": "string"
        },
        {
            "name": "commit",
            "baseName": "commit",
            "type": "string"
        },
        {
            "name": "semver",
            "baseName": "semver",
            "type": "string"
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitSourceV1beta1GitRepositorySpecRef.attributeTypeMap;
    }
}

