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
import { ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecBasicAlgorithmYarnConfig } from './comGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecBasicAlgorithmYarnConfig';

export class ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecBasicAlgorithm {
    /**
    * Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed. Bounds: . Default: 2m.
    */
    'cooldownPeriod'?: string;
    'yarnConfig': ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecBasicAlgorithmYarnConfig;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cooldownPeriod",
            "baseName": "cooldownPeriod",
            "type": "string"
        },
        {
            "name": "yarnConfig",
            "baseName": "yarnConfig",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecBasicAlgorithmYarnConfig"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecBasicAlgorithm.attributeTypeMap;
    }
}

