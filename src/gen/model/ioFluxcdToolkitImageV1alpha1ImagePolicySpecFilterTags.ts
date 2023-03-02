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
* FilterTags enables filtering for only a subset of tags based on a set of rules. If no rules are provided, all the tags from the repository will be ordered and compared.
*/
export class IoFluxcdToolkitImageV1alpha1ImagePolicySpecFilterTags {
    /**
    * Extract allows a capture group to be extracted from the specified regular expression pattern, useful before tag evaluation.
    */
    'extract'?: string;
    /**
    * Pattern specifies a regular expression pattern used to filter for image tags.
    */
    'pattern'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "extract",
            "baseName": "extract",
            "type": "string"
        },
        {
            "name": "pattern",
            "baseName": "pattern",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitImageV1alpha1ImagePolicySpecFilterTags.attributeTypeMap;
    }
}

