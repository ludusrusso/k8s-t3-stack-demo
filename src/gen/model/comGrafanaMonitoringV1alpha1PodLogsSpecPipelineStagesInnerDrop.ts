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
* Drop is a filtering stage that lets you drop certain logs.
*/
export class ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerDrop {
    /**
    * Every time a log line is dropped the metric logentry_dropped_lines_total will be incremented. A \"reason\" label is added, and can be customized by providing a custom value here. Defaults to \"drop_stage.\"
    */
    'dropCounterReason'?: string;
    /**
    * RE2 regular exprssion.   If source is provided, the regex will attempt to match the source.   If no source is provided, then the regex will attempt to attach the log line.   If the provided regex matches the log line or a provided source, the line will be dropped.
    */
    'expression'?: string;
    /**
    * LongerThan will drop a log line if it its content is longer than this value (in bytes). Can be expressed as an integer (8192) or a number with a suffix (8kb).
    */
    'longerThan'?: string;
    /**
    * OlderThan will be parsed as a Go duration. If the log line\'s timestamp is older than the current time minus the provided duration it will be dropped.
    */
    'olderThan'?: string;
    /**
    * Name from the extract data to parse. If empty, uses the log message.
    */
    'source'?: string;
    /**
    * Value can only be specified when source is specified. If the value provided is an exact match for the given source then the line will be dropped.   Mutually exclusive with expression.
    */
    'value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dropCounterReason",
            "baseName": "dropCounterReason",
            "type": "string"
        },
        {
            "name": "expression",
            "baseName": "expression",
            "type": "string"
        },
        {
            "name": "longerThan",
            "baseName": "longerThan",
            "type": "string"
        },
        {
            "name": "olderThan",
            "baseName": "olderThan",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerDrop.attributeTypeMap;
    }
}

