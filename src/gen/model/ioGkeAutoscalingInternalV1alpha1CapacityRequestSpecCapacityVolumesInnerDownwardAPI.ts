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
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerDownwardAPIItemsInner } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerDownwardAPIItemsInner';

/**
* DownwardAPI represents downward API about the pod that should populate this volume
*/
export class IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerDownwardAPI {
    /**
    * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
    */
    'defaultMode'?: number;
    /**
    * Items is a list of downward API volume file
    */
    'items'?: Array<IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerDownwardAPIItemsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "defaultMode",
            "baseName": "defaultMode",
            "type": "number"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerDownwardAPIItemsInner>"
        }    ];

    static getAttributeTypeMap() {
        return IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerDownwardAPI.attributeTypeMap;
    }
}

