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

/**
* A condition that checks for log messages matching given constraints. If set, no other conditions can be present.
*/
export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionMatchedLog {
    /**
    * A logs-based filter.
    */
    'filter': string;
    /**
    * A map from a label key to an extractor expression, which is used to extract the value for this label key. Each entry in this map is a specification for how data should be extracted from log entries that match filter. Each combination of extracted values is treated as a separate rule for the purposes of triggering notifications. Label keys and corresponding values can be used in notifications generated by this condition.
    */
    'labelExtractors'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filter",
            "baseName": "filter",
            "type": "string"
        },
        {
            "name": "labelExtractors",
            "baseName": "labelExtractors",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionMatchedLog.attributeTypeMap;
    }
}

