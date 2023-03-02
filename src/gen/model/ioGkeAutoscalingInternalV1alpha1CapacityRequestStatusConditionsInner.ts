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
* CapacityRequestCondition indicates the state in which the CapacityRequest is currently in.
*/
export class IoGkeAutoscalingInternalV1alpha1CapacityRequestStatusConditionsInner {
    /**
    * LastTransitionTime is the last time the condition transitioned from one status to another.
    */
    'lastTransitionTime'?: Date;
    /**
    * Message is a human-readable explanation containing details about the transition.
    */
    'message'?: string;
    /**
    * Reason for the condition\'s last transition.
    */
    'reason'?: string;
    /**
    * Status of the condition (True, False, Unknown).
    */
    'status': string;
    /**
    * Type describes the current condition.
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lastTransitionTime",
            "baseName": "lastTransitionTime",
            "type": "Date"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoGkeAutoscalingInternalV1alpha1CapacityRequestStatusConditionsInner.attributeTypeMap;
    }
}

