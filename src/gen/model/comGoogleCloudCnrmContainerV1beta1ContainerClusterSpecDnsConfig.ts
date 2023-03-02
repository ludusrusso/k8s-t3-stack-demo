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
* Immutable. Configuration for Cloud DNS for Kubernetes Engine.
*/
export class ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecDnsConfig {
    /**
    * Which in-cluster DNS provider should be used.
    */
    'clusterDns'?: string;
    /**
    * The suffix used for all cluster service records.
    */
    'clusterDnsDomain'?: string;
    /**
    * The scope of access to cluster DNS records.
    */
    'clusterDnsScope'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clusterDns",
            "baseName": "clusterDns",
            "type": "string"
        },
        {
            "name": "clusterDnsDomain",
            "baseName": "clusterDnsDomain",
            "type": "string"
        },
        {
            "name": "clusterDnsScope",
            "baseName": "clusterDnsScope",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecDnsConfig.attributeTypeMap;
    }
}
