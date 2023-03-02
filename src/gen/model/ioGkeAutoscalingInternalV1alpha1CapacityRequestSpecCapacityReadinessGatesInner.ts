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
* PodReadinessGate contains the reference to a pod condition
*/
export class IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityReadinessGatesInner {
    /**
    * ConditionType refers to a condition in the pod\'s condition list with matching type.
    */
    'conditionType': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditionType",
            "baseName": "conditionType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityReadinessGatesInner.attributeTypeMap;
    }
}

