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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPIItemsInnerFieldRef } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPIItemsInnerFieldRef';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPIItemsInnerResourceFieldRef } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPIItemsInnerResourceFieldRef';

/**
* DownwardAPIVolumeFile represents information to create the file containing the pod field
*/
export class IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerDownwardAPIItemsInner {
    'fieldRef'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPIItemsInnerFieldRef;
    /**
    * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
    */
    'mode'?: number;
    /**
    * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the \'..\' path. Must be utf-8 encoded. The first item of the relative path must not start with \'..\'
    */
    'path': string;
    'resourceFieldRef'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPIItemsInnerResourceFieldRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fieldRef",
            "baseName": "fieldRef",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPIItemsInnerFieldRef"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "number"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "resourceFieldRef",
            "baseName": "resourceFieldRef",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPIItemsInnerResourceFieldRef"
        }    ];

    static getAttributeTypeMap() {
        return IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerDownwardAPIItemsInner.attributeTypeMap;
    }
}

