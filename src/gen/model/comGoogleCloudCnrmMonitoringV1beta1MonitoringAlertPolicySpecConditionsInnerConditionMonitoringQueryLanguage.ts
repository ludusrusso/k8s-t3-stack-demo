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
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionMonitoringQueryLanguageTrigger } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionMonitoringQueryLanguageTrigger';

/**
* A Monitoring Query Language query that outputs a boolean stream.
*/
export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionMonitoringQueryLanguage {
    /**
    * The amount of time that a time series must violate the threshold to be considered failing. Currently, only values that are a multiple of a minute--e.g., 0, 60, 120, or 300 seconds--are supported. If an invalid value is given, an error will be returned. When choosing a duration, it is useful to keep in mind the frequency of the underlying time series data (which may also be affected by any alignments specified in the aggregations field); a good duration is long enough so that a single outlier does not generate spurious alerts, but short enough that unhealthy states are detected and alerted on quickly.
    */
    'duration': string;
    /**
    * Monitoring Query Language query that outputs a boolean stream.
    */
    'query': string;
    'trigger'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionMonitoringQueryLanguageTrigger;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string"
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "string"
        },
        {
            "name": "trigger",
            "baseName": "trigger",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionMonitoringQueryLanguageTrigger"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionMonitoringQueryLanguage.attributeTypeMap;
    }
}
