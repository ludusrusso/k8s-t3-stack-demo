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
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailChangeEmailTemplate } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailChangeEmailTemplate';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailDnsInfo } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailDnsInfo';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailResetPasswordTemplate } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailResetPasswordTemplate';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailRevertSecondFactorAdditionTemplate } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailRevertSecondFactorAdditionTemplate';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailSmtp } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailSmtp';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailVerifyEmailTemplate } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailVerifyEmailTemplate';

/**
* Options for email sending.
*/
export class ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmail {
    /**
    * action url in email template.
    */
    'callbackUri'?: string;
    'changeEmailTemplate'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailChangeEmailTemplate;
    'dnsInfo'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailDnsInfo;
    /**
    * The method used for sending an email. Possible values: METHOD_UNSPECIFIED, DEFAULT, CUSTOM_SMTP
    */
    'method'?: string;
    'resetPasswordTemplate'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailResetPasswordTemplate;
    'revertSecondFactorAdditionTemplate'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailRevertSecondFactorAdditionTemplate;
    'smtp'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailSmtp;
    'verifyEmailTemplate'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailVerifyEmailTemplate;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "callbackUri",
            "baseName": "callbackUri",
            "type": "string"
        },
        {
            "name": "changeEmailTemplate",
            "baseName": "changeEmailTemplate",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailChangeEmailTemplate"
        },
        {
            "name": "dnsInfo",
            "baseName": "dnsInfo",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailDnsInfo"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        },
        {
            "name": "resetPasswordTemplate",
            "baseName": "resetPasswordTemplate",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailResetPasswordTemplate"
        },
        {
            "name": "revertSecondFactorAdditionTemplate",
            "baseName": "revertSecondFactorAdditionTemplate",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailRevertSecondFactorAdditionTemplate"
        },
        {
            "name": "smtp",
            "baseName": "smtp",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailSmtp"
        },
        {
            "name": "verifyEmailTemplate",
            "baseName": "verifyEmailTemplate",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmailVerifyEmailTemplate"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotificationSendEmail.attributeTypeMap;
    }
}

