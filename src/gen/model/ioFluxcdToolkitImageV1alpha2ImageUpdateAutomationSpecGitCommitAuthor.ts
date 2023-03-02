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
* Author gives the email and optionally the name to use as the author of commits.
*/
export class IoFluxcdToolkitImageV1alpha2ImageUpdateAutomationSpecGitCommitAuthor {
    /**
    * Email gives the email to provide when making a commit.
    */
    'email': string;
    /**
    * Name gives the name to provide when making a commit.
    */
    'name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitImageV1alpha2ImageUpdateAutomationSpecGitCommitAuthor.attributeTypeMap;
    }
}

