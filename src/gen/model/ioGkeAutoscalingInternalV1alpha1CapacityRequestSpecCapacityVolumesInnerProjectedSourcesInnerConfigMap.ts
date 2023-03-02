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
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerConfigMapItemsInner } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerConfigMapItemsInner';

/**
* information about the configMap data to project
*/
export class IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerProjectedSourcesInnerConfigMap {
    /**
    * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \'..\' path or start with \'..\'.
    */
    'items'?: Array<IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerConfigMapItemsInner>;
    /**
    * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
    */
    'name'?: string;
    /**
    * Specify whether the ConfigMap or it\'s keys must be defined
    */
    'optional'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerConfigMapItemsInner>"
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
        return IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerProjectedSourcesInnerConfigMap.attributeTypeMap;
    }
}
