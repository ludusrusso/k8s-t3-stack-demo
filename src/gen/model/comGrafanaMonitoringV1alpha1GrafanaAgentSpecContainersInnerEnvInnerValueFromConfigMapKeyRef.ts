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
* Selects a key of a ConfigMap.
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerEnvInnerValueFromConfigMapKeyRef {
    /**
    * The key to select.
    */
    'key': string;
    /**
    * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
    */
    'name'?: string;
    /**
    * Specify whether the ConfigMap or its key must be defined
    */
    'optional'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecContainersInnerEnvInnerValueFromConfigMapKeyRef.attributeTypeMap;
    }
}
