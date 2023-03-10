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
* Replace is a parsing stage that parses a log line using a regular expression and replaces the log line. Named capture groups in the regex allows for adding data into the extracted map.
*/
export class ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerReplace {
    /**
    * RE2 regular expression. Each capture group MUST be named. Required.
    */
    'expression': string;
    /**
    * Value to replace the captured group with.
    */
    'replace'?: string;
    /**
    * Name from extracted data to parse. If empty, defaults to using the log message.
    */
    'source'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expression",
            "baseName": "expression",
            "type": "string"
        },
        {
            "name": "replace",
            "baseName": "replace",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerReplace.attributeTypeMap;
    }
}

