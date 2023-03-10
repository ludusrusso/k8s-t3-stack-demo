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
import { ComGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResourcesInstancesInnerUrlRef } from './comGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResourcesInstancesInnerUrlRef';

export class ComGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResourcesInstancesInner {
    /**
    * Immutable. Output only. Unique identifier for the instance; defined by the server.
    */
    'canonicalUrl'?: string;
    'urlRef'?: ComGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResourcesInstancesInnerUrlRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "canonicalUrl",
            "baseName": "canonicalUrl",
            "type": "string"
        },
        {
            "name": "urlRef",
            "baseName": "urlRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResourcesInstancesInnerUrlRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResourcesInstancesInner.attributeTypeMap;
    }
}

