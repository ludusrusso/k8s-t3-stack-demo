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
* Will cause the scorecard to show a spark chart.
*/
export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardSparkChartView {
    /**
    * The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes it would not make sense to fetch and align data at one minute intervals. This field is optional and exists only as a hint.
    */
    'minAlignmentPeriod'?: string;
    /**
    * Required. The type of sparkchart to show in this chartView. Possible values: SPARK_CHART_TYPE_UNSPECIFIED, SPARK_LINE, SPARK_BAR
    */
    'sparkChartType': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "minAlignmentPeriod",
            "baseName": "minAlignmentPeriod",
            "type": "string"
        },
        {
            "name": "sparkChartType",
            "baseName": "sparkChartType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardSparkChartView.attributeTypeMap;
    }
}
