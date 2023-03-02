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
import { ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerMetricRelabelingsInner } from './comCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerMetricRelabelingsInner';
import { ComCoreosMonitoringV1ProbeSpecTargetsIngressNamespaceSelector } from './comCoreosMonitoringV1ProbeSpecTargetsIngressNamespaceSelector';
import { ComCoreosMonitoringV1ProbeSpecTargetsIngressSelector } from './comCoreosMonitoringV1ProbeSpecTargetsIngressSelector';

/**
* ingress defines the Ingress objects to probe and the relabeling configuration. If `staticConfig` is also defined, `staticConfig` takes precedence.
*/
export class ComCoreosMonitoringV1ProbeSpecTargetsIngress {
    'namespaceSelector'?: ComCoreosMonitoringV1ProbeSpecTargetsIngressNamespaceSelector;
    /**
    * RelabelConfigs to apply to the label set of the target before it gets scraped. The original ingress address is available via the `__tmp_prometheus_ingress_address` label. It can be used to customize the probed URL. The original scrape job\'s name is available via the `__tmp_prometheus_job_name` label. More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config
    */
    'relabelingConfigs'?: Array<ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerMetricRelabelingsInner>;
    'selector'?: ComCoreosMonitoringV1ProbeSpecTargetsIngressSelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "namespaceSelector",
            "baseName": "namespaceSelector",
            "type": "ComCoreosMonitoringV1ProbeSpecTargetsIngressNamespaceSelector"
        },
        {
            "name": "relabelingConfigs",
            "baseName": "relabelingConfigs",
            "type": "Array<ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerMetricRelabelingsInner>"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "ComCoreosMonitoringV1ProbeSpecTargetsIngressSelector"
        }    ];

    static getAttributeTypeMap() {
        return ComCoreosMonitoringV1ProbeSpecTargetsIngress.attributeTypeMap;
    }
}

