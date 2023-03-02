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
import { ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecBasicConditionsInnerDevicePolicyOsConstraintsInner } from './comGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecBasicConditionsInnerDevicePolicyOsConstraintsInner';

/**
* Device specific restrictions, all restrictions must hold for the Condition to be true. If not specified, all devices are allowed.
*/
export class ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecBasicConditionsInnerDevicePolicy {
    /**
    * A list of allowed device management levels. An empty list allows all management levels. Possible values: [\"MANAGEMENT_UNSPECIFIED\", \"NONE\", \"BASIC\", \"COMPLETE\"].
    */
    'allowedDeviceManagementLevels'?: Array<string>;
    /**
    * A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: [\"ENCRYPTION_UNSPECIFIED\", \"ENCRYPTION_UNSUPPORTED\", \"UNENCRYPTED\", \"ENCRYPTED\"].
    */
    'allowedEncryptionStatuses'?: Array<string>;
    /**
    * A list of allowed OS versions. An empty list allows all types and all versions.
    */
    'osConstraints'?: Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecBasicConditionsInnerDevicePolicyOsConstraintsInner>;
    /**
    * Whether the device needs to be approved by the customer admin.
    */
    'requireAdminApproval'?: boolean;
    /**
    * Whether the device needs to be corp owned.
    */
    'requireCorpOwned'?: boolean;
    /**
    * Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.
    */
    'requireScreenLock'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowedDeviceManagementLevels",
            "baseName": "allowedDeviceManagementLevels",
            "type": "Array<string>"
        },
        {
            "name": "allowedEncryptionStatuses",
            "baseName": "allowedEncryptionStatuses",
            "type": "Array<string>"
        },
        {
            "name": "osConstraints",
            "baseName": "osConstraints",
            "type": "Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecBasicConditionsInnerDevicePolicyOsConstraintsInner>"
        },
        {
            "name": "requireAdminApproval",
            "baseName": "requireAdminApproval",
            "type": "boolean"
        },
        {
            "name": "requireCorpOwned",
            "baseName": "requireCorpOwned",
            "type": "boolean"
        },
        {
            "name": "requireScreenLock",
            "baseName": "requireScreenLock",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecBasicConditionsInnerDevicePolicy.attributeTypeMap;
    }
}
