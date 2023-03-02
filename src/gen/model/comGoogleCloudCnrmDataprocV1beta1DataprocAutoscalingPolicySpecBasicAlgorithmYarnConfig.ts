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
* Required. YARN autoscaling configuration.
*/
export class ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecBasicAlgorithmYarnConfig {
    /**
    * Required. Timeout for YARN graceful decommissioning of Node Managers. Specifies the duration to wait for jobs to complete before forcefully removing workers (and potentially interrupting jobs). Only applicable to downscaling operations.
    */
    'gracefulDecommissionTimeout': string;
    /**
    * Required. Fraction of average YARN pending memory in the last cooldown period for which to remove workers. A scale-down factor of 1 will result in scaling down so that there is no available memory remaining after the update (more aggressive scaling). A scale-down factor of 0 disables removing workers, which can be beneficial for autoscaling a single job. See .
    */
    'scaleDownFactor': number;
    /**
    * Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change. Bounds: . Default: 0.0.
    */
    'scaleDownMinWorkerFraction'?: number;
    /**
    * Required. Fraction of average YARN pending memory in the last cooldown period for which to add workers. A scale-up factor of 1.0 will result in scaling up so that there is no pending memory remaining after the update (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling). See .
    */
    'scaleUpFactor': number;
    /**
    * Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change. Bounds: . Default: 0.0.
    */
    'scaleUpMinWorkerFraction'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "gracefulDecommissionTimeout",
            "baseName": "gracefulDecommissionTimeout",
            "type": "string"
        },
        {
            "name": "scaleDownFactor",
            "baseName": "scaleDownFactor",
            "type": "number"
        },
        {
            "name": "scaleDownMinWorkerFraction",
            "baseName": "scaleDownMinWorkerFraction",
            "type": "number"
        },
        {
            "name": "scaleUpFactor",
            "baseName": "scaleUpFactor",
            "type": "number"
        },
        {
            "name": "scaleUpMinWorkerFraction",
            "baseName": "scaleUpMinWorkerFraction",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecBasicAlgorithmYarnConfig.attributeTypeMap;
    }
}
