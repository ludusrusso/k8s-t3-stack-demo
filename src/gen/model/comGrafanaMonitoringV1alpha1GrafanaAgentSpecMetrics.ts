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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsArbitraryFSAccessThroughSMs } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsArbitraryFSAccessThroughSMs';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsInstanceNamespaceSelector } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsInstanceNamespaceSelector';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsInstanceSelector } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsInstanceSelector';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInner } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInner';

/**
* Metrics controls the metrics subsystem of the Agent and settings unique to metrics-specific pods that are deployed.
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetrics {
    'arbitraryFSAccessThroughSMs'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsArbitraryFSAccessThroughSMs;
    /**
    * EnforcedNamespaceLabel enforces adding a namespace label of origin for each metric that is user-created. The label value will always be the namespace of the object that is being created.
    */
    'enforcedNamespaceLabel'?: string;
    /**
    * EnforcedSampleLimit defines global limit on the number of scraped samples that will be accepted. This overrides any SampleLimit set per ServiceMonitor and/or PodMonitor. It is meant to be used by admins to enforce the SampleLimit to keep the overall number of samples and series under the desired limit. Note that if a SampleLimit from a ServiceMonitor or PodMonitor is lower, that value will be used instead.
    */
    'enforcedSampleLimit'?: number;
    /**
    * EnforcedTargetLimit defines a global limit on the number of scraped targets. This overrides any TargetLimit set per ServiceMonitor and/or PodMonitor. It is meant to be used by admins to enforce the TargetLimit to keep the overall number of targets under the desired limit. Note that if a TargetLimit from a ServiceMonitor or PodMonitor is higher, that value will be used instead.
    */
    'enforcedTargetLimit'?: number;
    /**
    * ExternalLabels are labels to add to any time series when sending data over remote_write.
    */
    'externalLabels'?: { [key: string]: string; };
    /**
    * IgnoreNamespaceSelectors, if true, will ignore NamespaceSelector settings from the PodMonitor and ServiceMonitor configs, and they will only discover endpoints within their current namespace.
    */
    'ignoreNamespaceSelectors'?: boolean;
    'instanceNamespaceSelector'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsInstanceNamespaceSelector;
    'instanceSelector'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsInstanceSelector;
    /**
    * MetricsExternalLabelName is the name of the external label used to denote Grafana Agent cluster. Defaults to \"cluster.\" External label will _not_ be added when value is set to the empty string.
    */
    'metricsExternalLabelName'?: string;
    /**
    * OverrideHonorLabels, if true, overrides all configured honor_labels read from ServiceMonitor or PodMonitor to false.
    */
    'overrideHonorLabels'?: boolean;
    /**
    * OverrideHonorTimestamps allows to globally enforce honoring timestamps in all scrape configs.
    */
    'overrideHonorTimestamps'?: boolean;
    /**
    * RemoteWrite controls default remote_write settings for all instances. If an instance does not provide its own remoteWrite settings, these will be used instead.
    */
    'remoteWrite'?: Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInner>;
    /**
    * ReplicaExternalLabelName is the name of the metrics external label used to denote replica name. Defaults to __replica__. External label will _not_ be added when value is set to the empty string.
    */
    'replicaExternalLabelName'?: string;
    /**
    * Replicas of each shard to deploy for metrics pods. Number of replicas multiplied by the number of shards is the total number of pods created.
    */
    'replicas'?: number;
    /**
    * ScrapeInterval is the time between consecutive scrapes.
    */
    'scrapeInterval'?: string;
    /**
    * ScrapeTimeout is the time to wait for a target to respond before marking a scrape as failed.
    */
    'scrapeTimeout'?: string;
    /**
    * Shards to distribute targets onto. Number of replicas multiplied by the number of shards is the total number of pods created. Note that scaling down shards will not reshard data onto remaining instances, it must be manually moved. Increasing shards will not reshard data either but it will continue to be available from the same instances. Sharding is performed on the content of the __address__ target meta-label.
    */
    'shards'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "arbitraryFSAccessThroughSMs",
            "baseName": "arbitraryFSAccessThroughSMs",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsArbitraryFSAccessThroughSMs"
        },
        {
            "name": "enforcedNamespaceLabel",
            "baseName": "enforcedNamespaceLabel",
            "type": "string"
        },
        {
            "name": "enforcedSampleLimit",
            "baseName": "enforcedSampleLimit",
            "type": "number"
        },
        {
            "name": "enforcedTargetLimit",
            "baseName": "enforcedTargetLimit",
            "type": "number"
        },
        {
            "name": "externalLabels",
            "baseName": "externalLabels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "ignoreNamespaceSelectors",
            "baseName": "ignoreNamespaceSelectors",
            "type": "boolean"
        },
        {
            "name": "instanceNamespaceSelector",
            "baseName": "instanceNamespaceSelector",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsInstanceNamespaceSelector"
        },
        {
            "name": "instanceSelector",
            "baseName": "instanceSelector",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsInstanceSelector"
        },
        {
            "name": "metricsExternalLabelName",
            "baseName": "metricsExternalLabelName",
            "type": "string"
        },
        {
            "name": "overrideHonorLabels",
            "baseName": "overrideHonorLabels",
            "type": "boolean"
        },
        {
            "name": "overrideHonorTimestamps",
            "baseName": "overrideHonorTimestamps",
            "type": "boolean"
        },
        {
            "name": "remoteWrite",
            "baseName": "remoteWrite",
            "type": "Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInner>"
        },
        {
            "name": "replicaExternalLabelName",
            "baseName": "replicaExternalLabelName",
            "type": "string"
        },
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number"
        },
        {
            "name": "scrapeInterval",
            "baseName": "scrapeInterval",
            "type": "string"
        },
        {
            "name": "scrapeTimeout",
            "baseName": "scrapeTimeout",
            "type": "string"
        },
        {
            "name": "shards",
            "baseName": "shards",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetrics.attributeTypeMap;
    }
}
