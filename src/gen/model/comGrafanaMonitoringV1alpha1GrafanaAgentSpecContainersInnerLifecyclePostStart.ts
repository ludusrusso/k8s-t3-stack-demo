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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartExec } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartExec';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartHttpGet } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartHttpGet';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartTcpSocket } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartTcpSocket';

/**
* PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStart {
    'exec'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartExec;
    'httpGet'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartHttpGet;
    'tcpSocket'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartTcpSocket;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exec",
            "baseName": "exec",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartExec"
        },
        {
            "name": "httpGet",
            "baseName": "httpGet",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartHttpGet"
        },
        {
            "name": "tcpSocket",
            "baseName": "tcpSocket",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartTcpSocket"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStart.attributeTypeMap;
    }
}

