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
* Use a single-cluster routing policy.
*/
export class ComGoogleCloudCnrmBigtableV1beta1BigtableAppProfileSpecSingleClusterRouting {
    /**
    * If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile. It is unsafe to send these requests to the same table/row/column in multiple clusters.
    */
    'allowTransactionalWrites'?: boolean;
    /**
    * The cluster to which read/write requests should be routed.
    */
    'clusterId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowTransactionalWrites",
            "baseName": "allowTransactionalWrites",
            "type": "boolean"
        },
        {
            "name": "clusterId",
            "baseName": "clusterId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBigtableV1beta1BigtableAppProfileSpecSingleClusterRouting.attributeTypeMap;
    }
}

