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
import { ComGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResourcesInstancesInner } from './comGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResourcesInstancesInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResourcesSubnetworksInner } from './comGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResourcesSubnetworksInner';

/**
* PacketMirroring mirroredResourceInfos. MirroredResourceInfo specifies a set of mirrored VM instances, subnetworks and/or tags for which traffic from/to all VM instances will be mirrored.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResources {
    /**
    * A set of virtual machine instances that are being mirrored. They must live in zones contained in the same region as this packetMirroring. Note that this config will apply only to those network interfaces of the Instances that belong to the network specified in this packetMirroring. You may specify a maximum of 50 Instances.
    */
    'instances'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResourcesInstancesInner>;
    /**
    * Immutable. A set of subnetworks for which traffic from/to all VM instances will be mirrored. They must live in the same region as this packetMirroring. You may specify a maximum of 5 subnetworks.
    */
    'subnetworks'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResourcesSubnetworksInner>;
    /**
    * A set of mirrored tags. Traffic from/to all VM instances that have one or more of these tags will be mirrored.
    */
    'tags'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "instances",
            "baseName": "instances",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResourcesInstancesInner>"
        },
        {
            "name": "subnetworks",
            "baseName": "subnetworks",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResourcesSubnetworksInner>"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputePacketMirroringSpecMirroredResources.attributeTypeMap;
    }
}

