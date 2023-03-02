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
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMaintenancePolicyMaintenanceExclusionInnerExclusionOptions } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMaintenancePolicyMaintenanceExclusionInnerExclusionOptions';

export class ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMaintenancePolicyMaintenanceExclusionInner {
    'endTime': string;
    'exclusionName': string;
    'exclusionOptions'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMaintenancePolicyMaintenanceExclusionInnerExclusionOptions;
    'startTime': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "string"
        },
        {
            "name": "exclusionName",
            "baseName": "exclusionName",
            "type": "string"
        },
        {
            "name": "exclusionOptions",
            "baseName": "exclusionOptions",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMaintenancePolicyMaintenanceExclusionInnerExclusionOptions"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMaintenancePolicyMaintenanceExclusionInner.attributeTypeMap;
    }
}
