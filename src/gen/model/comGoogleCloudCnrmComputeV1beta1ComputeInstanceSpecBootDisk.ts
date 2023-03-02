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
import { ComGoogleCloudCnrmBigqueryV1beta1BigQueryTableSpecEncryptionConfigurationKmsKeyRef } from './comGoogleCloudCnrmBigqueryV1beta1BigQueryTableSpecEncryptionConfigurationKmsKeyRef';
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecAttachedDiskInnerSourceDiskRef } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecAttachedDiskInnerSourceDiskRef';
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDiskDiskEncryptionKeyRaw } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDiskDiskEncryptionKeyRaw';
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDiskInitializeParams } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDiskInitializeParams';

/**
* Immutable. The boot disk for the instance.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDisk {
    /**
    * Immutable. Whether the disk will be auto-deleted when the instance is deleted.
    */
    'autoDelete'?: boolean;
    /**
    * Immutable. Name with which attached disk will be accessible under /dev/disk/by-id/.
    */
    'deviceName'?: string;
    'diskEncryptionKeyRaw'?: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDiskDiskEncryptionKeyRaw;
    /**
    * The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
    */
    'diskEncryptionKeySha256'?: string;
    'initializeParams'?: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDiskInitializeParams;
    'kmsKeyRef'?: ComGoogleCloudCnrmBigqueryV1beta1BigQueryTableSpecEncryptionConfigurationKmsKeyRef;
    /**
    * Immutable. Read/write mode for the disk. One of \"READ_ONLY\" or \"READ_WRITE\".
    */
    'mode'?: string;
    'sourceDiskRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecAttachedDiskInnerSourceDiskRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "autoDelete",
            "baseName": "autoDelete",
            "type": "boolean"
        },
        {
            "name": "deviceName",
            "baseName": "deviceName",
            "type": "string"
        },
        {
            "name": "diskEncryptionKeyRaw",
            "baseName": "diskEncryptionKeyRaw",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDiskDiskEncryptionKeyRaw"
        },
        {
            "name": "diskEncryptionKeySha256",
            "baseName": "diskEncryptionKeySha256",
            "type": "string"
        },
        {
            "name": "initializeParams",
            "baseName": "initializeParams",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDiskInitializeParams"
        },
        {
            "name": "kmsKeyRef",
            "baseName": "kmsKeyRef",
            "type": "ComGoogleCloudCnrmBigqueryV1beta1BigQueryTableSpecEncryptionConfigurationKmsKeyRef"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "string"
        },
        {
            "name": "sourceDiskRef",
            "baseName": "sourceDiskRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecAttachedDiskInnerSourceDiskRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecBootDisk.attributeTypeMap;
    }
}
