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

export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringMetricDescriptorSpecLabelsInner {
    /**
    * Immutable. A human-readable description for the label.
    */
    'description'?: string;
    /**
    * Immutable. The key for this label. The key must meet the following criteria: * Does not exceed 100 characters. * Matches the following regular expression: `a-zA-Z*` * The first character must be an upper- or lower-case letter. * The remaining characters must be letters, digits, or underscores.
    */
    'key'?: string;
    /**
    * Immutable. The type of data that can be assigned to the label. Possible values: STRING, BOOL, INT64
    */
    'valueType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "valueType",
            "baseName": "valueType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringMetricDescriptorSpecLabelsInner.attributeTypeMap;
    }
}

