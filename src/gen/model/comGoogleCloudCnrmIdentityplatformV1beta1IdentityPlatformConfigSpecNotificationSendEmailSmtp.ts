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
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailSmtpPassword } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailSmtpPassword';

/**
* Use a custom SMTP relay
*/
export class ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailSmtp {
    /**
    * SMTP relay host
    */
    'host'?: string;
    'password'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailSmtpPassword;
    /**
    * SMTP relay port
    */
    'port'?: number;
    /**
    * SMTP security mode. Possible values: SECURITY_MODE_UNSPECIFIED, SSL, START_TLS
    */
    'securityMode'?: string;
    /**
    * Sender email for the SMTP relay
    */
    'senderEmail'?: string;
    /**
    * SMTP relay username
    */
    'username'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailSmtpPassword"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        },
        {
            "name": "securityMode",
            "baseName": "securityMode",
            "type": "string"
        },
        {
            "name": "senderEmail",
            "baseName": "senderEmail",
            "type": "string"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailSmtp.attributeTypeMap;
    }
}

