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
* Output only. The template to use when sending an SMS.
*/
export class ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendSmsSmsTemplate {
    /**
    * Output only. The SMS\'s content. Can contain the following placeholders which will be replaced with the appropriate values: %APP_NAME% - For Android or iOS apps, the app\'s display name. For web apps, the domain hosting the application. %LOGIN_CODE% - The OOB code being sent in the SMS.
    */
    'content'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendSmsSmsTemplate.attributeTypeMap;
    }
}

