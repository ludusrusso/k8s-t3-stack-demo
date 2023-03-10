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
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInner } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInner';

/**
* The content is divided into equally spaced columns and the widgets are arranged vertically.
*/
export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayout {
    /**
    * The columns of content to display.
    */
    'columns'?: Array<ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "columns",
            "baseName": "columns",
            "type": "Array<ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayout.attributeTypeMap;
    }
}

