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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecLogsClientsInner } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecLogsClientsInner';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecLogsInstanceNamespaceSelector } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecLogsInstanceNamespaceSelector';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecLogsInstanceSelector } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecLogsInstanceSelector';

/**
* Logs controls the logging subsystem of the Agent and settings unique to logging-specific pods that are deployed.
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecLogs {
    /**
    * Global set of clients to use when a discovered LogsInstance does not have any clients defined.
    */
    'clients'?: Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecLogsClientsInner>;
    /**
    * EnforcedNamespaceLabel enforces adding a namespace label of origin for each metric that is user-created. The label value will always be the namespace of the object that is being created.
    */
    'enforcedNamespaceLabel'?: string;
    /**
    * IgnoreNamespaceSelectors, if true, will ignore NamespaceSelector settings from the PodLogs configs, and they will only discover endpoints within their current namespace.
    */
    'ignoreNamespaceSelectors'?: boolean;
    'instanceNamespaceSelector'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecLogsInstanceNamespaceSelector;
    'instanceSelector'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecLogsInstanceSelector;
    /**
    * LogsExternalLabelName is the name of the external label used to denote Grafana Agent cluster. Defaults to \"cluster.\" External label will _not_ be added when value is set to the empty string.
    */
    'logsExternalLabelName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clients",
            "baseName": "clients",
            "type": "Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecLogsClientsInner>"
        },
        {
            "name": "enforcedNamespaceLabel",
            "baseName": "enforcedNamespaceLabel",
            "type": "string"
        },
        {
            "name": "ignoreNamespaceSelectors",
            "baseName": "ignoreNamespaceSelectors",
            "type": "boolean"
        },
        {
            "name": "instanceNamespaceSelector",
            "baseName": "instanceNamespaceSelector",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecLogsInstanceNamespaceSelector"
        },
        {
            "name": "instanceSelector",
            "baseName": "instanceSelector",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecLogsInstanceSelector"
        },
        {
            "name": "logsExternalLabelName",
            "baseName": "logsExternalLabelName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecLogs.attributeTypeMap;
    }
}

