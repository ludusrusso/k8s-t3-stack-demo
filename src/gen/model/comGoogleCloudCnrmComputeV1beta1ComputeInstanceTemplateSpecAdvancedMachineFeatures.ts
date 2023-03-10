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
* Immutable. Controls for advanced machine-related behavior features.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecAdvancedMachineFeatures {
    /**
    * Immutable. Whether to enable nested virtualization or not.
    */
    'enableNestedVirtualization'?: boolean;
    /**
    * Immutable. The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
    */
    'threadsPerCore'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enableNestedVirtualization",
            "baseName": "enableNestedVirtualization",
            "type": "boolean"
        },
        {
            "name": "threadsPerCore",
            "baseName": "threadsPerCore",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecAdvancedMachineFeatures.attributeTypeMap;
    }
}

