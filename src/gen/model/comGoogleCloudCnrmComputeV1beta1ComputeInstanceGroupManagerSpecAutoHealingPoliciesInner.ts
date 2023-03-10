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
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecAutoHealingPoliciesInnerHealthCheckRef } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecAutoHealingPoliciesInnerHealthCheckRef';

export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecAutoHealingPoliciesInner {
    'healthCheckRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecAutoHealingPoliciesInnerHealthCheckRef;
    /**
    * The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. This initial delay allows instances to initialize and run their startup scripts before the instance group determines that they are UNHEALTHY. This prevents the managed instance group from recreating its instances prematurely. This value must be from range [0, 3600].
    */
    'initialDelaySec'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "healthCheckRef",
            "baseName": "healthCheckRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecAutoHealingPoliciesInnerHealthCheckRef"
        },
        {
            "name": "initialDelaySec",
            "baseName": "initialDelaySec",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerSpecAutoHealingPoliciesInner.attributeTypeMap;
    }
}

