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
import { IoK8sApiCoreV1NodeSelectorRequirement } from './ioK8sApiCoreV1NodeSelectorRequirement';

/**
* A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
*/
export class IoK8sApiCoreV1NodeSelectorTerm {
    /**
    * A list of node selector requirements by node\'s labels.
    */
    'matchExpressions'?: Array<IoK8sApiCoreV1NodeSelectorRequirement>;
    /**
    * A list of node selector requirements by node\'s fields.
    */
    'matchFields'?: Array<IoK8sApiCoreV1NodeSelectorRequirement>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "matchExpressions",
            "baseName": "matchExpressions",
            "type": "Array<IoK8sApiCoreV1NodeSelectorRequirement>"
        },
        {
            "name": "matchFields",
            "baseName": "matchFields",
            "type": "Array<IoK8sApiCoreV1NodeSelectorRequirement>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1NodeSelectorTerm.attributeTypeMap;
    }
}

