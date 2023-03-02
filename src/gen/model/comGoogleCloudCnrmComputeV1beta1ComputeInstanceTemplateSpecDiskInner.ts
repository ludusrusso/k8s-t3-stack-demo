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
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecResourcePoliciesInner } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecResourcePoliciesInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecDiskInnerDiskEncryptionKey } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecDiskInnerDiskEncryptionKey';
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecDiskInnerSourceDiskRef } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecDiskInnerSourceDiskRef';

export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecDiskInner {
    /**
    * Immutable. Whether or not the disk should be auto-deleted. This defaults to true.
    */
    'autoDelete'?: boolean;
    /**
    * Immutable. Indicates that this is a boot disk.
    */
    'boot'?: boolean;
    /**
    * Immutable. A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. If not specified, the server chooses a default device name to apply to this disk.
    */
    'deviceName'?: string;
    'diskEncryptionKey'?: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecDiskInnerDiskEncryptionKey;
    /**
    * Immutable. Name of the disk. When not provided, this defaults to the name of the instance.
    */
    'diskName'?: string;
    /**
    * Immutable. The size of the image in gigabytes. If not specified, it will inherit the size of its base image. For SCRATCH disks, the size must be exactly 375GB.
    */
    'diskSizeGb'?: number;
    /**
    * Immutable. The Google Compute Engine disk type. Such as \"pd-ssd\", \"local-ssd\", \"pd-balanced\" or \"pd-standard\".
    */
    'diskType'?: string;
    /**
    * Immutable. Specifies the disk interface to use for attaching this disk.
    */
    '_interface'?: string;
    /**
    * Immutable. A set of key/value label pairs to assign to disks,.
    */
    'labels'?: { [key: string]: string; };
    /**
    * Immutable. The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If you are attaching or creating a boot disk, this must read-write mode.
    */
    'mode'?: string;
    'resourcePolicies'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecResourcePoliciesInner>;
    'sourceDiskRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecDiskInnerSourceDiskRef;
    'sourceImageRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDiskInitializeParamsSourceImageRef;
    /**
    * Immutable. The type of Google Compute Engine disk, can be either \"SCRATCH\" or \"PERSISTENT\".
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "autoDelete",
            "baseName": "autoDelete",
            "type": "boolean"
        },
        {
            "name": "boot",
            "baseName": "boot",
            "type": "boolean"
        },
        {
            "name": "deviceName",
            "baseName": "deviceName",
            "type": "string"
        },
        {
            "name": "diskEncryptionKey",
            "baseName": "diskEncryptionKey",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecDiskInnerDiskEncryptionKey"
        },
        {
            "name": "diskName",
            "baseName": "diskName",
            "type": "string"
        },
        {
            "name": "diskSizeGb",
            "baseName": "diskSizeGb",
            "type": "number"
        },
        {
            "name": "diskType",
            "baseName": "diskType",
            "type": "string"
        },
        {
            "name": "_interface",
            "baseName": "interface",
            "type": "string"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "string"
        },
        {
            "name": "resourcePolicies",
            "baseName": "resourcePolicies",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecResourcePoliciesInner>"
        },
        {
            "name": "sourceDiskRef",
            "baseName": "sourceDiskRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecDiskInnerSourceDiskRef"
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
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecDiskInner.attributeTypeMap;
    }
}
