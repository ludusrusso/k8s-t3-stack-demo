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
* RuntimeClassStrategyOptions define the strategy that will dictate the allowable RuntimeClasses for a pod.
*/
export class IoK8sApiPolicyV1beta1RuntimeClassStrategyOptions {
    /**
    * allowedRuntimeClassNames is an allowlist of RuntimeClass names that may be specified on a pod. A value of \"*\" means that any RuntimeClass name is allowed, and must be the only item in the list. An empty list requires the RuntimeClassName field to be unset.
    */
    'allowedRuntimeClassNames': Array<string>;
    /**
    * defaultRuntimeClassName is the default RuntimeClassName to set on the pod. The default MUST be allowed by the allowedRuntimeClassNames list. A value of nil does not mutate the Pod.
    */
    'defaultRuntimeClassName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowedRuntimeClassNames",
            "baseName": "allowedRuntimeClassNames",
            "type": "Array<string>"
        },
        {
            "name": "defaultRuntimeClassName",
            "baseName": "defaultRuntimeClassName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiPolicyV1beta1RuntimeClassStrategyOptions.attributeTypeMap;
    }
}

