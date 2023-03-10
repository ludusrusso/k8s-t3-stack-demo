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
import { ComGoogleCloudCnrmSpannerV1beta1SpannerDatabaseSpecEncryptionConfigKmsKeyRef } from './comGoogleCloudCnrmSpannerV1beta1SpannerDatabaseSpecEncryptionConfigKmsKeyRef';

/**
* Immutable. Encryption configuration for the database.
*/
export class ComGoogleCloudCnrmSpannerV1beta1SpannerDatabaseSpecEncryptionConfig {
    'kmsKeyRef': ComGoogleCloudCnrmSpannerV1beta1SpannerDatabaseSpecEncryptionConfigKmsKeyRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "kmsKeyRef",
            "baseName": "kmsKeyRef",
            "type": "ComGoogleCloudCnrmSpannerV1beta1SpannerDatabaseSpecEncryptionConfigKmsKeyRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmSpannerV1beta1SpannerDatabaseSpecEncryptionConfig.attributeTypeMap;
    }
}

