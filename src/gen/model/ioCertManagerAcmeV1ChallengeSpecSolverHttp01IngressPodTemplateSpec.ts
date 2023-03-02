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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecTolerationsInner } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecTolerationsInner';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinity } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinity';

/**
* PodSpec defines overrides for the HTTP01 challenge solver pod. Only the \'priorityClassName\', \'nodeSelector\', \'affinity\', \'serviceAccountName\' and \'tolerations\' fields are supported currently. All other fields will be ignored.
*/
export class IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpec {
    'affinity'?: IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinity;
    /**
    * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node\'s labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
    */
    'nodeSelector'?: { [key: string]: string; };
    /**
    * If specified, the pod\'s priorityClassName.
    */
    'priorityClassName'?: string;
    /**
    * If specified, the pod\'s service account
    */
    'serviceAccountName'?: string;
    /**
    * If specified, the pod\'s tolerations.
    */
    'tolerations'?: Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecTolerationsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "affinity",
            "baseName": "affinity",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinity"
        },
        {
            "name": "nodeSelector",
            "baseName": "nodeSelector",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "priorityClassName",
            "baseName": "priorityClassName",
            "type": "string"
        },
        {
            "name": "serviceAccountName",
            "baseName": "serviceAccountName",
            "type": "string"
        },
        {
            "name": "tolerations",
            "baseName": "tolerations",
            "type": "Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecTolerationsInner>"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpec.attributeTypeMap;
    }
}
