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
* Logging configuration for the cluster.
*/
export class ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecLoggingConfig {
    /**
    * GKE components exposing logs. Valid values include SYSTEM_COMPONENTS and WORKLOADS.
    */
    'enableComponents': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enableComponents",
            "baseName": "enableComponents",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecLoggingConfig.attributeTypeMap;
    }
}

