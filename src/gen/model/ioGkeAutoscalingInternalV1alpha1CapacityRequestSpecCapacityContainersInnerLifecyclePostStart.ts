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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartHttpGet } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartHttpGet';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStartExec } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStartExec';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStartTcpSocket } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStartTcpSocket';

/**
* PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
*/
export class IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStart {
    'exec'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStartExec;
    'httpGet'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartHttpGet;
    'tcpSocket'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStartTcpSocket;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exec",
            "baseName": "exec",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStartExec"
        },
        {
            "name": "httpGet",
            "baseName": "httpGet",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartHttpGet"
        },
        {
            "name": "tcpSocket",
            "baseName": "tcpSocket",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStartTcpSocket"
        }    ];

    static getAttributeTypeMap() {
        return IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStart.attributeTypeMap;
    }
}

