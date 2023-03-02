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

export class ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecAssignmentOsTypesInner {
    /**
    * Targets VM instances with OS Inventory enabled and having the following OS architecture.
    */
    'osArchitecture'?: string;
    /**
    * Targets VM instances with OS Inventory enabled and having the following OS short name, for example \"debian\" or \"windows\".
    */
    'osShortName'?: string;
    /**
    * Targets VM instances with OS Inventory enabled and having the following following OS version.
    */
    'osVersion'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "osArchitecture",
            "baseName": "osArchitecture",
            "type": "string"
        },
        {
            "name": "osShortName",
            "baseName": "osShortName",
            "type": "string"
        },
        {
            "name": "osVersion",
            "baseName": "osVersion",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecAssignmentOsTypesInner.attributeTypeMap;
    }
}

