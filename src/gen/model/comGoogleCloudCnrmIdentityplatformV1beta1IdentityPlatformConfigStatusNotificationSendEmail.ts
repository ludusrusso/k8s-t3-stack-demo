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
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmailChangeEmailTemplate } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmailChangeEmailTemplate';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmailDnsInfo } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmailDnsInfo';

export class ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmail {
    'changeEmailTemplate'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmailChangeEmailTemplate;
    'dnsInfo'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmailDnsInfo;
    'resetPasswordTemplate'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmailChangeEmailTemplate;
    'revertSecondFactorAdditionTemplate'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmailChangeEmailTemplate;
    'verifyEmailTemplate'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmailChangeEmailTemplate;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "changeEmailTemplate",
            "baseName": "changeEmailTemplate",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmailChangeEmailTemplate"
        },
        {
            "name": "dnsInfo",
            "baseName": "dnsInfo",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmailDnsInfo"
        },
        {
            "name": "resetPasswordTemplate",
            "baseName": "resetPasswordTemplate",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmailChangeEmailTemplate"
        },
        {
            "name": "revertSecondFactorAdditionTemplate",
            "baseName": "revertSecondFactorAdditionTemplate",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmailChangeEmailTemplate"
        },
        {
            "name": "verifyEmailTemplate",
            "baseName": "verifyEmailTemplate",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmailChangeEmailTemplate"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotificationSendEmail.attributeTypeMap;
    }
}

