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

/**
* Match is a filtering stage that conditionally applies a set of stages or drop entries when a log entry matches a configurable LogQL stream selector and filter expressions.
*/
export class ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMatch {
    /**
    * Determines what action is taken when the selector matches the log line. Can be keep or drop. Defaults to keep. When set to drop, entries will be dropped and no later metrics will be recorded. Stages must be empty when dropping metrics.
    */
    'action'?: string;
    /**
    * Every time a log line is dropped the metric logentry_dropped_lines_total will be incremented. A \"reason\" label is added, and can be customized by providing a custom value here. Defaults to \"match_stage.\"
    */
    'dropCounterReason'?: string;
    /**
    * Names the pipeline. When defined, creates an additional label in the pipeline_duration_seconds histogram, where the value is concatenated with job_name using an underscore.
    */
    'pipelineName'?: string;
    /**
    * LogQL stream selector and filter expressions. Required.
    */
    'selector': string;
    /**
    * Nested set of pipeline stages to execute when action: keep and the log line matches selector.   An example value for stages may be:   stages: | - json: {} - labelAllow: [foo, bar]   Note that stages is a string because SIG API Machinery does not support recursive types, and so it cannot be validated for correctness. Be careful not to mistype anything.
    */
    'stages'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "dropCounterReason",
            "baseName": "dropCounterReason",
            "type": "string"
        },
        {
            "name": "pipelineName",
            "baseName": "pipelineName",
            "type": "string"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "string"
        },
        {
            "name": "stages",
            "baseName": "stages",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerMatch.attributeTypeMap;
    }
}

