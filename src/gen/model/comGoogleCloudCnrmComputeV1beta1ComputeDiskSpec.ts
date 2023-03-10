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
import { ComGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecProjectRef } from './comGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecProjectRef';
import { ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecDiskEncryptionKey } from './comGoogleCloudCnrmComputeV1beta1ComputeDiskSpecDiskEncryptionKey';
import { ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecImageRef } from './comGoogleCloudCnrmComputeV1beta1ComputeDiskSpecImageRef';
import { ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecResourcePoliciesInner } from './comGoogleCloudCnrmComputeV1beta1ComputeDiskSpecResourcePoliciesInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecSnapshotRef } from './comGoogleCloudCnrmComputeV1beta1ComputeDiskSpecSnapshotRef';
import { ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecSourceImageEncryptionKey } from './comGoogleCloudCnrmComputeV1beta1ComputeDiskSpecSourceImageEncryptionKey';
import { ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecSourceSnapshotEncryptionKey } from './comGoogleCloudCnrmComputeV1beta1ComputeDiskSpecSourceSnapshotEncryptionKey';

export class ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpec {
    /**
    * Immutable. An optional description of this resource. Provide this property when you create the resource.
    */
    'description'?: string;
    'diskEncryptionKey'?: ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecDiskEncryptionKey;
    'imageRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecImageRef;
    /**
    * DEPRECATED. This field is no longer in use, disk interfaces will be automatically determined on attachment. To resolve this issue, remove this field from your config. Immutable. Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.
    */
    '_interface'?: string;
    /**
    * Location represents the geographical location of the ComputeDisk. Specify a region name or a zone name. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/)
    */
    'location': string;
    /**
    * Immutable. Indicates whether or not the disk can be read/write attached to more than one instance.
    */
    'multiWriter'?: boolean;
    /**
    * Immutable. Physical block size of the persistent disk, in bytes. If not present in a request, a default value is used. Currently supported sizes are 4096 and 16384, other sizes may be added in the future. If an unsupported value is requested, the error message will list the supported values for the caller\'s project.
    */
    'physicalBlockSizeBytes'?: number;
    'projectRef'?: ComGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecProjectRef;
    /**
    * Immutable. Indicates how many IOPS must be provisioned for the disk.
    */
    'provisionedIops'?: number;
    /**
    * Immutable. URLs of the zones where the disk should be replicated to.
    */
    'replicaZones'?: Array<string>;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    'resourcePolicies'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecResourcePoliciesInner>;
    /**
    * Size of the persistent disk, specified in GB. You can specify this field when creating a persistent disk using the \'image\' or \'snapshot\' parameter, or specify it alone to create an empty persistent disk.  If you specify this field along with \'image\' or \'snapshot\', the value must not be less than the size of the image or the size of the snapshot.  Upsizing the disk is mutable, but downsizing the disk requires re-creating the resource.
    */
    'size'?: number;
    'snapshotRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecSnapshotRef;
    'sourceImageEncryptionKey'?: ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecSourceImageEncryptionKey;
    'sourceSnapshotEncryptionKey'?: ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecSourceSnapshotEncryptionKey;
    /**
    * Immutable. URL of the disk type resource describing which disk type to use to create the disk. Provide this when creating the disk.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "diskEncryptionKey",
            "baseName": "diskEncryptionKey",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecDiskEncryptionKey"
        },
        {
            "name": "imageRef",
            "baseName": "imageRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecImageRef"
        },
        {
            "name": "_interface",
            "baseName": "interface",
            "type": "string"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "multiWriter",
            "baseName": "multiWriter",
            "type": "boolean"
        },
        {
            "name": "physicalBlockSizeBytes",
            "baseName": "physicalBlockSizeBytes",
            "type": "number"
        },
        {
            "name": "projectRef",
            "baseName": "projectRef",
            "type": "ComGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecProjectRef"
        },
        {
            "name": "provisionedIops",
            "baseName": "provisionedIops",
            "type": "number"
        },
        {
            "name": "replicaZones",
            "baseName": "replicaZones",
            "type": "Array<string>"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "resourcePolicies",
            "baseName": "resourcePolicies",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecResourcePoliciesInner>"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "snapshotRef",
            "baseName": "snapshotRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecSnapshotRef"
        },
        {
            "name": "sourceImageEncryptionKey",
            "baseName": "sourceImageEncryptionKey",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecSourceImageEncryptionKey"
        },
        {
            "name": "sourceSnapshotEncryptionKey",
            "baseName": "sourceSnapshotEncryptionKey",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpecSourceSnapshotEncryptionKey"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeDiskSpec.attributeTypeMap;
    }
}

