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
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorBasicSli } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorBasicSli';
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBased } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBased';
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorWindowsBased } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorWindowsBased';

/**
* The definition of good service, used to measure and calculate the quality of the `Service`\'s performance with respect to a single aspect of service quality.
*/
export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicator {
    'basicSli'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorBasicSli;
    'requestBased'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBased;
    'windowsBased'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorWindowsBased;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "basicSli",
            "baseName": "basicSli",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorBasicSli"
        },
        {
            "name": "requestBased",
            "baseName": "requestBased",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBased"
        },
        {
            "name": "windowsBased",
            "baseName": "windowsBased",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorWindowsBased"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicator.attributeTypeMap;
    }
}

