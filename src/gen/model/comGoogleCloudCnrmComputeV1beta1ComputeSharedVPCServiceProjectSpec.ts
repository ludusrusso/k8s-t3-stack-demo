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
import { ComGoogleCloudCnrmComputeV1beta1ComputeSharedVPCServiceProjectSpecProjectRef } from './comGoogleCloudCnrmComputeV1beta1ComputeSharedVPCServiceProjectSpecProjectRef';

export class ComGoogleCloudCnrmComputeV1beta1ComputeSharedVPCServiceProjectSpec {
    'projectRef': ComGoogleCloudCnrmComputeV1beta1ComputeSharedVPCServiceProjectSpecProjectRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "projectRef",
            "baseName": "projectRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeSharedVPCServiceProjectSpecProjectRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeSharedVPCServiceProjectSpec.attributeTypeMap;
    }
}

