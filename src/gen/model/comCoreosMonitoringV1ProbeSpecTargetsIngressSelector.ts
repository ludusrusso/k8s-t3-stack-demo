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
import { ComCoreosMonitoringV1PodMonitorSpecSelectorMatchExpressionsInner } from './comCoreosMonitoringV1PodMonitorSpecSelectorMatchExpressionsInner';

/**
* Selector to select the Ingress objects.
*/
export class ComCoreosMonitoringV1ProbeSpecTargetsIngressSelector {
    /**
    * matchExpressions is a list of label selector requirements. The requirements are ANDed.
    */
    'matchExpressions'?: Array<ComCoreosMonitoringV1PodMonitorSpecSelectorMatchExpressionsInner>;
    /**
    * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\", and the values array contains only \"value\". The requirements are ANDed.
    */
    'matchLabels'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "matchExpressions",
            "baseName": "matchExpressions",
            "type": "Array<ComCoreosMonitoringV1PodMonitorSpecSelectorMatchExpressionsInner>"
        },
        {
            "name": "matchLabels",
            "baseName": "matchLabels",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return ComCoreosMonitoringV1ProbeSpecTargetsIngressSelector.attributeTypeMap;
    }
}

