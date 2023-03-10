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
* `good_total_ratio` is used when the ratio of `good_service` to `total_service` is computed from two `TimeSeries`.
*/
export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBasedGoodTotalRatio {
    /**
    * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying a `TimeSeries` quantifying bad service, either demanded service that was not provided or demanded service that was of inadequate quality. Must have `ValueType = DOUBLE` or `ValueType = INT64` and must have `MetricKind = DELTA` or `MetricKind = CUMULATIVE`.
    */
    'badServiceFilter'?: string;
    /**
    * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying a `TimeSeries` quantifying good service provided. Must have `ValueType = DOUBLE` or `ValueType = INT64` and must have `MetricKind = DELTA` or `MetricKind = CUMULATIVE`.
    */
    'goodServiceFilter'?: string;
    /**
    * A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) specifying a `TimeSeries` quantifying total demanded service. Must have `ValueType = DOUBLE` or `ValueType = INT64` and must have `MetricKind = DELTA` or `MetricKind = CUMULATIVE`.
    */
    'totalServiceFilter'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "badServiceFilter",
            "baseName": "badServiceFilter",
            "type": "string"
        },
        {
            "name": "goodServiceFilter",
            "baseName": "goodServiceFilter",
            "type": "string"
        },
        {
            "name": "totalServiceFilter",
            "baseName": "totalServiceFilter",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBasedGoodTotalRatio.attributeTypeMap;
    }
}

