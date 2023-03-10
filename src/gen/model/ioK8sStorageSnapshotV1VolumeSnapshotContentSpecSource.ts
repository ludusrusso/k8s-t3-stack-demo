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
* source specifies whether the snapshot is (or should be) dynamically provisioned or already exists, and just requires a Kubernetes object representation. This field is immutable after creation. Required.
*/
export class IoK8sStorageSnapshotV1VolumeSnapshotContentSpecSource {
    /**
    * snapshotHandle specifies the CSI \"snapshot_id\" of a pre-existing snapshot on the underlying storage system for which a Kubernetes object representation was (or should be) created. This field is immutable.
    */
    'snapshotHandle'?: string;
    /**
    * volumeHandle specifies the CSI \"volume_id\" of the volume from which a snapshot should be dynamically taken from. This field is immutable.
    */
    'volumeHandle'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "snapshotHandle",
            "baseName": "snapshotHandle",
            "type": "string"
        },
        {
            "name": "volumeHandle",
            "baseName": "volumeHandle",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sStorageSnapshotV1VolumeSnapshotContentSpecSource.attributeTypeMap;
    }
}

