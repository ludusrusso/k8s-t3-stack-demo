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
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacity } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacity';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecProvisionPolicy } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecProvisionPolicy';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecProvisionedCapacitySelector } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecProvisionedCapacitySelector';

/**
* Specification of the CapacityRequest object. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
*/
export class IoGkeAutoscalingInternalV1alpha1CapacityRequestSpec {
    'capacity': IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacity;
    'provisionPolicy'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecProvisionPolicy;
    'provisionedCapacitySelector'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecProvisionedCapacitySelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "capacity",
            "baseName": "capacity",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacity"
        },
        {
            "name": "provisionPolicy",
            "baseName": "provisionPolicy",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecProvisionPolicy"
        },
        {
            "name": "provisionedCapacitySelector",
            "baseName": "provisionedCapacitySelector",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecProvisionedCapacitySelector"
        }    ];

    static getAttributeTypeMap() {
        return IoGkeAutoscalingInternalV1alpha1CapacityRequestSpec.attributeTypeMap;
    }
}

