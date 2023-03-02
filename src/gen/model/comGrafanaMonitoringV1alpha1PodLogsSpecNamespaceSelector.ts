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
* Selector to select which namespaces the Pod objects are discovered from.
*/
export class ComGrafanaMonitoringV1alpha1PodLogsSpecNamespaceSelector {
    /**
    * Boolean describing whether all namespaces are selected in contrast to a list restricting them.
    */
    'any'?: boolean;
    /**
    * List of namespace names to select from.
    */
    'matchNames'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "any",
            "baseName": "any",
            "type": "boolean"
        },
        {
            "name": "matchNames",
            "baseName": "matchNames",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1PodLogsSpecNamespaceSelector.attributeTypeMap;
    }
}

