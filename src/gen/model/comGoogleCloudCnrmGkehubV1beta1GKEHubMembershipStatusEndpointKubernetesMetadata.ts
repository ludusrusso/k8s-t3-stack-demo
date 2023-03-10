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
* Output only. Useful Kubernetes-specific metadata.
*/
export class ComGoogleCloudCnrmGkehubV1beta1GKEHubMembershipStatusEndpointKubernetesMetadata {
    /**
    * Output only. Kubernetes API server version string as reported by `/version`.
    */
    'kubernetesApiServerVersion'?: string;
    /**
    * Output only. The total memory capacity as reported by the sum of all Kubernetes nodes resources, defined in MB.
    */
    'memoryMb'?: number;
    /**
    * Output only. Node count as reported by Kubernetes nodes resources.
    */
    'nodeCount'?: number;
    /**
    * Output only. Node providerID as reported by the first node in the list of nodes on the Kubernetes endpoint. On Kubernetes platforms that support zero-node clusters (like GKE-on-GCP), the node_count will be zero and the node_provider_id will be empty.
    */
    'nodeProviderId'?: string;
    /**
    * Output only. The time at which these details were last updated. This update_time is different from the Membership-level update_time since EndpointDetails are updated internally for API consumers.
    */
    'updateTime'?: Date;
    /**
    * Output only. vCPU count as reported by Kubernetes nodes resources.
    */
    'vcpuCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "kubernetesApiServerVersion",
            "baseName": "kubernetesApiServerVersion",
            "type": "string"
        },
        {
            "name": "memoryMb",
            "baseName": "memoryMb",
            "type": "number"
        },
        {
            "name": "nodeCount",
            "baseName": "nodeCount",
            "type": "number"
        },
        {
            "name": "nodeProviderId",
            "baseName": "nodeProviderId",
            "type": "string"
        },
        {
            "name": "updateTime",
            "baseName": "updateTime",
            "type": "Date"
        },
        {
            "name": "vcpuCount",
            "baseName": "vcpuCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmGkehubV1beta1GKEHubMembershipStatusEndpointKubernetesMetadata.attributeTypeMap;
    }
}

