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
* Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPIItemsInnerFieldRef {
    /**
    * Version of the schema the FieldPath is written in terms of, defaults to \"v1\".
    */
    'apiVersion'?: string;
    /**
    * Path of the field to select in the specified API version.
    */
    'fieldPath': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "fieldPath",
            "baseName": "fieldPath",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPIItemsInnerFieldRef.attributeTypeMap;
    }
}

