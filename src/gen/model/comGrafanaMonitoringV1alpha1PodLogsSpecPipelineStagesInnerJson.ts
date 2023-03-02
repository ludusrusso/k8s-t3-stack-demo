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
* JSON is a parsing stage that reads the log line as JSON and accepts JMESPath expressions to extract data.   Information on JMESPath: http://jmespath.org/
*/
export class ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerJson {
    /**
    * Set of the key/value pairs of JMESPath expressions. The key will be the key in the extracted data while the expression will be the value, evaluated as a JMESPath from the source data.   Literal JMESPath exprssions can be done by wrapping a key in double quotes, which then must be wrapped again in single quotes in YAML so they get passed to the JMESPath parser.
    */
    'expressions'?: { [key: string]: string; };
    /**
    * Name from the extracted data to parse as JSON. If empty, uses entire log message.
    */
    'source'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expressions",
            "baseName": "expressions",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1PodLogsSpecPipelineStagesInnerJson.attributeTypeMap;
    }
}
