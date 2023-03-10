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
import { ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterProjectsInner } from './comGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterProjectsInner';

export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerLogsPanel {
    /**
    * A filter that chooses which log entries to return. See [Advanced Logs Queries](https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries.
    */
    'filter'?: string;
    'resourceNames'?: Array<ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterProjectsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filter",
            "baseName": "filter",
            "type": "string"
        },
        {
            "name": "resourceNames",
            "baseName": "resourceNames",
            "type": "Array<ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterProjectsInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerLogsPanel.attributeTypeMap;
    }
}

