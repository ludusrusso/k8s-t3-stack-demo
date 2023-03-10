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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector';

/**
* Required. A pod affinity term, associated with the corresponding weight.
*/
export class IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm {
    'labelSelector'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector;
    /**
    * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means \"this pod\'s namespace\"
    */
    'namespaces'?: Array<string>;
    /**
    * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
    */
    'topologyKey': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "labelSelector",
            "baseName": "labelSelector",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector"
        },
        {
            "name": "namespaces",
            "baseName": "namespaces",
            "type": "Array<string>"
        },
        {
            "name": "topologyKey",
            "baseName": "topologyKey",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm.attributeTypeMap;
    }
}

