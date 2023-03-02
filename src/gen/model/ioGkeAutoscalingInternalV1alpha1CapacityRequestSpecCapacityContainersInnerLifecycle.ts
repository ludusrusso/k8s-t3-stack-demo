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
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStart } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStart';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePreStop } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePreStop';

/**
* Actions that the management system should take in response to container lifecycle events. Cannot be updated.
*/
export class IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecycle {
    'postStart'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStart;
    'preStop'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePreStop;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "postStart",
            "baseName": "postStart",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePostStart"
        },
        {
            "name": "preStop",
            "baseName": "preStop",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecyclePreStop"
        }    ];

    static getAttributeTypeMap() {
        return IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityContainersInnerLifecycle.attributeTypeMap;
    }
}
