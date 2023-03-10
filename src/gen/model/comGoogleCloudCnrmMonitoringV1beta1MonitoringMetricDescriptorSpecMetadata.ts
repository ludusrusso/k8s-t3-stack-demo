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
* Immutable. Optional. Metadata which can be used to guide usage of the metric.
*/
export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringMetricDescriptorSpecMetadata {
    /**
    * Immutable. The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors.
    */
    'ingestDelay'?: string;
    /**
    * Immutable. Deprecated. Must use the MetricDescriptor.launch_stage instead. Possible values: LAUNCH_STAGE_UNSPECIFIED, UNIMPLEMENTED, PRELAUNCH, EARLY_ACCESS, ALPHA, BETA, GA, DEPRECATED
    */
    'launchStage'?: string;
    /**
    * Immutable. The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period.
    */
    'samplePeriod'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ingestDelay",
            "baseName": "ingestDelay",
            "type": "string"
        },
        {
            "name": "launchStage",
            "baseName": "launchStage",
            "type": "string"
        },
        {
            "name": "samplePeriod",
            "baseName": "samplePeriod",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringMetricDescriptorSpecMetadata.attributeTypeMap;
    }
}

