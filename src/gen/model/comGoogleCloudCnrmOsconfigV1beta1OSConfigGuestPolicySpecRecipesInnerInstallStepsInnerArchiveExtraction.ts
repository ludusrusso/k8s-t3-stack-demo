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
* Extracts an archive into the specified directory.
*/
export class ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecRecipesInnerInstallStepsInnerArchiveExtraction {
    /**
    * Required. The id of the relevant artifact in the recipe.
    */
    'artifactId'?: string;
    /**
    * Directory to extract archive to. Defaults to `/` on Linux or `C:` on Windows.
    */
    'destination'?: string;
    /**
    * Required. The type of the archive to extract. Possible values: TYPE_UNSPECIFIED, VALIDATION, DESIRED_STATE_CHECK, DESIRED_STATE_ENFORCEMENT, DESIRED_STATE_CHECK_POST_ENFORCEMENT
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "artifactId",
            "baseName": "artifactId",
            "type": "string"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecRecipesInnerInstallStepsInnerArchiveExtraction.attributeTypeMap;
    }
}
