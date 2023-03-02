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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner';

/**
* A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsInner {
    /**
    * A list of node selector requirements by node\'s labels.
    */
    'matchExpressions'?: Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner>;
    /**
    * A list of node selector requirements by node\'s fields.
    */
    'matchFields'?: Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "matchExpressions",
            "baseName": "matchExpressions",
            "type": "Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner>"
        },
        {
            "name": "matchFields",
            "baseName": "matchFields",
            "type": "Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreferenceMatchExpressionsInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsInner.attributeTypeMap;
    }
}
