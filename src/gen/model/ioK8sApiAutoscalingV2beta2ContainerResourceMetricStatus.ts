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
import { IoK8sApiAutoscalingV2beta2MetricValueStatus } from './ioK8sApiAutoscalingV2beta2MetricValueStatus';

/**
* ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.
*/
export class IoK8sApiAutoscalingV2beta2ContainerResourceMetricStatus {
    /**
    * Container is the name of the container in the pods of the scaling target
    */
    'container': string;
    'current': IoK8sApiAutoscalingV2beta2MetricValueStatus;
    /**
    * Name is the name of the resource in question.
    */
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "container",
            "baseName": "container",
            "type": "string"
        },
        {
            "name": "current",
            "baseName": "current",
            "type": "IoK8sApiAutoscalingV2beta2MetricValueStatus"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAutoscalingV2beta2ContainerResourceMetricStatus.attributeTypeMap;
    }
}
