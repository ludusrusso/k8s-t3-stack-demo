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
* Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
*/
export class IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerReadinessProbe {
    'exec'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStartExec;
    /**
    * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
    */
    'failureThreshold'?: number;
    'httpGet'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartHttpGet;
    /**
    * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
    */
    'initialDelaySeconds'?: number;
    /**
    * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
    */
    'periodSeconds'?: number;
    /**
    * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1.
    */
    'successThreshold'?: number;
    'tcpSocket'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStartTcpSocket;
    /**
    * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
    */
    'timeoutSeconds'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exec",
            "baseName": "exec",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStartExec"
        },
        {
            "name": "failureThreshold",
            "baseName": "failureThreshold",
            "type": "number"
        },
        {
            "name": "httpGet",
            "baseName": "httpGet",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartHttpGet"
        },
        {
            "name": "initialDelaySeconds",
            "baseName": "initialDelaySeconds",
            "type": "number"
        },
        {
            "name": "periodSeconds",
            "baseName": "periodSeconds",
            "type": "number"
        },
        {
            "name": "successThreshold",
            "baseName": "successThreshold",
            "type": "number"
        },
        {
            "name": "tcpSocket",
            "baseName": "tcpSocket",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStartTcpSocket"
        },
        {
            "name": "timeoutSeconds",
            "baseName": "timeoutSeconds",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerReadinessProbe.attributeTypeMap;
    }
}

