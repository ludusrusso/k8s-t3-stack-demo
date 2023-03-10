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
import { ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner } from './comGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusClient } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusClient';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotification } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotification';
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusSignIn } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusSignIn';

export class ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatus {
    'client'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusClient;
    /**
    * Conditions represent the latest available observation of the resource\'s current state.
    */
    'conditions'?: Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>;
    'notification'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotification;
    /**
    * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
    */
    'observedGeneration'?: number;
    'signIn'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusSignIn;
    /**
    * Output only. The subtype of this config. Possible values: SUBTYPE_UNSPECIFIED, IDENTITY_PLATFORM, FIREBASE_AUTH
    */
    'subtype'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "client",
            "baseName": "client",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusClient"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>"
        },
        {
            "name": "notification",
            "baseName": "notification",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusNotification"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        },
        {
            "name": "signIn",
            "baseName": "signIn",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatusSignIn"
        },
        {
            "name": "subtype",
            "baseName": "subtype",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigStatus.attributeTypeMap;
    }
}

