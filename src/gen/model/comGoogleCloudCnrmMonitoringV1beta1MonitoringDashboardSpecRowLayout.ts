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
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecRowLayoutRowsInner } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecRowLayoutRowsInner';

/**
* The content is divided into equally spaced rows and the widgets are arranged horizontally.
*/
export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecRowLayout {
    /**
    * The rows of content to display.
    */
    'rows'?: Array<ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecRowLayoutRowsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rows",
            "baseName": "rows",
            "type": "Array<ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecRowLayoutRowsInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecRowLayout.attributeTypeMap;
    }
}

