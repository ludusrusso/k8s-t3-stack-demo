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
* Copies a file onto the instance.
*/
export class ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecRecipesInnerInstallStepsInnerFileCopy {
    /**
    * Required. The id of the relevant artifact in the recipe.
    */
    'artifactId'?: string;
    /**
    * Required. The absolute path on the instance to put the file.
    */
    'destination'?: string;
    /**
    * Whether to allow this step to overwrite existing files. If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false.
    */
    'overwrite'?: boolean;
    /**
    * Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4
    */
    'permissions'?: string;

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
            "name": "overwrite",
            "baseName": "overwrite",
            "type": "boolean"
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecRecipesInnerInstallStepsInnerFileCopy.attributeTypeMap;
    }
}

