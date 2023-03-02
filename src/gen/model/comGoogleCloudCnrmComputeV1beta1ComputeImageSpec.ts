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
import { ComGoogleCloudCnrmComputeV1beta1ComputeImageSpecDiskRef } from './comGoogleCloudCnrmComputeV1beta1ComputeImageSpecDiskRef';
import { ComGoogleCloudCnrmComputeV1beta1ComputeImageSpecGuestOsFeaturesInner } from './comGoogleCloudCnrmComputeV1beta1ComputeImageSpecGuestOsFeaturesInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeImageSpecRawDisk } from './comGoogleCloudCnrmComputeV1beta1ComputeImageSpecRawDisk';
import { ComGoogleCloudCnrmComputeV1beta1ComputeImageSpecSourceImageRef } from './comGoogleCloudCnrmComputeV1beta1ComputeImageSpecSourceImageRef';
import { ComGoogleCloudCnrmComputeV1beta1ComputeImageSpecSourceSnapshotRef } from './comGoogleCloudCnrmComputeV1beta1ComputeImageSpecSourceSnapshotRef';

export class ComGoogleCloudCnrmComputeV1beta1ComputeImageSpec {
    /**
    * Immutable. An optional description of this resource. Provide this property when you create the resource.
    */
    'description'?: string;
    'diskRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeImageSpecDiskRef;
    /**
    * Immutable. Size of the image when restored onto a persistent disk (in GB).
    */
    'diskSizeGb'?: number;
    /**
    * Immutable. The name of the image family to which this image belongs. You can create disks by specifying an image family instead of a specific image name. The image family always returns its latest image that is not deprecated. The name of the image family must comply with RFC1035.
    */
    'family'?: string;
    /**
    * Immutable. A list of features to enable on the guest operating system. Applicable only for bootable images.
    */
    'guestOsFeatures'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeImageSpecGuestOsFeaturesInner>;
    /**
    * Immutable. Any applicable license URI.
    */
    'licenses'?: Array<string>;
    'rawDisk'?: ComGoogleCloudCnrmComputeV1beta1ComputeImageSpecRawDisk;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    'sourceImageRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeImageSpecSourceImageRef;
    'sourceSnapshotRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeImageSpecSourceSnapshotRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "diskRef",
            "baseName": "diskRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeImageSpecDiskRef"
        },
        {
            "name": "diskSizeGb",
            "baseName": "diskSizeGb",
            "type": "number"
        },
        {
            "name": "family",
            "baseName": "family",
            "type": "string"
        },
        {
            "name": "guestOsFeatures",
            "baseName": "guestOsFeatures",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeImageSpecGuestOsFeaturesInner>"
        },
        {
            "name": "licenses",
            "baseName": "licenses",
            "type": "Array<string>"
        },
        {
            "name": "rawDisk",
            "baseName": "rawDisk",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeImageSpecRawDisk"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "sourceImageRef",
            "baseName": "sourceImageRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeImageSpecSourceImageRef"
        },
        {
            "name": "sourceSnapshotRef",
            "baseName": "sourceSnapshotRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeImageSpecSourceSnapshotRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeImageSpec.attributeTypeMap;
    }
}

