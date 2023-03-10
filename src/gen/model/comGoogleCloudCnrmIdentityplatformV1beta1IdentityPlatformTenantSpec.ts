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
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformTenantSpecMfaConfig } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformTenantSpecMfaConfig';

export class ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformTenantSpec {
    /**
    * Whether to allow email/password user authentication.
    */
    'allowPasswordSignup'?: boolean;
    /**
    * Whether authentication is disabled for the tenant. If true, the users under the disabled tenant are not allowed to sign-in. Admins of the disabled tenant are not able to manage its users.
    */
    'disableAuth'?: boolean;
    /**
    * Display name of the tenant.
    */
    'displayName'?: string;
    /**
    * Whether to enable anonymous user authentication.
    */
    'enableAnonymousUser'?: boolean;
    /**
    * Whether to enable email link user authentication.
    */
    'enableEmailLinkSignin'?: boolean;
    'mfaConfig'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformTenantSpecMfaConfig;
    /**
    * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
    */
    'resourceID'?: string;
    /**
    * A map of <test phone number, fake code> pairs that can be used for MFA. The phone number should be in E.164 format (https://www.itu.int/rec/T-REC-E.164/) and a maximum of 10 pairs can be added (error will be thrown once exceeded).
    */
    'testPhoneNumbers'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowPasswordSignup",
            "baseName": "allowPasswordSignup",
            "type": "boolean"
        },
        {
            "name": "disableAuth",
            "baseName": "disableAuth",
            "type": "boolean"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "enableAnonymousUser",
            "baseName": "enableAnonymousUser",
            "type": "boolean"
        },
        {
            "name": "enableEmailLinkSignin",
            "baseName": "enableEmailLinkSignin",
            "type": "boolean"
        },
        {
            "name": "mfaConfig",
            "baseName": "mfaConfig",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformTenantSpecMfaConfig"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "testPhoneNumbers",
            "baseName": "testPhoneNumbers",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformTenantSpec.attributeTypeMap;
    }
}

