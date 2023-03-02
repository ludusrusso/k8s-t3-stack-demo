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
* Configuration for how to query telemetry on a Service.
*/
export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceSpecTelemetry {
    /**
    * The full name of the resource that defines this service. Formatted as described in https://cloud.google.com/apis/design/resource_names.
    */
    'resourceName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resourceName",
            "baseName": "resourceName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceSpecTelemetry.attributeTypeMap;
    }
}

