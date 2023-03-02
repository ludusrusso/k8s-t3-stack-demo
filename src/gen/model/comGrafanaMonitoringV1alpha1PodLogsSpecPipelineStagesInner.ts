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
import { ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerDrop } from './comGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerDrop';
import { ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerJson } from './comGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerJson';
import { ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMatch } from './comGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMatch';
import { ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMetricsValue } from './comGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMetricsValue';
import { ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMultiline } from './comGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMultiline';
import { ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerOutput } from './comGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerOutput';
import { ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerPack } from './comGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerPack';
import { ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerRegex } from './comGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerRegex';
import { ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerReplace } from './comGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerReplace';
import { ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerTemplate } from './comGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerTemplate';
import { ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerTenant } from './comGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerTenant';
import { ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerTimestamp } from './comGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerTimestamp';

/**
* PipelineStageSpec defines an individual pipeline stage. Each stage type is mutually exclusive and no more than one may be set per stage.   More information on pipelines can be found in the Promtail documentation: https://grafana.com/docs/loki/latest/clients/promtail/pipelines/
*/
export class ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInner {
    /**
    * CRI is a parsing stage that reads log lines using the standard CRI logging format. Supply cri: {} to enable.
    */
    'cri'?: object;
    /**
    * Docker is a parsing stage that reads log lines using the standard Docker logging format. Supply docker: {} to enable.
    */
    'docker'?: object;
    'drop'?: ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerDrop;
    'json'?: ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerJson;
    /**
    * LabelAllow is an action stage that only allows the provided labels to be included in the label set that is sent to Loki with the log entry.
    */
    'labelAllow'?: Array<string>;
    /**
    * LabelDrop is an action stage that drops labels from the label set that is sent to Loki with the log entry.
    */
    'labelDrop'?: Array<string>;
    /**
    * Labels is an action stage that takes data from the extracted map and modifies the label set that is sent to Loki with the log entry.   The key is REQUIRED and represents the name for the label that will be created. Value is optional and will be the name from extracted data to use for the value of the label. If the value is not provided, it defaults to match the key.
    */
    'labels'?: { [key: string]: string; };
    'match'?: ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMatch;
    /**
    * Metrics is an action stage that allows for defining and updating metrics based on data from the extracted map. Created metrics are not pushed to Loki or Prometheus and are instead exposed via the /metrics endpoint of the Grafana Agent pod. The Grafana Agent Operator should be configured with a MetricsInstance that discovers the logging DaemonSet to collect metrics created by this stage.
    */
    'metrics'?: { [key: string]: ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMetricsValue; };
    'multiline'?: ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMultiline;
    'output'?: ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerOutput;
    'pack'?: ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerPack;
    'regex'?: ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerRegex;
    'replace'?: ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerReplace;
    'template'?: ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerTemplate;
    'tenant'?: ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerTenant;
    'timestamp'?: ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerTimestamp;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cri",
            "baseName": "cri",
            "type": "object"
        },
        {
            "name": "docker",
            "baseName": "docker",
            "type": "object"
        },
        {
            "name": "drop",
            "baseName": "drop",
            "type": "ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerDrop"
        },
        {
            "name": "json",
            "baseName": "json",
            "type": "ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerJson"
        },
        {
            "name": "labelAllow",
            "baseName": "labelAllow",
            "type": "Array<string>"
        },
        {
            "name": "labelDrop",
            "baseName": "labelDrop",
            "type": "Array<string>"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "match",
            "baseName": "match",
            "type": "ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMatch"
        },
        {
            "name": "metrics",
            "baseName": "metrics",
            "type": "{ [key: string]: ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMetricsValue; }"
        },
        {
            "name": "multiline",
            "baseName": "multiline",
            "type": "ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMultiline"
        },
        {
            "name": "output",
            "baseName": "output",
            "type": "ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerOutput"
        },
        {
            "name": "pack",
            "baseName": "pack",
            "type": "ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerPack"
        },
        {
            "name": "regex",
            "baseName": "regex",
            "type": "ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerRegex"
        },
        {
            "name": "replace",
            "baseName": "replace",
            "type": "ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerReplace"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerTemplate"
        },
        {
            "name": "tenant",
            "baseName": "tenant",
            "type": "ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerTenant"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerTimestamp"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInner.attributeTypeMap;
    }
}
