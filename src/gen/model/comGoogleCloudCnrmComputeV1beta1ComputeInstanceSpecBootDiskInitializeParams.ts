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
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDiskInitializeParamsSourceImageRef } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDiskInitializeParamsSourceImageRef';

/**
* Immutable. Parameters with which a disk was created alongside the instance.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDiskInitializeParams {
    /**
    * Immutable. A set of key/value label pairs assigned to the disk.
    */
    'labels'?: object;
    /**
    * Immutable. The size of the image in gigabytes.
    */
    'size'?: number;
    'sourceImageRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDiskInitializeParamsSourceImageRef;
    /**
    * Immutable. The Google Compute Engine disk type. Such as pd-standard, pd-ssd or pd-balanced.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "labels",
            "baseName": "labels",
            "type": "object"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "sourceImageRef",
            "baseName": "sourceImageRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDiskInitializeParamsSourceImageRef"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDiskInitializeParams.attributeTypeMap;
    }
}

