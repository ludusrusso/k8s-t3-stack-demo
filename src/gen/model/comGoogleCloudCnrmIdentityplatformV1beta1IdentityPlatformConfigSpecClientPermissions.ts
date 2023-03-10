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
* Configuration related to restricting a user\'s ability to affect their account.
*/
export class ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecClientPermissions {
    /**
    * When true, end users cannot delete their account on the associated project through any of our API methods
    */
    'disabledUserDeletion'?: boolean;
    /**
    * When true, end users cannot sign up for a new account on the associated project through any of our API methods
    */
    'disabledUserSignup'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "disabledUserDeletion",
            "baseName": "disabledUserDeletion",
            "type": "boolean"
        },
        {
            "name": "disabledUserSignup",
            "baseName": "disabledUserSignup",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecClientPermissions.attributeTypeMap;
    }
}

