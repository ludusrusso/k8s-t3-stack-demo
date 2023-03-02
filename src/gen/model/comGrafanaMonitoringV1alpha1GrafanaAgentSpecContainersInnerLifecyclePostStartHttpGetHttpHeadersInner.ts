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
* HTTPHeader describes a custom header to be used in HTTP probes
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartHttpGetHttpHeadersInner {
    /**
    * The header field name
    */
    'name': string;
    /**
    * The header field value
    */
    'value': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerLifecyclePostStartHttpGetHttpHeadersInner.attributeTypeMap;
    }
}
