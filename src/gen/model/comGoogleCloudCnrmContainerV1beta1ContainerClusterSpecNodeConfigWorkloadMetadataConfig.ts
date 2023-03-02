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
* Immutable. The workload metadata configuration for this node.
*/
export class ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNodeConfigWorkloadMetadataConfig {
    /**
    * Mode is the configuration for how to expose metadata to workloads running on the node.
    */
    'mode'?: string;
    /**
    * DEPRECATED. Deprecated in favor of mode. NodeMetadata is the configuration for how to expose metadata to the workloads running on the node.
    */
    'nodeMetadata'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mode",
            "baseName": "mode",
            "type": "string"
        },
        {
            "name": "nodeMetadata",
            "baseName": "nodeMetadata",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNodeConfigWorkloadMetadataConfig.attributeTypeMap;
    }
}
