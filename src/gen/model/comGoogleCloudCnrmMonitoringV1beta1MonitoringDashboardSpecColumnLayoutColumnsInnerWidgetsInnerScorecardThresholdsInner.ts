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

export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardThresholdsInner {
    /**
    * The state color for this threshold. Color is not allowed in a XyChart. Possible values: COLOR_UNSPECIFIED, GREY, BLUE, GREEN, YELLOW, ORANGE, RED
    */
    'color'?: string;
    /**
    * The direction for the current threshold. Direction is not allowed in a XyChart. Possible values: DIRECTION_UNSPECIFIED, ABOVE, BELOW
    */
    'direction'?: string;
    /**
    * A label for the threshold.
    */
    'label'?: string;
    /**
    * The value of the threshold. The value should be defined in the native scale of the metric.
    */
    'value'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "color",
            "baseName": "color",
            "type": "string"
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringDashboardSpecColumnLayoutColumnsInnerWidgetsInnerScorecardThresholdsInner.attributeTypeMap;
    }
}

