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
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterPickTimeSeriesFilter } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterPickTimeSeriesFilter';
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatioDenominator } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatioDenominator';
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatioNumerator } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatioNumerator';
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatioSecondaryAggregation } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatioSecondaryAggregation';

/**
* Parameters to fetch a ratio between two time series filters.
*/
export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatio {
    'denominator'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatioDenominator;
    'numerator'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatioNumerator;
    'pickTimeSeriesFilter'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterPickTimeSeriesFilter;
    'secondaryAggregation'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatioSecondaryAggregation;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "denominator",
            "baseName": "denominator",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatioDenominator"
        },
        {
            "name": "numerator",
            "baseName": "numerator",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatioNumerator"
        },
        {
            "name": "pickTimeSeriesFilter",
            "baseName": "pickTimeSeriesFilter",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterPickTimeSeriesFilter"
        },
        {
            "name": "secondaryAggregation",
            "baseName": "secondaryAggregation",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatioSecondaryAggregation"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardTimeSeriesQueryTimeSeriesFilterRatio.attributeTypeMap;
    }
}

