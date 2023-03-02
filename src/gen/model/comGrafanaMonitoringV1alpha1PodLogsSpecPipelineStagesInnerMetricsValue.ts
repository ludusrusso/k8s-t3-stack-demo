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
* MetricsStageSpec is an action stage that allows for defining and updating metrics based on data from the extracted map. Created metrics are not pushed to Loki or Prometheus and are instead exposed via the /metrics endpoint of the Grafana Agent pod. The Grafana Agent Operator should be configured with a MetricsInstance that discovers the logging DaemonSet to collect metrics created by this stage.
*/
export class ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMetricsValue {
    /**
    * The action to take against the metric. Required.   Must be either \"inc\" or \"add\" for type: counter or type: histogram. When type: gauge, must be one of \"set\", \"inc\", \"dec\", \"add\", or \"sub\".   \"add\", \"set\", or \"sub\" requires the extracted value to be convertible to a positive float.
    */
    'action': string;
    /**
    * Buckets to create. Bucket values must be convertible to float64s. Extremely large or small numbers are subject to some loss of precision. Only valid for type: histogram.
    */
    'buckets'?: Array<string>;
    /**
    * If true all log line bytes will be counted. Can only be set with matchAll: true and action: add.   Only valid for type: counter.
    */
    'countEntryBytes'?: boolean;
    /**
    * Sets the description for the created metric.
    */
    'description'?: string;
    /**
    * If true all log lines will be counted without attempting to match the source to the extracted map. Mutually exclusive with value.   Only valid for type: counter.
    */
    'matchAll'?: boolean;
    /**
    * Label values on metrics are dynamic which can cause exported metrics to go stale. To prevent unbounded cardinality, any metrics not updated within MaxIdleDuration will be removed.   Must be greater or equal to 1s. Defaults to 5m.
    */
    'maxIdleDuration'?: string;
    /**
    * Sets the custom prefix name for the metric. Defaults to \"promtail_custom_\".
    */
    'prefix'?: string;
    /**
    * Key from the extracted data map to use for the metric. Defaults to the metrics name if not present.
    */
    'source'?: string;
    /**
    * The metric type to create. Must be one of counter, gauge, histogram. Required.
    */
    'type': string;
    /**
    * Filters down source data and only changes the metric if the targeted value exactly matches the provided string. If not present, all data will match.
    */
    'value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "buckets",
            "baseName": "buckets",
            "type": "Array<string>"
        },
        {
            "name": "countEntryBytes",
            "baseName": "countEntryBytes",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "matchAll",
            "baseName": "matchAll",
            "type": "boolean"
        },
        {
            "name": "maxIdleDuration",
            "baseName": "maxIdleDuration",
            "type": "string"
        },
        {
            "name": "prefix",
            "baseName": "prefix",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMetricsValue.attributeTypeMap;
    }
}
