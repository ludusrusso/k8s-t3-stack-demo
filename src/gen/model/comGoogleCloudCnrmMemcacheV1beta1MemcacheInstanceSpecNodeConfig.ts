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
* Immutable. Configuration for memcache nodes.
*/
export class ComGoogleCloudCnrmMemcacheV1beta1MemcacheInstanceSpecNodeConfig {
    /**
    * Number of CPUs per node.
    */
    'cpuCount': number;
    /**
    * Memory size in Mebibytes for each memcache node.
    */
    'memorySizeMb': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cpuCount",
            "baseName": "cpuCount",
            "type": "number"
        },
        {
            "name": "memorySizeMb",
            "baseName": "memorySizeMb",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMemcacheV1beta1MemcacheInstanceSpecNodeConfig.attributeTypeMap;
    }
}
