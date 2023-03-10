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
import { ComGoogleCloudCnrmComputeV1beta1ComputeSnapshotSpecSnapshotEncryptionKey } from './comGoogleCloudCnrmComputeV1beta1ComputeSnapshotSpecSnapshotEncryptionKey';
import { ComGoogleCloudCnrmComputeV1beta1ComputeSnapshotSpecSourceDiskEncryptionKey } from './comGoogleCloudCnrmComputeV1beta1ComputeSnapshotSpecSourceDiskEncryptionKey';
import { ComGoogleCloudCnrmComputeV1beta1ComputeSnapshotSpecSourceDiskRef } from './comGoogleCloudCnrmComputeV1beta1ComputeSnapshotSpecSourceDiskRef';

export class ComGoogleCloudCnrmComputeV1beta1ComputeSnapshotSpec {
    /**
    * Immutable. An optional description of this resource.
    */
    'description'?: string;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    'snapshotEncryptionKey'?: ComGoogleCloudCnrmComputeV1beta1ComputeSnapshotSpecSnapshotEncryptionKey;
    'sourceDiskEncryptionKey'?: ComGoogleCloudCnrmComputeV1beta1ComputeSnapshotSpecSourceDiskEncryptionKey;
    'sourceDiskRef': ComGoogleCloudCnrmComputeV1beta1ComputeSnapshotSpecSourceDiskRef;
    /**
    * Immutable. Cloud Storage bucket storage location of the snapshot (regional or multi-regional).
    */
    'storageLocations'?: Array<string>;
    /**
    * Immutable. A reference to the zone where the disk is hosted.
    */
    'zone'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "snapshotEncryptionKey",
            "baseName": "snapshotEncryptionKey",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeSnapshotSpecSnapshotEncryptionKey"
        },
        {
            "name": "sourceDiskEncryptionKey",
            "baseName": "sourceDiskEncryptionKey",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeSnapshotSpecSourceDiskEncryptionKey"
        },
        {
            "name": "sourceDiskRef",
            "baseName": "sourceDiskRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeSnapshotSpecSourceDiskRef"
        },
        {
            "name": "storageLocations",
            "baseName": "storageLocations",
            "type": "Array<string>"
        },
        {
            "name": "zone",
            "baseName": "zone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeSnapshotSpec.attributeTypeMap;
    }
}

