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
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusSignInEmailHashConfig } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusSignInEmailHashConfig';

export class ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusSignInEmail {
    'hashConfig'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusSignInEmailHashConfig;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hashConfig",
            "baseName": "hashConfig",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusSignInEmailHashConfig"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusSignInEmail.attributeTypeMap;
    }
}

