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
* information about the downwardAPI data to project
*/
export class IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerProjectedSourcesInnerDownwardAPI {
    /**
    * Items is a list of DownwardAPIVolume file
    */
    'items'?: Array<IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerDownwardAPIItemsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerDownwardAPIItemsInner>"
        }    ];

    static getAttributeTypeMap() {
        return IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerProjectedSourcesInnerDownwardAPI.attributeTypeMap;
    }
}

