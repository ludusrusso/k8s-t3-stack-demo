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
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionAbsentAggregationsInner } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionAbsentAggregationsInner';
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionAbsentTrigger } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionAbsentTrigger';

/**
* A condition that checks that a time series continues to receive new data points.
*/
export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionAbsent {
    /**
    * Specifies the alignment of data points in individual time series as well as how to combine the retrieved time series together (such as when aggregating multiple streams on each resource to a single stream for each resource or when aggregating streams across all members of a group of resources). Multiple aggregations are applied in the order specified.
    */
    'aggregations'?: Array<ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionAbsentAggregationsInner>;
    /**
    * The amount of time that a time series must fail to report new data to be considered failing. Currently, only values that are a multiple of a minute--e.g. 60s, 120s, or 300s --are supported.
    */
    'duration': string;
    /**
    * A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length.
    */
    'filter'?: string;
    'trigger'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionAbsentTrigger;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "aggregations",
            "baseName": "aggregations",
            "type": "Array<ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionAbsentAggregationsInner>"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "string"
        },
        {
            "name": "trigger",
            "baseName": "trigger",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionAbsentTrigger"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInnerConditionAbsent.attributeTypeMap;
    }
}
