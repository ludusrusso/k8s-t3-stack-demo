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
* MetadataConfig configures the sending of series metadata to remote storage.
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInnerMetadataConfig {
    /**
    * Send enables metric metadata to be sent to remote storage.
    */
    'send'?: boolean;
    /**
    * SendInterval controls how frequently metric metadata is sent to remote storage.
    */
    'sendInterval'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "send",
            "baseName": "send",
            "type": "boolean"
        },
        {
            "name": "sendInterval",
            "baseName": "sendInterval",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInnerMetadataConfig.attributeTypeMap;
    }
}

