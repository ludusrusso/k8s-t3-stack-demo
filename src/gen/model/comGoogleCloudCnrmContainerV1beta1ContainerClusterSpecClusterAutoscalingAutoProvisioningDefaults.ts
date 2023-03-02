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
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecServiceAccountServiceAccountRef } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecServiceAccountServiceAccountRef';

/**
* Contains defaults for a node pool created by NAP.
*/
export class ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecClusterAutoscalingAutoProvisioningDefaults {
    /**
    * The default image type used by NAP once a new node pool is being created.
    */
    'imageType'?: string;
    /**
    * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell.
    */
    'minCpuPlatform'?: string;
    /**
    * Scopes that are used by NAP when creating node pools.
    */
    'oauthScopes'?: Array<string>;
    'serviceAccountRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecServiceAccountServiceAccountRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "imageType",
            "baseName": "imageType",
            "type": "string"
        },
        {
            "name": "minCpuPlatform",
            "baseName": "minCpuPlatform",
            "type": "string"
        },
        {
            "name": "oauthScopes",
            "baseName": "oauthScopes",
            "type": "Array<string>"
        },
        {
            "name": "serviceAccountRef",
            "baseName": "serviceAccountRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecServiceAccountServiceAccountRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecClusterAutoscalingAutoProvisioningDefaults.attributeTypeMap;
    }
}

