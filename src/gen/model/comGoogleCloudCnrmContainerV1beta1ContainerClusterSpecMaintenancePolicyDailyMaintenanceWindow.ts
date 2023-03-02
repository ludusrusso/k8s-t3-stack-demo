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
* Time window specified for daily maintenance operations. Specify start_time in RFC3339 format \"HH:MM”, where HH : [00-23] and MM : [00-59] GMT.
*/
export class ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMaintenancePolicyDailyMaintenanceWindow {
    'duration'?: string;
    'startTime': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMaintenancePolicyDailyMaintenanceWindow.attributeTypeMap;
    }
}
