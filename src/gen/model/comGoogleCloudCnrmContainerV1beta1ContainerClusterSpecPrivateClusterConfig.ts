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
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecPrivateClusterConfigMasterGlobalAccessConfig } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecPrivateClusterConfigMasterGlobalAccessConfig';

/**
* Configuration for private clusters, clusters with private nodes.
*/
export class ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecPrivateClusterConfig {
    /**
    * Immutable. Enables the private cluster feature, creating a private endpoint on the cluster. In a private cluster, nodes only have RFC 1918 private addresses and communicate with the master\'s private endpoint via private networking.
    */
    'enablePrivateEndpoint': boolean;
    /**
    * Immutable. When true, the cluster\'s private endpoint is used as the cluster endpoint and access through the public endpoint is disabled. When false, either endpoint can be used. This field only applies to private clusters, when enable_private_nodes is true.
    */
    'enablePrivateNodes'?: boolean;
    'masterGlobalAccessConfig'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecPrivateClusterConfigMasterGlobalAccessConfig;
    /**
    * Immutable. The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning private IP addresses to the cluster master(s) and the ILB VIP. This range must not overlap with any other ranges in use within the cluster\'s network, and it must be a /28 subnet. See Private Cluster Limitations for more details. This field only applies to private clusters, when enable_private_nodes is true.
    */
    'masterIpv4CidrBlock'?: string;
    /**
    * The name of the peering between this cluster and the Google owned VPC.
    */
    'peeringName'?: string;
    /**
    * The internal IP address of this cluster\'s master endpoint.
    */
    'privateEndpoint'?: string;
    /**
    * The external IP address of this cluster\'s master endpoint.
    */
    'publicEndpoint'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enablePrivateEndpoint",
            "baseName": "enablePrivateEndpoint",
            "type": "boolean"
        },
        {
            "name": "enablePrivateNodes",
            "baseName": "enablePrivateNodes",
            "type": "boolean"
        },
        {
            "name": "masterGlobalAccessConfig",
            "baseName": "masterGlobalAccessConfig",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecPrivateClusterConfigMasterGlobalAccessConfig"
        },
        {
            "name": "masterIpv4CidrBlock",
            "baseName": "masterIpv4CidrBlock",
            "type": "string"
        },
        {
            "name": "peeringName",
            "baseName": "peeringName",
            "type": "string"
        },
        {
            "name": "privateEndpoint",
            "baseName": "privateEndpoint",
            "type": "string"
        },
        {
            "name": "publicEndpoint",
            "baseName": "publicEndpoint",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecPrivateClusterConfig.attributeTypeMap;
    }
}

