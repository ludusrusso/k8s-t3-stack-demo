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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerEnvInnerValueFromResourceFieldRef } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerEnvInnerValueFromResourceFieldRef';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerEnvInnerValueFromConfigMapKeyRef } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerEnvInnerValueFromConfigMapKeyRef';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerEnvInnerValueFromFieldRef } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerEnvInnerValueFromFieldRef';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerEnvInnerValueFromSecretKeyRef } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerEnvInnerValueFromSecretKeyRef';

/**
* Source for the environment variable\'s value. Cannot be used if value is not empty.
*/
export class IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerEnvInnerValueFrom {
    'configMapKeyRef'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerEnvInnerValueFromConfigMapKeyRef;
    'fieldRef'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerEnvInnerValueFromFieldRef;
    'resourceFieldRef'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerEnvInnerValueFromResourceFieldRef;
    'secretKeyRef'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerEnvInnerValueFromSecretKeyRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "configMapKeyRef",
            "baseName": "configMapKeyRef",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerEnvInnerValueFromConfigMapKeyRef"
        },
        {
            "name": "fieldRef",
            "baseName": "fieldRef",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerEnvInnerValueFromFieldRef"
        },
        {
            "name": "resourceFieldRef",
            "baseName": "resourceFieldRef",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerEnvInnerValueFromResourceFieldRef"
        },
        {
            "name": "secretKeyRef",
            "baseName": "secretKeyRef",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerEnvInnerValueFromSecretKeyRef"
        }    ];

    static getAttributeTypeMap() {
        return IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerEnvInnerValueFrom.attributeTypeMap;
    }
}
