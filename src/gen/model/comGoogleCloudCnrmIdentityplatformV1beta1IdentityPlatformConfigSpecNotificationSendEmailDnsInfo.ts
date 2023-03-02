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
* Information of custom domain DNS verification.
*/
export class ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailDnsInfo {
    /**
    * Whether to use custom domain.
    */
    'useCustomDomain'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "useCustomDomain",
            "baseName": "useCustomDomain",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailDnsInfo.attributeTypeMap;
    }
}

