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
* Apply a second aggregation after the ratio is computed.
*/
export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatioSecondaryAggregation {
    /**
    * The `alignment_period` specifies a time interval, in seconds, that is used to divide the data in all the [time series][google.monitoring.v3.TimeSeries] into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.  The value must be at least 60 seconds. If a per-series aligner other than `ALIGN_NONE` is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner `ALIGN_NONE` is specified, then this field is ignored.
    */
    'alignmentPeriod'?: string;
    /**
    * The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.  Not all reducer operations can be applied to all time series. The valid choices depend on the `metric_kind` and the `value_type` of the original time series. Reduction can yield a time series with a different `metric_kind` or `value_type` than the input time series.  Time series data must first be aligned (see `per_series_aligner`) in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified, and must not be `ALIGN_NONE`. An `alignment_period` must also be specified; otherwise, an error is returned. Possible values: REDUCE_NONE, REDUCE_MEAN, REDUCE_MIN, REDUCE_MAX, REDUCE_SUM, REDUCE_STDDEV, REDUCE_COUNT, REDUCE_COUNT_TRUE, REDUCE_COUNT_FALSE, REDUCE_FRACTION_TRUE, REDUCE_PERCENTILE_99, REDUCE_PERCENTILE_95, REDUCE_PERCENTILE_50, REDUCE_PERCENTILE_05, REDUCE_FRACTION_LESS_THAN, REDUCE_MAKE_DISTRIBUTION
    */
    'crossSeriesReducer'?: string;
    /**
    * The set of fields to preserve when `cross_series_reducer` is specified. The `group_by_fields` determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The `cross_series_reducer` is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains `resource.type`.  Fields not specified in `group_by_fields` are aggregated away.  If `group_by_fields` is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If `cross_series_reducer` is not defined, this field is ignored.
    */
    'groupByFields'?: Array<string>;
    /**
    * An `Aligner` describes how to bring the data points in a single time series into temporal alignment. Except for `ALIGN_NONE`, all alignments cause all the data points in an `alignment_period` to be mathematically grouped together, resulting in a single data point for each `alignment_period` with end timestamp at the end of the period.  Not all alignment operations may be applied to all time series. The valid choices depend on the `metric_kind` and `value_type` of the original time series. Alignment can change the `metric_kind` or the `value_type` of the time series.  Time series data must be aligned in order to perform cross-time series reduction. If `cross_series_reducer` is specified, then `per_series_aligner` must be specified and not equal to `ALIGN_NONE` and `alignment_period` must be specified; otherwise, an error is returned.
    */
    'perSeriesAligner'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alignmentPeriod",
            "baseName": "alignmentPeriod",
            "type": "string"
        },
        {
            "name": "crossSeriesReducer",
            "baseName": "crossSeriesReducer",
            "type": "string"
        },
        {
            "name": "groupByFields",
            "baseName": "groupByFields",
            "type": "Array<string>"
        },
        {
            "name": "perSeriesAligner",
            "baseName": "perSeriesAligner",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatioSecondaryAggregation.attributeTypeMap;
    }
}

