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
* Options for SMS sending.
*/
export class ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendSms {
    /**
    * Whether to use the accept_language header for SMS.
    */
    'useDeviceLocale'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "useDeviceLocale",
            "baseName": "useDeviceLocale",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendSms.attributeTypeMap;
    }
}

