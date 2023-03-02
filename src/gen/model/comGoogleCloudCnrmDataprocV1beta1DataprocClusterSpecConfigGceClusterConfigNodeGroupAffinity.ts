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
import { ComGoogleCloudCnrmDataprocV1beta1DataprocClusterSpecConfigGceClusterConfigNodeGroupAffinityNodeGroupRef } from './comGoogleCloudCnrmDataprocV1beta1DataprocClusterSpecConfigGceClusterConfigNodeGroupAffinityNodeGroupRef';

/**
* Immutable. Optional. Node Group Affinity for sole-tenant clusters.
*/
export class ComGoogleCloudCnrmDataprocV1beta1DataprocClusterSpecConfigGceClusterConfigNodeGroupAffinity {
    'nodeGroupRef': ComGoogleCloudCnrmDataprocV1beta1DataprocClusterSpecConfigGceClusterConfigNodeGroupAffinityNodeGroupRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nodeGroupRef",
            "baseName": "nodeGroupRef",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocClusterSpecConfigGceClusterConfigNodeGroupAffinityNodeGroupRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocClusterSpecConfigGceClusterConfigNodeGroupAffinity.attributeTypeMap;
    }
}
