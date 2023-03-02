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
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformOAuthIDPConfigSpecClientSecret } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformOAuthIDPConfigSpecClientSecret';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformOAuthIDPConfigSpecResponseType } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformOAuthIDPConfigSpecResponseType';

export class ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformOAuthIDPConfigSpec {
    /**
    * The client id of an OAuth client.
    */
    'clientId'?: string;
    'clientSecret'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformOAuthIDPConfigSpecClientSecret;
    /**
    * The config\'s display name set by developers.
    */
    'displayName'?: string;
    /**
    * True if allows the user to sign in with the provider.
    */
    'enabled'?: boolean;
    /**
    * For OIDC Idps, the issuer identifier.
    */
    'issuer'?: string;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    'responseType'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformOAuthIDPConfigSpecResponseType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string"
        },
        {
            "name": "clientSecret",
            "baseName": "clientSecret",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformOAuthIDPConfigSpecClientSecret"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "responseType",
            "baseName": "responseType",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformOAuthIDPConfigSpecResponseType"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformOAuthIDPConfigSpec.attributeTypeMap;
    }
}

