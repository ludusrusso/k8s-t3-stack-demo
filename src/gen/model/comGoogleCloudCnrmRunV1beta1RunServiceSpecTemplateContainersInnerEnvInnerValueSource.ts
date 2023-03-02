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
import { ComGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateContainersInnerEnvInnerValueSourceSecretKeyRef } from './comGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateContainersInnerEnvInnerValueSourceSecretKeyRef';

/**
* Source for the environment variable\'s value.
*/
export class ComGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateContainersInnerEnvInnerValueSource {
    'secretKeyRef'?: ComGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateContainersInnerEnvInnerValueSourceSecretKeyRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "secretKeyRef",
            "baseName": "secretKeyRef",
            "type": "ComGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateContainersInnerEnvInnerValueSourceSecretKeyRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateContainersInnerEnvInnerValueSource.attributeTypeMap;
    }
}

