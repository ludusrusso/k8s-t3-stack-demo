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
* Display options for the chart.
*/
export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerXyChartChartOptions {
    /**
    * The chart mode. Possible values: MODE_UNSPECIFIED, COLOR, X_RAY, STATS
    */
    'mode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mode",
            "baseName": "mode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerXyChartChartOptions.attributeTypeMap;
    }
}

