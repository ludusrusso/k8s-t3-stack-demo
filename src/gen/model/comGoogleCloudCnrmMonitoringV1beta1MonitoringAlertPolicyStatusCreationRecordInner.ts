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

export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicyStatusCreationRecordInner {
    /**
    * When the change occurred.
    */
    'mutateTime'?: string;
    /**
    * The email address of the user making the change.
    */
    'mutatedBy'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mutateTime",
            "baseName": "mutateTime",
            "type": "string"
        },
        {
            "name": "mutatedBy",
            "baseName": "mutatedBy",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicyStatusCreationRecordInner.attributeTypeMap;
    }
}

