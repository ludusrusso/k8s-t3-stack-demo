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
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBasedDistributionCut } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBasedDistributionCut';
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBasedGoodTotalRatio } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBasedGoodTotalRatio';

/**
* Request-based SLIs
*/
export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBased {
    'distributionCut'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBasedDistributionCut;
    'goodTotalRatio'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBasedGoodTotalRatio;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "distributionCut",
            "baseName": "distributionCut",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBasedDistributionCut"
        },
        {
            "name": "goodTotalRatio",
            "baseName": "goodTotalRatio",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBasedGoodTotalRatio"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveSpecServiceLevelIndicatorRequestBased.attributeTypeMap;
    }
}

