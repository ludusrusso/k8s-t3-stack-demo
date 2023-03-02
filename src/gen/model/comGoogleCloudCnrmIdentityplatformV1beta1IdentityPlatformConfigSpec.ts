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
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecBlockingFunctions } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecBlockingFunctions';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecClient } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecClient';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMfa } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMfa';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMonitoring } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMonitoring';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMultiTenant } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMultiTenant';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotification } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotification';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecProjectRef } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecProjectRef';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecQuota } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecQuota';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecSignIn } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecSignIn';

export class ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpec {
    /**
    * List of domains authorized for OAuth redirects
    */
    'authorizedDomains'?: Array<string>;
    'blockingFunctions'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecBlockingFunctions;
    'client'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecClient;
    'mfa'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMfa;
    'monitoring'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMonitoring;
    'multiTenant'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMultiTenant;
    'notification'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotification;
    'projectRef': ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecProjectRef;
    'quota'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecQuota;
    'signIn'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecSignIn;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authorizedDomains",
            "baseName": "authorizedDomains",
            "type": "Array<string>"
        },
        {
            "name": "blockingFunctions",
            "baseName": "blockingFunctions",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecBlockingFunctions"
        },
        {
            "name": "client",
            "baseName": "client",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecClient"
        },
        {
            "name": "mfa",
            "baseName": "mfa",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMfa"
        },
        {
            "name": "monitoring",
            "baseName": "monitoring",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMonitoring"
        },
        {
            "name": "multiTenant",
            "baseName": "multiTenant",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMultiTenant"
        },
        {
            "name": "notification",
            "baseName": "notification",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecNotification"
        },
        {
            "name": "projectRef",
            "baseName": "projectRef",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecProjectRef"
        },
        {
            "name": "quota",
            "baseName": "quota",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecQuota"
        },
        {
            "name": "signIn",
            "baseName": "signIn",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecSignIn"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpec.attributeTypeMap;
    }
}

