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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm';

/**
* The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner {
    'podAffinityTerm': ComGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm;
    /**
    * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
    */
    'weight': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "podAffinityTerm",
            "baseName": "podAffinityTerm",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm"
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner.attributeTypeMap;
    }
}
