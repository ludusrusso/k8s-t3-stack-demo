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
import { IoK8sStorageSnapshotV1VolumeSnapshotSpecSource } from './ioK8sStorageSnapshotV1VolumeSnapshotSpecSource';

/**
* spec defines the desired characteristics of a snapshot requested by a user. More info: https://kubernetes.io/docs/concepts/storage/volume-snapshots#volumesnapshots Required.
*/
export class IoK8sStorageSnapshotV1VolumeSnapshotSpec {
    'source': IoK8sStorageSnapshotV1VolumeSnapshotSpecSource;
    /**
    * VolumeSnapshotClassName is the name of the VolumeSnapshotClass requested by the VolumeSnapshot. VolumeSnapshotClassName may be left nil to indicate that the default SnapshotClass should be used. A given cluster may have multiple default Volume SnapshotClasses: one default per CSI Driver. If a VolumeSnapshot does not specify a SnapshotClass, VolumeSnapshotSource will be checked to figure out what the associated CSI Driver is, and the default VolumeSnapshotClass associated with that CSI Driver will be used. If more than one VolumeSnapshotClass exist for a given CSI Driver and more than one have been marked as default, CreateSnapshot will fail and generate an event. Empty string is not allowed for this field.
    */
    'volumeSnapshotClassName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "source",
            "baseName": "source",
            "type": "IoK8sStorageSnapshotV1VolumeSnapshotSpecSource"
        },
        {
            "name": "volumeSnapshotClassName",
            "baseName": "volumeSnapshotClassName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sStorageSnapshotV1VolumeSnapshotSpec.attributeTypeMap;
    }
}
