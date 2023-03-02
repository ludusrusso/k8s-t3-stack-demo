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
import { IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec } from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec';
import { IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus } from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './ioK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
* PriorityLevelConfiguration represents the configuration of a priority level.
*/
export class IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    'spec'?: IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec;
    'status'?: IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "IoK8sApimachineryPkgApisMetaV1ObjectMeta"
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration.attributeTypeMap;
    }
}

