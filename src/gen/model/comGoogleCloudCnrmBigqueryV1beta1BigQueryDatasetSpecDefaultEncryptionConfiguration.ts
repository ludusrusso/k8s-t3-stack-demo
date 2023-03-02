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
import { ComGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecDefaultEncryptionConfigurationKmsKeyRef } from './comGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecDefaultEncryptionConfigurationKmsKeyRef';

/**
* The default encryption key for all tables in the dataset. Once this property is set, all newly-created partitioned tables in the dataset will have encryption key set to this value, unless table creation request (or query) overrides the key.
*/
export class ComGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecDefaultEncryptionConfiguration {
    'kmsKeyRef': ComGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecDefaultEncryptionConfigurationKmsKeyRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "kmsKeyRef",
            "baseName": "kmsKeyRef",
            "type": "ComGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecDefaultEncryptionConfigurationKmsKeyRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecDefaultEncryptionConfiguration.attributeTypeMap;
    }
}

