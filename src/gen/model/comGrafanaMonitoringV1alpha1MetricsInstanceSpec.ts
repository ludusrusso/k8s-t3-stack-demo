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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInner } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInner';
import { ComGrafanaMonitoringV1alpha1MetricsInstanceSpecAdditionalScrapeConfigs } from './comGrafanaMonitoringV1alpha1MetricsInstanceSpecAdditionalScrapeConfigs';
import { ComGrafanaMonitoringV1alpha1MetricsInstanceSpecPodMonitorNamespaceSelector } from './comGrafanaMonitoringV1alpha1MetricsInstanceSpecPodMonitorNamespaceSelector';
import { ComGrafanaMonitoringV1alpha1MetricsInstanceSpecPodMonitorSelector } from './comGrafanaMonitoringV1alpha1MetricsInstanceSpecPodMonitorSelector';
import { ComGrafanaMonitoringV1alpha1MetricsInstanceSpecProbeNamespaceSelector } from './comGrafanaMonitoringV1alpha1MetricsInstanceSpecProbeNamespaceSelector';
import { ComGrafanaMonitoringV1alpha1MetricsInstanceSpecProbeSelector } from './comGrafanaMonitoringV1alpha1MetricsInstanceSpecProbeSelector';
import { ComGrafanaMonitoringV1alpha1MetricsInstanceSpecServiceMonitorNamespaceSelector } from './comGrafanaMonitoringV1alpha1MetricsInstanceSpecServiceMonitorNamespaceSelector';
import { ComGrafanaMonitoringV1alpha1MetricsInstanceSpecServiceMonitorSelector } from './comGrafanaMonitoringV1alpha1MetricsInstanceSpecServiceMonitorSelector';

/**
* Spec holds the specification of the desired behavior for the Metrics instance.
*/
export class ComGrafanaMonitoringV1alpha1MetricsInstanceSpec {
    'additionalScrapeConfigs'?: ComGrafanaMonitoringV1alpha1MetricsInstanceSpecAdditionalScrapeConfigs;
    /**
    * MaxWALTime is the maximum amount of time series and asmples may exist in the WAL before being forcibly deleted.
    */
    'maxWALTime'?: string;
    /**
    * MinWALTime is the minimum amount of time series and samples may exist in the WAL before being considered for deletion.
    */
    'minWALTime'?: string;
    'podMonitorNamespaceSelector'?: ComGrafanaMonitoringV1alpha1MetricsInstanceSpecPodMonitorNamespaceSelector;
    'podMonitorSelector'?: ComGrafanaMonitoringV1alpha1MetricsInstanceSpecPodMonitorSelector;
    'probeNamespaceSelector'?: ComGrafanaMonitoringV1alpha1MetricsInstanceSpecProbeNamespaceSelector;
    'probeSelector'?: ComGrafanaMonitoringV1alpha1MetricsInstanceSpecProbeSelector;
    /**
    * RemoteFlushDeadline is the deadline for flushing data when an instance shuts down.
    */
    'remoteFlushDeadline'?: string;
    /**
    * RemoteWrite controls remote_write settings for this instance.
    */
    'remoteWrite'?: Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInner>;
    'serviceMonitorNamespaceSelector'?: ComGrafanaMonitoringV1alpha1MetricsInstanceSpecServiceMonitorNamespaceSelector;
    'serviceMonitorSelector'?: ComGrafanaMonitoringV1alpha1MetricsInstanceSpecServiceMonitorSelector;
    /**
    * WALTruncateFrequency specifies how frequently the WAL truncation process should run. Higher values causes the WAL to increase and for old series to stay in the WAL for longer, but reduces the chances of data loss when remote_write is failing for longer than the given frequency.
    */
    'walTruncateFrequency'?: string;
    /**
    * WriteStaleOnShutdown writes staleness markers on shutdown for all series.
    */
    'writeStaleOnShutdown'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalScrapeConfigs",
            "baseName": "additionalScrapeConfigs",
            "type": "ComGrafanaMonitoringV1alpha1MetricsInstanceSpecAdditionalScrapeConfigs"
        },
        {
            "name": "maxWALTime",
            "baseName": "maxWALTime",
            "type": "string"
        },
        {
            "name": "minWALTime",
            "baseName": "minWALTime",
            "type": "string"
        },
        {
            "name": "podMonitorNamespaceSelector",
            "baseName": "podMonitorNamespaceSelector",
            "type": "ComGrafanaMonitoringV1alpha1MetricsInstanceSpecPodMonitorNamespaceSelector"
        },
        {
            "name": "podMonitorSelector",
            "baseName": "podMonitorSelector",
            "type": "ComGrafanaMonitoringV1alpha1MetricsInstanceSpecPodMonitorSelector"
        },
        {
            "name": "probeNamespaceSelector",
            "baseName": "probeNamespaceSelector",
            "type": "ComGrafanaMonitoringV1alpha1MetricsInstanceSpecProbeNamespaceSelector"
        },
        {
            "name": "probeSelector",
            "baseName": "probeSelector",
            "type": "ComGrafanaMonitoringV1alpha1MetricsInstanceSpecProbeSelector"
        },
        {
            "name": "remoteFlushDeadline",
            "baseName": "remoteFlushDeadline",
            "type": "string"
        },
        {
            "name": "remoteWrite",
            "baseName": "remoteWrite",
            "type": "Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInner>"
        },
        {
            "name": "serviceMonitorNamespaceSelector",
            "baseName": "serviceMonitorNamespaceSelector",
            "type": "ComGrafanaMonitoringV1alpha1MetricsInstanceSpecServiceMonitorNamespaceSelector"
        },
        {
            "name": "serviceMonitorSelector",
            "baseName": "serviceMonitorSelector",
            "type": "ComGrafanaMonitoringV1alpha1MetricsInstanceSpecServiceMonitorSelector"
        },
        {
            "name": "walTruncateFrequency",
            "baseName": "walTruncateFrequency",
            "type": "string"
        },
        {
            "name": "writeStaleOnShutdown",
            "baseName": "writeStaleOnShutdown",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1MetricsInstanceSpec.attributeTypeMap;
    }
}

