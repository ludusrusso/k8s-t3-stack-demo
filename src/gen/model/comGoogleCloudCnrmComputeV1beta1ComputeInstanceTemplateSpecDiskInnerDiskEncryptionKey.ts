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

/**
* Immutable. Encrypts or decrypts a disk using a customer-supplied encryption key.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecDiskInnerDiskEncryptionKey {
    'kmsKeyRef': ComGoogleCloudCnrmBigqueryV1beta1BigQueryTableSpecEncryptionConfigurationKmsKeyRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "kmsKeyRef",
            "baseName": "kmsKeyRef",
            "type": "ComGoogleCloudCnrmBigqueryV1beta1BigQueryTableSpecEncryptionConfigurationKmsKeyRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecDiskInnerDiskEncryptionKey.attributeTypeMap;
    }
}

