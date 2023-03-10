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
* ResourceRef contains the information necessary to locate a resource within a cluster.
*/
export class IoFluxcdToolkitKustomizeV1beta2KustomizationStatusInventoryEntriesInner {
    /**
    * ID is the string representation of the Kubernetes resource object\'s metadata, in the format \'<namespace>_<name>_<group>_<kind>\'.
    */
    'id': string;
    /**
    * Version is the API version of the Kubernetes resource object\'s kind.
    */
    'v': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "v",
            "baseName": "v",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitKustomizeV1beta2KustomizationStatusInventoryEntriesInner.attributeTypeMap;
    }
}

