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
* Snapshot holds the metadata of namespaced Kubernetes objects
*/
export class IoFluxcdToolkitKustomizeV1beta1KustomizationStatusSnapshotEntriesInner {
    /**
    * The list of Kubernetes kinds.
    */
    'kinds': { [key: string]: string; };
    /**
    * The namespace of this entry.
    */
    'namespace'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "kinds",
            "baseName": "kinds",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitKustomizeV1beta1KustomizationStatusSnapshotEntriesInner.attributeTypeMap;
    }
}

