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

export class ComGoogleCloudCnrmIamV1beta1IAMAuditConfigSpecAuditLogConfigsInner {
    /**
    * Identities that do not cause logging for this type of permission. The format is the same as that for \'members\' in IAMPolicy/IAMPolicyMember.
    */
    'exemptedMembers'?: Array<string>;
    /**
    * Permission type for which logging is to be configured. Must be one of \'DATA_READ\', \'DATA_WRITE\', or \'ADMIN_READ\'.
    */
    'logType': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exemptedMembers",
            "baseName": "exemptedMembers",
            "type": "Array<string>"
        },
        {
            "name": "logType",
            "baseName": "logType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIamV1beta1IAMAuditConfigSpecAuditLogConfigsInner.attributeTypeMap;
    }
}

